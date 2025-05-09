interface MarkerContextType {
  background: string;
  borderColor: string;
  glyphColor: string;
  changeMarkerColor?: (newColor: string) => void;
  changeBgColor?: (newColor: string) => void;
  changeBorderColor?: (newColor: string) => void;
  changeGlyphColor?: (newColor: string) => void;
}