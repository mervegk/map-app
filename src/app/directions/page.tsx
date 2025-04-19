'use client'
import { useState, useCallback, useEffect } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap, useAdvancedMarkerRef, Marker, MapMouseEvent } from '@vis.gl/react-google-maps'
import Directions from '@/components/Home/Directions'
import { Popover, Button, Portal } from '@chakra-ui/react'
import { useMarkerColor } from '@/context/MarkerContext'
import { useSavedLocations } from '@/context/SavedLocationsContext'

type Props = {}
export type LatLng = {
  lat: number | null;
  lng: number | null;
}
export const defaultPosition = { lat: 41.01750875299681, lng: 28.9709432341656 }

export default function Page({ }: Props) {
  const { background, borderColor, glyphColor } = useMarkerColor()
  const { savedLocations, addLocations } = useSavedLocations()
  const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(null)
  const [location, setLocation] = useState<LatLng>({ lat: null, lng: null })
  const [showRoute, setShowRoute] = useState(false)

  const handleMapClick = useCallback((e: MapMouseEvent) => {
    const { latLng } = e.detail
    if (!latLng) return;

    setPosition({ lat: latLng.lat, lng: latLng.lng })
    setShowRoute(true)
  }, [])

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation tarayıcınız tarafından desteklenmiyor");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          console.log("Konomunuza erişilirken bir hata meydana geldi: " + err.message);
        },
        {
          enableHighAccuracy: true
        }
      );
    }
  }, []);

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
            <AdvancedMarker position={position}>
              <Pin background={background} borderColor={borderColor} glyphColor={glyphColor} />
            </AdvancedMarker>
            {
              showRoute && <Directions destination={position} />
            }
          </Map>
        </div>
      </APIProvider>
    </section>
  )
}