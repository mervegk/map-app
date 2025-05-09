import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: SavedLocationType
}

const initialState = {
  value: {
    id: "",
    name: "",
    coordinates: {
      lat: 0,
      lng: 0
    }
  }
} as InitialState

export const locationList = createSlice({
  name: "location-list",
  initialState,
  reducers: {

  }
})