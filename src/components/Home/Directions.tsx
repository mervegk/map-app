import { useState, useEffect } from 'react'
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps'

type Props = {}

export default function Directions({ }: Props) {
  const map = useMap()
  const routesLibrary = useMapsLibrary("routes")
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>()
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>()
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    if (!routesLibrary || !map) return

    setDirectionsService(new routesLibrary.DirectionsService())
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))

  }, [routesLibrary, map])

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return

    directionsService.route({
      origin: 'Nakkaştepe, İstanbul',
      destination: 'Kadıköy, İstanbul',
      travelMode: google.maps.TravelMode.DRIVING,
      provideRouteAlternatives: true
    }).then(res => {
      directionsRenderer.setDirections(res)
    })

  }, [directionsService, directionsRenderer])

  console.log(directionsService);


  return (
    <div>


    </div>
  )
}