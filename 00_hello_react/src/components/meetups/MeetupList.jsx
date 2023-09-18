import MeetupItem from "./MeetupItem"

function MeetupList({ meetups }) {
  return <ul style={{display: "flex", flexWrap: "wrap"}}>
    {meetups.map(meetup => {
      return <MeetupItem {...meetup} key={meetup.id} ></MeetupItem>
      {/* title={meetup.title}
        description={meetup.description}
        image={meetup.image}
        address={meetup.address}
        */}
    })}
  </ul>
}

export default MeetupList