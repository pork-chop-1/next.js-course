import Link from "next/link"

export default function EventListItem(props) {
  const { id, title, description, location, date, image } = props

  const humanReadableDate = new Date(date).toLocaleDateString('zh-CN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  return <li className="border rounded-md shadow-lg bg-white mb-6 last:mb-0 group overflow-hidden">
    <Link href={`/events/${id}`}>
      <div className="w-full h-[400px] overflow-hidden">
        <img src={image} className="w-full h-full group-hover:scale-125 transition-transform duration-700"></img>
      </div>
      <div className="p-8">
        <h1 className="text-2xl text-center font-bold">{title}</h1>
        <p className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg>
          {location} - {humanReadableDate}
        </p>
        <p>
          {description}</p>
      </div>
    </Link>
  </li>
}