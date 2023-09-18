import NewMeetupForm from "@/components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
  const addMeetupHandler = (data) => {
    console.log(data)

    fetch('https://react-start-course-f9275-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json', 
    {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return <div>
    <h1>New meetup page</h1>
    <main><NewMeetupForm onAddMeetup={addMeetupHandler}/></main>
  </div>
}

export default NewMeetupPage