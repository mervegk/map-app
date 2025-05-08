import { Button } from '../ui/button'
import {
  Dialog, DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '../ui/dialog'
import Link from 'next/link'
import React from 'react'
import ChangeMapPinColors from '../ChangeMapPinColors'

export default function MenuList() {
  return (
    <div className='flex max-lg:flex-col'>
      <Link href='/' className="menu-items">Ana Sayfa</Link>
      <Link href='/add-location' className="menu-items">Konum Ekleme</Link>
      <Link href='/location-list' className="menu-items">Konum Listesi</Link>
      <Link href='directions' className="menu-items">Rota Oluşturma</Link>
      <Dialog>
        <DialogTrigger asChild >
          <div className='max-lg:px-2 max-lg:w-full max-lg:flex max-lg:justify-center max-lg:items-center max-lg:mt-3 ml-2'>
            <Button variant="outline" size="sm" type="button" className='cursor-pointer max-lg:w-full'>
              Renk Ayarları
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className='lg:max-w-2xl'>
          <DialogHeader>
            <DialogClose />
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-center gap-3">
            <ChangeMapPinColors type="background" label="Marker Arka Plan Rengi" />
            <ChangeMapPinColors type="border" label="Marker Kenar Rengi" />
            <ChangeMapPinColors type="glyph" label="Marker Daire Rengi" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}