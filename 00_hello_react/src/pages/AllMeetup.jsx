import MeetupList from '@/components/meetups/meetupList'
import { useState, useEffect } from 'react'

const AllMeetupPage = () => {
  let [isLoading, setIsLoading] = useState(true)
  let [loadedMeetup, setLoadedMeetup] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://react-start-course-f9275-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json')
      .then(value => value.json())
      .then((data => {
        setIsLoading(false)
        setLoadedMeetup(Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]
          }
        }))
      }))
  }, [])

  if (isLoading) {
    return <div><p>loading...</p></div>
  }

  return <div>
    <h1>All meetup page</h1>
    <MeetupList meetups={loadedMeetup}></MeetupList>
  </div>
}

export default AllMeetupPage