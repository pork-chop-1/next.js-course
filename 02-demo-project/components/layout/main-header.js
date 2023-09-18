import Link from "next/link"

export default function MainHeader() {
  return <header className="w-full h-12 bg-emerald-700 text-white p-4 flex">
    <div className="mr-8">
      <Link href={'/'}>HOME</Link>
    </div>
    <nav>
      <ul className="flex">
        <li>
          <Link href={'/events'}>Browse All Events</Link>
        </li>
      </ul>
    </nav>
  </header>
}