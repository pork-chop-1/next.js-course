import { getEventById } from "@/dummy-data"

export default function EventDetailPage({ params }) {
  const eventId = params?.eventId

  let content = 'Invalid Event ID'
  if (eventId != null) {
    const eventDetail = getEventById(eventId)
    if(eventDetail != null) {
      content = JSON.stringify(eventDetail)
    }
  }

  return <div>
    <h1>Event detail Page</h1>
    <div>
      {content}
    </div>
  </div>
}