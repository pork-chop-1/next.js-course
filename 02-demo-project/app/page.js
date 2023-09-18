import { getFeaturedEvents } from '@/dummy-data'

import EventList from '@/components/events/event-list'

export default function Home() {
  const filteredEvents = getFeaturedEvents()

  return (
    <main className="">
      <div>
        <EventList items={filteredEvents}/>
      </div>
    </main>
  )
}
