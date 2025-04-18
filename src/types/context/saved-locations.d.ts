interface SavedLocationsContextType {
  savedLocations: SavedLocationType[]
  addLocations: (location: SavedLocation) => void
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface SavedLocationType {
  name: string;
  coordinates: Coordinates;
}