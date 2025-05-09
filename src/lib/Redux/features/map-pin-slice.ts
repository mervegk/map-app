import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: MarkerContextType
}

const initialState = {
  value: {
    background: "#fff",
    borderColor: "#fff",
    glyphColor: "#fff"
  }
} as InitialState

const mapPinColors = createSlice({
  name: "map-pin-colors",
  initialState,
  reducers: {
    setBgColor: (state, action: PayloadAction<string>) => {
      state.value.background = action.payload
    },
    setBorderColor: (state, action: PayloadAction<string>) => {
      state.value.borderColor = action.payload
    },
    setGlyphColor: (state, action: PayloadAction<string>) => {
      state.value.glyphColor = action.payload
    }
  }
})

export const { setBgColor, setBorderColor, setGlyphColor } = mapPinColors.actions;
export default mapPinColors.reducer;
