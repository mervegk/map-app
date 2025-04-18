'use client'
import { useState, useCallback, useEffect } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap, useAdvancedMarkerRef, Marker, MapMouseEvent } from '@vis.gl/react-google-maps'
import Directions from './Directions'
import Markers from './Markers'
import { locationList } from '@/data/locations'
import { Popover, Button, Portal } from '@chakra-ui/react'

type Props = {}
type LatLng = {
  lat: number | null;
  lng: number | null;

}

export default function MainMap({ }: Props) {
  const [position, setPosition] = useState<google.maps.LatLngLiteral | null>(null)
  const [location, setLocation] = useState<LatLng>({ lat: null, lng: null })
  const defaultPosition = { lat: 41.01750875299681, lng: 28.9709432341656 }

  const handleMapClick = useCallback((e: MapMouseEvent) => {
    const { latLng } = e.detail
    if (!latLng) return;

    setPosition({ lat: latLng.lat, lng: latLng.lng })
  }, [])

  // console.log(position);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (err) => {
          console.log("Unable to retrieve your location: " + err.message);
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
            {position && (
              <>
                <AdvancedMarker position={position} >
                  <Pin />
                </AdvancedMarker>
                <Button size="sm" variant="subtle" className='absolute bottom-2 left-4 shadow-lg'>
                  Konumu kaydet
                </Button>
              </>
            )}
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