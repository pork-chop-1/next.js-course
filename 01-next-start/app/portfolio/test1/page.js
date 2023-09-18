'use client'
import { useRouter } from "next/navigation"

export default function Product(some) {
  const router = useRouter()

  console.log(router)
  // console.log(router.query)
  return <h1 className="flex justify-center text-[3rem]">{JSON.stringify(some)}</h1>
}