'use client'
import { useState } from 'react'
import { Button, CloseButton, Dialog, Portal, Input } from "@chakra-ui/react"
import { useSavedLocations } from '@/context/SavedLocationsContext'

export default function SaveLocation({ lat, lng }: Coordinates) {
  const { savedLocations, addLocations } = useSavedLocations()
  const [locationName, setLocationName] = useState<string>()

  const handleAddLocation = () => {
    if (locationName) {
      const newLocation: SavedLocationType = {
        name: locationName,
        coordinates: { lat, lng }
      }
      addLocations(newLocation)
    }
  }

  return (
    <div>
      <Dialog.Root closeOnInteractOutside={false} size={{ md: 'md', lg: 'lg' }}>
        <Dialog.Trigger asChild>
          <Button variant="outline" size="sm" colorPalette='red' type="button">
            Konumu Ekle
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content className="bg-white" >
              <Dialog.Body className="flex flex-col justify-center gap-2 mt-9">
                <div>
                  <p>Konum Adı <span className='text-red-500'>*</span></p>
                  <Input onChange={(e) => setLocationName(e.target.value)} required />
                </div>
              </Dialog.Body>
              <Dialog.Footer>
                <Button variant='subtle' onClick={handleAddLocation}>Kaydet</Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" colorPalette='red' />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  )
}