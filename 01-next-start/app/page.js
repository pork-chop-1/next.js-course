'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  let [path, setPath] = useState('')
  function goPortfolio() {
    router.push(`/portfolio/${path}`, { scroll: false })
  }

  return <div>
    <h1 className="text-3xl font-bold">Hello, Next.js!</h1>
    <p><Link href={'/portfolio'} className='underline'>Go Portfolio</Link></p>
    <input className='rounded-lg p-3 border-2 border-black'
      placeholder='input path'
      value={path}
      onChange={v => setPath(v.target.value)}></input>
    <button className='rounded-lg bg-blue-800 text-white m-auto p-3'
      onClick={goPortfolio}>Go portfolio</button>
  </div>
}
