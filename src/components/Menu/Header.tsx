import Link from "next/link"
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