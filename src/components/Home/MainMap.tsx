'use client'
import { useState } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow, useMap, useAdvancedMarkerRef } from '@vis.gl/react-google-maps'
import Directions from './Directions'
import Markers from './Markers'
import { locationList } from '@/data/locations'

type Props = {}

export default function MainMap({ }: Props) {
  const position = { lat: 41.01750875299681, lng: 28.9709432341656 };

  return (
    <section className='container mx-auto h-full p-2'>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div className='h-[calc(100vh-72px)]'>
          <Map defaultZoom={12}
            defaultCenter={position}
            mapId={process.env.NEXT_PUBLIC_MAP_ID}
            gestureHandling='greedy'
            disableDefaultUI={true}
          >
            <Directions />
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