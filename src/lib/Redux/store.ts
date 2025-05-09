import { configureStore } from '@reduxjs/toolkit'
import mapPinColorsReducer from './features/map-pin-slice'
import locationListReducer from './features/location-list-slice'

const saveToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state.mapPinColors)
    const serializedLocations = JSON.stringify(state.locationList.value)

    localStorage.setItem("mapPinColors", serializedState)
    localStorage.setItem("locationList", serializedLocations)
  } catch (e) {
    console.warn("Redux state localStorage'a kaydedilemedi", e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedMapPinColors = localStorage.getItem("mapPinColors")
    const serializedLocations = localStorage.getItem("locationList")

    if (!serializedMapPinColors || !serializedLocations) return undefined

    return {
      mapPinColors: JSON.parse(serializedMapPinColors),
      locationList: {
        value: JSON.parse(serializedLocations)
      }
    };
  } catch (e) {
    console.warn("localStorage'dan Redux state okunamadı", e)
    return undefined
  }
}


const isClient = typeof window !== 'undefined'

const preloadedState = isClient ? loadFromLocalStorage() : undefined

export const store = configureStore({
  reducer: {
    mapPinColors: mapPinColorsReducer,
    locationList: locationListReducer
  },
  preloadedState
})

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
