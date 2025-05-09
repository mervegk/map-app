import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: MarkerContextType
}

const initialState = {
  value: {
    background: "#ea4335",
    borderColor: "#c5221f",
    glyphColor: "#b31412"
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

export const { setBgColor, setBorderColor, setGlyphColor } = mapPinColors.actions
export default mapPinColors.reducer
