'use client'
import { useState, useCallback } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap, useAdvancedMarkerRef, Marker, MapMouseEvent } from '@vis.gl/react-google-maps'
import Markers from '../Marker/Markers'
import { useMapPinColors } from '@/hooks/useMapPinColors'
import { useLocationList } from '@/hooks/useLocationList'
import SaveLocation from '../SaveLocation'

type Props = {
  isDetail?: boolean
  isAddLocation?: boolean
  locationData?: SavedLocationType
}

export const defaultPosition = { lat: 41.01750875299681, lng: 28.9709432341656 }

export default function MainMap({ isDetail = false,
  isAddLocation = false,
  locationData }: Props) {
  const { background, borderColor, glyphColor } = useMapPinColors()
  const { locations } = useLocationList()
  const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(null)

  const handleMapClick = useCallback((e: MapMouseEvent) => {
    const { latLng } = e.detail
    if (!latLng) return;

    setPosition({ lat: latLng.lat, lng: latLng.lng })
  }, [])

  return (
    <>
      {
        isDetail && <style>
          {`
          #main-map div {
           border-radius: 10px;
          }
        `}
        </style>
      }
      <section className='relative w-full h-full'>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <div className={`${isDetail ? 'h-[500px]' : 'h-[calc(100vh-72px)]'}`}>
            <Map
              id='main-map'
              gestureHandling='greedy'
              mapId={process.env.NEXT_PUBLIC_MAP_ID}
              defaultZoom={isDetail ? 15 : 12}
              defaultCenter={isDetail ? locationData?.coordinates : position || defaultPosition}
              onClick={handleMapClick}
            >
              <AdvancedMarker position={isDetail ? locationData?.coordinates : position}>
                <Pin background={background} borderColor={borderColor} glyphColor={glyphColor} />
              </AdvancedMarker>
              {
                //Konum ekleme sayfası ise ve haritadan bir konuma tıklandıysa konum ekle butonu gösterilir
                (isAddLocation && position) && <div className='absolute bottom-4 left-4 shadow-lg'>
                  <SaveLocation lat={position.lat} lng={position.lng} />
                </div>
              }
              {
                //Konum ekleme sayfası ise kaydedilen bütün konumları haritada gösterir
                isAddLocation && <Markers points={locations} markerColors={{ background, borderColor, glyphColor }} />
              }
            </Map>
          </div>
        </APIProvider>
      </section>
    </>
  )
}