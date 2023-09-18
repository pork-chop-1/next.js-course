import EventListItem from "./event-item"

export default function EventList({ items }) {
  return <ul className="max-w-lg m-auto">
    {items.map(item => <EventListItem key={item.id} {...item} />)}
  </ul>
}