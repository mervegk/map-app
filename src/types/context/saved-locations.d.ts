interface SavedLocationsContextType {
  savedLocations: Location[]
  addLocations: (location: Location) => void
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Location {
  name: string;
  coordinates: Coordinates;
}