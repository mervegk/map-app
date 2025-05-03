'use client'
import { useState, useEffect } from 'react'
import { useSavedLocations } from '@/context/SavedLocationsContext'

type Props = {
  pageData: SavedLocationType
}

export default function PageWrapper({ pageData }: Props) {

  // const [data, setData] = useState<SavedLocationType>()
  return (
    <div>
      {
        JSON.stringify(pageData)
      }
    </div>
  )
}