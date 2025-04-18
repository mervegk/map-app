import { useState, useEffect } from "react"
import { useMap, AdvancedMarker, InfoWindow, Pin, useAdvancedMarkerRef } from "@vis.gl/react-google-maps"

type Props = {
  points: SavedLocationType[]
  markerColors: Pick<MarkerContextType, 'background' | 'borderColor' | 'glyphColor'>
}

export default function Markers({ points, markerColors }: Props) {
  const [showLocationName, setShowLocationName] = useState<number | null>(null)
  const map = useMap()

  return <>
    {points.map((point, index,) => {
      const [markerRef, marker] = useAdvancedMarkerRef()
      return (
        <AdvancedMarker
          key={index}
          position={point.coordinates}
          onMouseEnter={() => setShowLocationName(index)}
          onMouseLeave={() => setShowLocationName(null)}
          ref={markerRef}
        >
          <Pin {...markerColors} />
          {
            showLocationName === index && (
              <InfoWindow anchor={marker}>
                <div>{point.name}</div>
              </InfoWindow>
            )
          }
        </AdvancedMarker>
      )
    }
    )
    }
  </>
}