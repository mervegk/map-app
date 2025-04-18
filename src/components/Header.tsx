import Link from "next/link"
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react"
import ChangeMapPinColors from "./ChangeMapPinColors"

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="container mx-auto">
      <nav className="text-center p-4 flex items-center justify-center w-full h-full gap-4">
        <Link href='/add-location' className="hover:underline">Konum Ekleme</Link>
        <Link href='/location-list' className="hover:underline">Konum Listesi</Link>
        <Dialog.Root closeOnInteractOutside={false} size={{ md: 'md', lg: 'lg' }}>
          <Dialog.Trigger asChild>
            <Button variant="outline" size="sm" colorPalette='red' type="button">
              Renk Ayarları
            </Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content className="bg-white" >
                <Dialog.Body className="flex flex-col justify-center gap-2 mt-9">
                  <ChangeMapPinColors type="background" label="Marker Arka Plan Rengi" />
                  <ChangeMapPinColors type="border" label="Marker Kenar Rengi" />
                  <ChangeMapPinColors type="glyph" label="Marker Daire Rengi" />
                </Dialog.Body>
                <Dialog.Footer>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" colorPalette={'red'} />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>

      </nav>
    </header>
  )
}