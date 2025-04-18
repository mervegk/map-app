import { useState, useEffect } from "react"
import { useMap, AdvancedMarker, InfoWindow, Pin, useAdvancedMarkerRef } from "@vis.gl/react-google-maps"
import { RawLocation } from '@/data/locations'

export default function Markers({ points }: { points: RawLocation[] }) {
  const [showLocationName, setShowLocationName] = useState<number | null>(null)
  const map = useMap()

  return <>
    {points.map(([point, { lat, lng }], index,) => {
      const [markerRef, marker] = useAdvancedMarkerRef()
      return (
        <AdvancedMarker
          key={index}
          position={{ lat, lng }}
          onMouseEnter={() => setShowLocationName(index)}
          onMouseLeave={() => setShowLocationName(null)}
          ref={markerRef}
        >
          <Pin />
          {
            showLocationName === index && (
              <InfoWindow anchor={marker}>
                <div>{point}</div>
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