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
import { RxCross1 } from 'react-icons/rx'

export default function MenuList() {
  return (
    <div className='max-lg:flex max-lg:flex-col max-lg:gap-4 gap-2'>
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
          <DialogHeader>
            <DialogClose>
              <Button variant='outline' ><RxCross1 color='black' /></Button>
            </DialogClose>
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-center gap-2 mt-9">
            <ChangeMapPinColors type="background" label="Marker Arka Plan Rengi" />
            <ChangeMapPinColors type="border" label="Marker Kenar Rengi" />
            <ChangeMapPinColors type="glyph" label="Marker Daire Rengi" />
          </div>

        </DialogContent>

      </Dialog>
    </div>
  )
}