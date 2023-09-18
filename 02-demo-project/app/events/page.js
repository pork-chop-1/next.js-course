import EventList from "@/components/events/event-list"
import EventSearch from "@/components/events/event-search"
import { getAllEvents } from "@/dummy-data"

export default function EventPage() {
  const allEvents = getAllEvents()

  return <>
    <EventSearch />
    <EventList items={allEvents} />
  </>
}