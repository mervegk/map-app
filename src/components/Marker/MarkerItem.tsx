import { AdvancedMarker, InfoWindow, Pin, useAdvancedMarkerRef } from "@vis.gl/react-google-maps"

type Props = {
  index: number
  point: SavedLocationType
  markerColors: Pick<MarkerContextType, 'background' | 'borderColor' | 'glyphColor'>
  showLocationName: number | null
  setShowLocationName: React.Dispatch<React.SetStateAction<number | null>>
}

export default function MarkerItem({ index, point, markerColors, showLocationName, setShowLocationName }: Props) {
  const [markerRef, marker] = useAdvancedMarkerRef()

  return (
    <AdvancedMarker
      position={point.coordinates}
      onMouseEnter={() => setShowLocationName(index)}
      onMouseLeave={() => setShowLocationName(null)}
      ref={markerRef}
    >
      <Pin {...markerColors} />
      {showLocationName === index && marker && (
        <InfoWindow anchor={marker}>
          <div>{point.name}</div>
        </InfoWindow>
      )}
    </AdvancedMarker>
  )
}