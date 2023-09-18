import { NextResponse } from 'next/server'

export async function GET(request) {
  return NextResponse.json({ data: [1, 2, 3], now: Date.now() })
}