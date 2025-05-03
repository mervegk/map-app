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
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import MenuList from "./MenuList";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {}

export default function MobileMenu({ }: Props) {
  return (
    <div className="block lg:hidden">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="outline" size="sm">
            <RxHamburgerMenu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DialogClose className="flex justify-end items-center">
              <RxCross1 color='black' />
            </DialogClose>
            <DrawerTitle hidden></DrawerTitle>
            <DrawerDescription hidden></DrawerDescription>
          </DrawerHeader>
          <MenuList />
        </DrawerContent>
      </Drawer>
    </div>
  )
}