import Link from "next/link"

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className="container mx-auto">
      <nav className="text-center p-4">
        <Link href='/location-list' className="hover:underline">Konum Listesi</Link>
      </nav>
    </header>
  )
}