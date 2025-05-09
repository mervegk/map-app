'use client'
import { useState, useCallback } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, MapMouseEvent } from '@vis.gl/react-google-maps'
import SaveLocation from '@/components/SaveLocation'
import Markers from '@/components/Marker/Markers'
import { defaultPosition } from '@/components/Home/MainMap'
import { useMapPinColors } from '@/hooks/useMapPinColors'
import { useLocationList } from '@/hooks/useLocationList'

export default function LocationList() {
  const { background, borderColor, glyphColor } = useMapPinColors()
  const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(null)

  const { locations } = useLocationList()

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
            <Markers points={locations} markerColors={{ background, borderColor, glyphColor }} />
          </Map>
        </div>
      </APIProvider>
    </section>
  )
}