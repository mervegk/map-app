import Link from "next/link"
import { Button, CloseButton, Dialog, Portal, Drawer } from "@chakra-ui/react"
import ChangeMapPinColors from "../ChangeMapPinColors"
import MobileMenu from "./MobileMenu"
import MenuList from "./MenuList"

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="container mx-auto">
      <nav className="text-center p-4 flex items-center justify-center w-full h-full gap-4 max-md:hidden">
        <MenuList />
      </nav>
      <MobileMenu />

    </header>
  )
}