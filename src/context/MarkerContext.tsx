'use client'
import { createContext, useContext, useState, useEffect } from "react";

const MarkerContext = createContext<MarkerContextType | undefined>(undefined);

export function MarkerColorProvider({ children }: ChildrenProp) {
  const [markerColor, setMarkerColor] = useState('');
  const [background, setBackground] = useState('');
  const [borderColor, setBorderColor] = useState('');
  const [glyphColor, setGlyphColor] = useState('');

  useEffect(() => {
    const storedMarkerColor = localStorage.getItem('markerColor');
    const storedBgColor = localStorage.getItem('markerBgColor');
    const storedBorderColor = localStorage.getItem('markerBorderColor');
    const storedGlyphColor = localStorage.getItem('markerGlyphColor');

    if (storedMarkerColor) setMarkerColor(storedMarkerColor);
    if (storedBgColor) setBackground(storedBgColor);
    if (storedBorderColor) setBorderColor(storedBorderColor);
    if (storedGlyphColor) setGlyphColor(storedGlyphColor);
  }, []);


  const changeMarkerColor = (newColor: string) => {
    setMarkerColor(newColor);
    localStorage.setItem('markerColor', newColor);
  };

  const changeBgColor = (newColor: string) => {
    setBackground(newColor);
    localStorage.setItem('markerBgColor', newColor);
  };

  const changeBorderColor = (newColor: string) => {
    setBorderColor(newColor);
    localStorage.setItem('markerBorderColor', newColor);
  };

  const changeGlyphColor = (newColor: string) => {
    setGlyphColor(newColor);
    localStorage.setItem('markerGlyphColor', newColor);
  };

  const values = {
    markerColor,
    background,
    borderColor,
    glyphColor,
    changeMarkerColor,
    changeBgColor,
    changeBorderColor,
    changeGlyphColor
  };

  return <MarkerContext.Provider value={values}>{children}</MarkerContext.Provider>;
}

export function useMarkerColor() {
  const context = useContext(MarkerContext);
  if (context === undefined) {
    throw new Error('useMarkerColor must be used within a MarkerColorProvider');
  }
  return context;
}