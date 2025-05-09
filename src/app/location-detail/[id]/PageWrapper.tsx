'use client'
import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

type Props = {
  pageData: SavedLocationType
}

export default function PageWrapper({ pageData }: Props) {

  // const [data, setData] = useState<SavedLocationType>()
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
      <Card>
        <CardHeader>
          <CardTitle> {pageData.name} </CardTitle>
        </CardHeader>
        <CardContent className='grid grid-cols-2'>
          <div className='grid grid-cols-2'>
            <h5 className='font-bold'>Enlem:</h5>
            <p>{pageData.coordinates.lat}</p>
          </div>
          <div className='grid grid-cols-2'>
            <h5 className='font-bold'>Boylam</h5>
            <p className=''>{pageData.coordinates.lng}</p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}