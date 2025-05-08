'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog'
import { Input } from './ui/input'
import { useSavedLocations } from '@/context/SavedLocationsContext'
import { v4 as uuidv4 } from 'uuid'

export default function SaveLocation({ lat, lng }: Coordinates) {
  const { addLocations } = useSavedLocations()
  const [locationName, setLocationName] = useState<string>()

  const handleAddLocation = () => {
    if (locationName) {
      const newLocation: SavedLocationType = {
        name: locationName,
        coordinates: { lat, lng },
        id: uuidv4()
      }
      addLocations(newLocation)
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" type="button">
            Konumu Ekle
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white" >
          <DialogHeader>
            <DialogTitle>Konum Ekle</DialogTitle>
          </DialogHeader>
          <div>
            <p>Konum Adı <span className='text-red-500'>*</span></p>
            <Input onChange={(e) => setLocationName(e.target.value)} required />
          </div>
          <DialogFooter>
            <Button onClick={handleAddLocation}>Kaydet</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}