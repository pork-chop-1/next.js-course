const DUMMY_EVENTS = [
  {
    id: '1',
    title: 'm1',
    description: 'This is a first dummy',
    location: 'SOME ADDRESS',
    date: '2023-10-01',
    image: 'https://i.pinimg.com/originals/d1/c7/ee/d1c7eefd5a17d653c9b130ba43166036.jpg',
    isFeatured: false
  },
  {
    id: '2',
    title: 'm3',
    description: 'The cosmic level of coolness, the space is boho, planets are calm. iPhone wallpaper lockscreen',
    location: 'SOME ADDRESS',
    date: '2023-10-01',
    image: 'https://i.pinimg.com/originals/85/1d/83/851d834537a9a5e3d221f111961c6299.jpg',
    isFeatured: true
  },
  {
    id: '2',
    title: 'm3',
    description: 'This is a 3 dummy',
    location: 'SOME ADDRESS',
    date: '2023-10-01',
    image: 'https://i.pinimg.com/originals/ca/0e/31/ca0e31f3e77d9cf057fa8507d3ac1b87.png',
    isFeatured: true
  }
]

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter(event => event.isFeatured)
}

export function getAllEvents() {
  return DUMMY_EVENTS
}

export function getFilteredEvents(dataFilter) {
  const { year, month } = dataFilter

  let filteredEvents = DUMMY_EVENTS.filter(event => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  })

  return filteredEvents
}

export function getEventById(id) {
  return DUMMY_EVENTS.find(event => event.id === id)
}