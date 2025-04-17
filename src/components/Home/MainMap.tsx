'use client'
import { useState } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap, useAdvancedMarkerRef } from '@vis.gl/react-google-maps'
import { locationList, RawLocation } from '@/data/locations'



export default function MainMap({ }: Props) {
  const position = { lat: 41.01750875299681, lng: 28.9709432341656 };

  return (
    <section className='container mx-auto h-full p-2'>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div className='h-[calc(100vh-72px)]'>
          <Map zoom={12} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
            <Markers points={locationList} />
            {/*  <AdvancedMarker position={position}>
              <Pin background='orange' borderColor='mediumvioletred' glyphColor='white' />
            </AdvancedMarker> */}
          </Map>
        </div>

      </APIProvider>

    </section>
  )
}

type Point = google.maps.LatLngLiteral & { key: string }
type Props = { points: Point[] }

const Markers = ({ points }: { points: RawLocation[] }) => {
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
        </AdvancedMarker>)
    }
    )
    }
  </>
}