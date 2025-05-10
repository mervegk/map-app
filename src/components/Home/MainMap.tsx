'use client'
import { useState } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap, useAdvancedMarkerRef, Marker, MapMouseEvent } from '@vis.gl/react-google-maps'
import { useMapPinColors } from '@/hooks/useMapPinColors'

type Props = {
  isDetail?: boolean
  locationData?: SavedLocationType
}

export const defaultPosition = { lat: 41.01750875299681, lng: 28.9709432341656 }

export default function MainMap({ isDetail = false, locationData }: Props) {
  const { background, borderColor, glyphColor } = useMapPinColors()
  const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(null)

  return (
    <section className='relative w-full h-full'>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div className={`${isDetail ? 'h-[500px]' : 'h-[calc(100vh-72px)]'}`}>
          <Map
            id='main-map'
            gestureHandling='greedy'
            mapId={process.env.NEXT_PUBLIC_MAP_ID}
            defaultZoom={isDetail ? 15 : 12}
            defaultCenter={isDetail ? locationData?.coordinates : position || defaultPosition}
          >
            <AdvancedMarker position={isDetail ? locationData?.coordinates : position}>
              <Pin background={background} borderColor={borderColor} glyphColor={glyphColor} />
            </AdvancedMarker>
          </Map>
        </div>
      </APIProvider>
    </section>
  )
}