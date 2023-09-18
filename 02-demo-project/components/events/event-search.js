'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EventSearch() {
  let [year, setYear] = useState(2023)
  let [month, setMonth] = useState(1)

  const router = useRouter()

  function onSubmitHandler(event) {
    event.preventDefault();

    router.push(`/events/${year}/${month}`)
  }

  return <form className="m-auto mt-4 mb-4 border shadow-lg rounded-lg max-w-lg h-12 flex items-center justify-around bg-white" onSubmit={onSubmitHandler}>
    <label>
      year:
      <select className="border-emerald-700 border-2 rounded-lg px-2 py-1"
        value={year} onChange={e => setYear(e.target.value)}>
        <option value={2022}>2022</option>
        <option value={2023}>2023</option>
      </select>
    </label>
    <label>
      month:
      <select className="border-emerald-700 border-2 rounded-lg px-2 py-1"
        value={month} onChange={e => setMonth(e.target.value)}>
        <option value={1}>Jan</option>
        <option value={2}>Feb</option>
        <option value={3}>Mar</option>
        <option value={4}>Apr</option>
        <option value={5}>May</option>
        <option value={6}>June</option>
        <option value={7}>July</option>
        <option value={8}>Aug</option>
        <option value={9}>Sept</option>
        <option value={10}>Oct</option>
        <option value={11}>Nov</option>
        <option value={12}>Dec</option>
      </select>
    </label>
    <button className="rounded-lg bg-emerald-700 text-white px-2 py-1">Search</button>
  </form>
}
