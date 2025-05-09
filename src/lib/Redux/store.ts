import { configureStore } from '@reduxjs/toolkit'
import mapPinColorsReducer from './features/map-pin-slice'

const saveToLocalStorage = (state: any) => {
  try {
    const serializedState = JSON.stringify(state.mapPinColors);
    localStorage.setItem("mapPinColors", serializedState);
  } catch (e) {
    console.warn("Redux state localStorage'a kaydedilemedi", e);
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("mapPinColors");
    if (serializedState === null) return undefined;
    return { mapPinColors: JSON.parse(serializedState) };
  } catch (e) {
    console.warn("localStorage'dan Redux state okunamadı", e);
    return undefined;
  }
}

const preloadedState = loadFromLocalStorage()

export const store = configureStore({
  reducer: {
    mapPinColors: mapPinColorsReducer
  },
  preloadedState
})

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
