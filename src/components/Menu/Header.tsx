import Link from "next/link"
import MobileMenu from "./MobileMenu"
import MenuList from "./MenuList"

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="container mx-auto">
      <nav className="text-center py-2 px-4 flex items-center justify-center w-full h-full max-lg:hidden">
        <MenuList />
      </nav>
      <MobileMenu />

    </header>
  )
}