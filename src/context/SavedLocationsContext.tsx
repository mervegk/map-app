'use client'
import { createContext, useContext, useState, useEffect } from "react"

const SavedLocationsContext = createContext<SavedLocationsContextType | undefined>(undefined)

export function SavedLocationsProvider({ children }: ChildrenProp) {
  const [savedLocations, setSavedLocations] = useState<SavedLocationType[]>([])
  //const [addLocations, setAddLocations] = useState<Location[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('savedPlaces');
    if (saved) {
      const savedArray = JSON.parse(saved);
      setSavedLocations(savedArray)
    }
  }, [])

  const addLocation = (newLocation: SavedLocationType) => {
    const updated = [...savedLocations, newLocation]
    setSavedLocations(updated)
    localStorage.setItem('savedPlaces', JSON.stringify(updated))
  }

  const value: SavedLocationsContextType = {
    savedLocations,
    addLocations: addLocation
  }

  return (
    <SavedLocationsContext.Provider value={value}>
      {children}
    </SavedLocationsContext.Provider>
  )

}

export function useSavedLocations() {
  const context = useContext(SavedLocationsContext);
  if (context === undefined) {
    throw new Error('useSavedLocations must be used within a SavedLocationsProvider');
  }
  return context;
}