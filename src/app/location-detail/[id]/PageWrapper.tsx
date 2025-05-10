'use client'
import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import MainMap from '@/components/Home/MainMap'

type Props = {
  pageData: SavedLocationType
}

export default function PageWrapper({ pageData }: Props) {

  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
      <Card>
        <CardHeader>
          <CardTitle className='text-xl'>{pageData.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 mt-4'>
            <h5 className='font-bold'>Enlem:</h5>
            <p>{pageData.coordinates.lat}</p>
          </div>
          <div className='grid grid-cols-2 mt-4'>
            <h5 className='font-bold'>Boylam:</h5>
            <p>{pageData.coordinates.lng}</p>
          </div>
        </CardContent>
      </Card>
      <Card className='py-0'>
        <MainMap isDetail locationData={pageData} />
      </Card>
    </section>
  )
}