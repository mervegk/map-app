interface Coordinates {
  lat: number;
  lng: number;
}

interface SavedLocationType {
  id: number | string
  name: string;
  coordinates: Coordinates;
}