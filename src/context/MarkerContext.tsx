import { createContext, useContext, useState, useEffect } from "react";

const MarkerContext = createContext<MarkerContextType | undefined>(undefined)

export function MarkerColorProvider({ children }: ChildrenProp) {
  const [markerColor, setMarkerColor] = useState('')

  useEffect(() => {
    const storedMarkerColor = localStorage.getItem('markerColor')
    if (storedMarkerColor) {
      setMarkerColor(storedMarkerColor)
    }
  }, [])

  const changeMarkerColor = (newMarkerColor: string) => {
    setMarkerColor(newMarkerColor)
    localStorage.setItem('markerColor', newMarkerColor)
  }

  return <MarkerContext.Provider value={{ markerColor, changeMarkerColor }}>{children}</MarkerContext.Provider>
}

export function useMarkerColor() {
  const context = useContext(MarkerContext)
  if (context === undefined) {
    throw new Error('useMArkerColor must be used within a MarkerColorProvider');
  }
  return context
} 