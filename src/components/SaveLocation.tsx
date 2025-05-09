'use client'
import { useState, useRef } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from './ui/dialog'
import { Input } from './ui/input'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/lib/Redux/store';
import { addLocation } from '@/lib/Redux/slices/location-list-slice'

export default function SaveLocation({ lat, lng }: Coordinates) {
  const [locationName, setLocationName] = useState<string | null>()
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAddLocation = () => {
    if (locationName) {
      const newLocation: SavedLocationType = {
        name: locationName,
        coordinates: { lat, lng },
        id: uuidv4()
      }

      dispatch(addLocation(newLocation))
      setIsOpen(false)
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(prev => !prev)} >
        <DialogTrigger asChild>
          <Button size="lg" type="button" className='text-xl bg-[#2d3142] text-white'>
            Konumu Ekle
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white" >
          <DialogHeader>
            <DialogTitle>Konum Ekle</DialogTitle>
          </DialogHeader>
          <div>
            <p>Konum Adı <span className='text-red-500'>*</span></p>
            <Input ref={inputRef} onChange={(e) => setLocationName(e.target.value)} required />
          </div>
          <DialogFooter>
            <Button onClick={handleAddLocation}>Kaydet</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}