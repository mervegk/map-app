import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: SavedLocationType[]
}

const initialState = {
  value: []
} as InitialState

export const locationList = createSlice({
  name: "location-list",
  initialState,
  reducers: {
    addLocation: (state, action: PayloadAction<SavedLocationType>) => {
      state.value.push(action.payload)
    }
  }
})

export const { addLocation } = locationList.actions
export default locationList.reducer