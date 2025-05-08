'use client'
import { useState, useCallback } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap, useAdvancedMarkerRef, Marker, MapMouseEvent } from '@vis.gl/react-google-maps'
import SaveLocation from '@/components/SaveLocation'
import Markers from '@/components/Marker/Markers'
import { useMarkerColor } from '@/context/MarkerContext'
import { useSavedLocations } from '@/context/SavedLocationsContext'
import { defaultPosition } from '@/components/Home/MainMap'
import { LatLng } from '@/components/Home/MainMap'

type Props = {}

export default function LocationList({ }: Props) {
  const { background, borderColor, glyphColor } = useMarkerColor()
  const { savedLocations, addLocations } = useSavedLocations()
  const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(null)
  const [location, setLocation] = useState<LatLng>({ lat: null, lng: null })

  const handleMapClick = useCallback((e: MapMouseEvent) => {
    const { latLng } = e.detail
    if (!latLng) return;

    setPosition({ lat: latLng.lat, lng: latLng.lng })
  }, [])

  return (
    <section className='relative w-full h-full'>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div className='h-[calc(100vh-72px)]'>
          <Map defaultZoom={12}
            defaultCenter={position || defaultPosition}
            mapId={process.env.NEXT_PUBLIC_MAP_ID}
            gestureHandling='greedy'
            onClick={handleMapClick}
          >
            {position && (
              <>
                <AdvancedMarker position={position} >
                  <Pin background={background} borderColor={borderColor} glyphColor={glyphColor} />
                </AdvancedMarker>
                <div className='absolute bottom-4 left-4 shadow-lg'
                >
                  <SaveLocation lat={position.lat} lng={position.lng} />
                </div>
              </>
            )}
            <Markers points={savedLocations} markerColors={{ background, borderColor, glyphColor }} />
          </Map>
        </div>
      </APIProvider>
    </section>
  )
}