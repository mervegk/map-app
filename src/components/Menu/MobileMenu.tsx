import Link from "next/link"
import { Button, CloseButton, Portal, Drawer } from "@chakra-ui/react"
import { RxHamburgerMenu } from "react-icons/rx";
import MenuList from "./MenuList";

type Props = {}

export default function MobileMenu({ }: Props) {
  return (
    <header className="container mx-auto">
      <div>
        <Drawer.Root>
          <Drawer.Trigger asChild>
            <Button variant="outline" size="sm" colorPalette={'green'}>
              <RxHamburgerMenu />
            </Button>
          </Drawer.Trigger>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Body className="mt-12">
                  <MenuList />
                </Drawer.Body>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </div>
    </header>
  )
}