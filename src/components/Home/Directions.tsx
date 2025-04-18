import { useState, useEffect } from 'react'
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import { RiArrowRightLine } from "react-icons/ri";
import { Card } from '@chakra-ui/react';

type Props = {}

export default function Directions({ }: Props) {
  const map = useMap()
  const routesLibrary = useMapsLibrary("routes")
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>()
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>()
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([])
  const [routeIndex, setRouteIndex] = useState(0)

  const selectedRoute = routes[routeIndex]
  const leg = selectedRoute?.legs[0]

  useEffect(() => {
    if (!routesLibrary || !map) return

    setDirectionsService(new routesLibrary.DirectionsService())
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))

  }, [routesLibrary, map])

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return

    directionsService.route({
      origin: 'Nakkaştepe, İstanbul',
      destination: 'Beylikdüzü, İstanbul',
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true
    }).then(res => {
      directionsRenderer.setDirections(res)
      setRoutes(res.routes)
    })

  }, [directionsService, directionsRenderer])

  useEffect(() => {
    if (!directionsRenderer) return

    directionsRenderer.setRouteIndex(routeIndex)
  }, [routeIndex, directionsRenderer])


  if (!leg) return null

  return (
    <div className='absolute top-2 right-4'>
      <Card.Root>
        <Card.Body>
          <h3 className='font-bold'>{selectedRoute.summary}</h3>
          <p className='flex items-center'>
            {leg.start_address.split(',')[0]} <RiArrowRightLine /> {leg.end_address.split(',')[0]}
          </p>
          <div className='flex max-lg:flex-col items-center gap-2 lg:gap-4'>
            <p className='font-medium'>Uzaklık: {leg.distance?.text}</p>
            <p className='font-medium'>Süre: {leg.duration?.text}</p>
          </div>
          <ul className='px-2'>
            {
              routes.map((route, index) => <li key={index}>
                <button type='button' onClick={() => setRouteIndex(index)}
                  className='hover:underline cursor-pointer'
                >{route.summary}</button>
              </li>)
            }
          </ul>
        </Card.Body>
      </Card.Root>
    </div>
  )
}