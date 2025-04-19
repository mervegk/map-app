'use client'
import { useState, useCallback, useEffect } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap, useAdvancedMarkerRef, Marker, MapMouseEvent } from '@vis.gl/react-google-maps'
import { useMarkerColor } from '@/context/MarkerContext'

type Props = {}
export type LatLng = {
  lat: number | null;
  lng: number | null;
}
export const defaultPosition = { lat: 41.01750875299681, lng: 28.9709432341656 }

export default function MainMap({ }: Props) {
  const { background, borderColor, glyphColor } = useMarkerColor()
  const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(null)

  return (
    <section className='relative w-full h-full'>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div className='h-[calc(100vh-72px)]'>
          <Map defaultZoom={12}
            defaultCenter={position || defaultPosition}
            mapId={process.env.NEXT_PUBLIC_MAP_ID}
            gestureHandling='greedy'
          >
            <AdvancedMarker position={position}>
              <Pin background={background} borderColor={borderColor} glyphColor={glyphColor} />
            </AdvancedMarker>
          </Map>
        </div>
      </APIProvider>
    </section>
  )
}