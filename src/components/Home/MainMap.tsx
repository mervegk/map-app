'use client'
import { useState, useCallback } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap, useAdvancedMarkerRef, Marker, MapMouseEvent } from '@vis.gl/react-google-maps'
import Directions from './Directions'
import Markers from './Markers'
import { locationList } from '@/data/locations'

type Props = {}

export default function MainMap({ }: Props) {
  const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(null)
  const defaultPosition = { lat: 41.01750875299681, lng: 28.9709432341656 }

  const handleMapClick = useCallback((e: MapMouseEvent) => {
    const { latLng } = e.detail
    if (!latLng) return;

    setPosition({ lat: latLng.lat, lng: latLng.lng })
  }, [])

  console.log(position);

  return (
    <section className='relative w-full h-full'>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div className='h-[calc(100vh-72px)]'>
          <Map defaultZoom={12}
            defaultCenter={position || defaultPosition}
            mapId={process.env.NEXT_PUBLIC_MAP_ID}
            gestureHandling='greedy'
            disableDefaultUI={true}
            onClick={handleMapClick}
          >
            {position && <Marker position={position} />}
            {/* <Directions /> */}
            {/* <Markers points={locationList} /> */}
            {/*  <AdvancedMarker position={position}>
              <Pin background='orange' borderColor='mediumvioletred' glyphColor='white' />
            </AdvancedMarker> */}
          </Map>
        </div>
      </APIProvider>
    </section>
  )
}