'use client'
import { useState } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps'

type Props = {}

export default function MainMap({ }: Props) {
  const position = { lat: 41.01750875299681, lng: 28.9709432341656 };

  return (
    <section className='container mx-auto'>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div className='h-screen'>
          <Map zoom={12} center={position}>

          </Map>
        </div>

      </APIProvider>

    </section>
  )
}