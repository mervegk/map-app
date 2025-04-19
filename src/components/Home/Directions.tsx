import { useState, useEffect } from 'react'
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import { RiArrowRightLine } from "react-icons/ri";
import { Card } from '@chakra-ui/react';
import { LatLng } from './MainMap';

type Props = {
  destination: any
}

export default function Directions({ destination }: Props) {
  const map = useMap()
  const routesLibrary = useMapsLibrary("routes")
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>()
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>()
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([])
  const [routeIndex, setRouteIndex] = useState(0)

  const [location, setLocation] = useState<LatLng>({ lat: null, lng: null })

  const selectedRoute = routes[routeIndex]
  const leg = selectedRoute?.legs[0]

  useEffect(() => {
    if (!routesLibrary || !map) return

    setDirectionsService(new routesLibrary.DirectionsService())
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))

  }, [routesLibrary, map])

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    if (location.lat === null || location.lng === null || destination.lat === null || destination.lng === null) return;

    directionsService.route({
      origin: `${location.lat}, ${location.lng}`,
      destination: `${destination.lat}, ${destination.lng}`,
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true
    }).then(res => {
      directionsRenderer.setDirections(res)
      setRoutes(res.routes)
    }).catch(err => {
      console.error("Directions API error:", err);
    });

  }, [directionsService, directionsRenderer, location, destination])


  useEffect(() => {
    if (!directionsRenderer) return

    directionsRenderer.setRouteIndex(routeIndex)
  }, [routeIndex, directionsRenderer])

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


  if (!leg) return null

  return (
    <div className='absolute top-2 right-4'>
      <Card.Root>
        <Card.Body padding='.7rem'>
          <h3 className='font-bold'>{selectedRoute.summary}</h3>
          <p className='flex items-center'>
            {leg.start_address.split(',')[0]} <RiArrowRightLine /> {leg.end_address.split(',')[0]}
          </p>
          <div className='flex max-lg:flex-col items-center gap-2 lg:gap-4'>
            <p className='font-medium'>Uzaklık: {leg.distance?.text}</p>
            <p className='font-medium'>Süre: {leg.duration?.text}</p>
          </div>
          <div>
            <p>Diğer Rotalar:</p>
            <ul className='px-2 list-decimal list-inside'>
              {
                routes.map((route, index) => <li key={index}>
                  <button type='button' onClick={() => setRouteIndex(index)}
                    className='hover:underline cursor-pointer'
                  >{route.summary}</button>
                </li>)
              }
            </ul>
          </div>
        </Card.Body>
      </Card.Root>
    </div>
  )
}