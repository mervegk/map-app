import { Button } from '../ui/button'
import {
  Dialog, DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import Link from 'next/link'
import React from 'react'
import ChangeMapPinColors from '../ChangeMapPinColors'

export default function MenuList() {
  return (
    <div className='max-md:flex max-md:flex-col max-md:gap-4 max-md:text-white'>
      <Link href='/' className="hover:underline">Ana</Link>
      <Link href='/add-location' className="hover:underline">Konum Ekleme</Link>
      <Link href='/location-list' className="hover:underline">Konum Listesi</Link>
      <Link href='directions' className="hover:underline">Rota Oluşturma</Link>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" type="button">
            Renk Ayarları
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white" >
          <div className="flex flex-col justify-center gap-2 mt-9">
            <ChangeMapPinColors type="background" label="Marker Arka Plan Rengi" />
            <ChangeMapPinColors type="border" label="Marker Kenar Rengi" />
            <ChangeMapPinColors type="glyph" label="Marker Daire Rengi" />
          </div>
          <DialogFooter>
          </DialogFooter>
        </DialogContent>

      </Dialog>
    </div>
  )
}