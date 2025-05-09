'use client'
import dynamic from "next/dynamic"

const LocationList = dynamic(() => import('../../components/LocationList'), { ssr: false })

export default function PageWrapper() {
  return <LocationList />
}