import Link from "next/link"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "../ui/drawer";
import { Button } from "../ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuList from "./MenuList";

type Props = {}

export default function MobileMenu({ }: Props) {
  return (
    <div className="block lg:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm">
            <RxHamburgerMenu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <MenuList />
        </DrawerContent>
      </Drawer>
    </div>
  )
}