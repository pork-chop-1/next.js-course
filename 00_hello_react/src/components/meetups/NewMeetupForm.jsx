import Card from "../ui/Card"
import { useRef, useState } from "react"
import './NewMeetupForm.scoped.scss'

function NewMeetupForm({onAddMeetup}) {
  // const titleInputRef = useRef() ** ref={titleInputRef}
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  /**
   * @param{SubmitEvent} e
   */
  const submitHandler = (e) => {
    e.preventDefault()

    const meetupData = {
      title,
      imageUrl,
      address,
      description
    }

    onAddMeetup && onAddMeetup(meetupData)
  }


  return <Card width={'20rem'} height="auto">
    <form onSubmit={submitHandler}>
      <div className="item">
        <label htmlFor="title">Meetup title:</label>
        <input type="text" required id="title" autoComplete="false" value={title} onChange={v => setTitle(v.target.value)}/>
      </div>
      <div className="item">
        <label htmlFor="image">Meetup image:</label>
        <input type="url" required id="image" autoComplete="false" value={imageUrl} onChange={v => setImageUrl(v.target.value)}/>
      </div>
      <div className="item">
        <label htmlFor="address">Address:</label>
        <input type="text" required id="address" autoComplete="false" value={address} onChange={v => setAddress(v.target.value)}/>
      </div>
      <div className="item">
        <label htmlFor="description">Description:</label>
        <textarea required id="description" rows={5} value={description} onChange={v => setDescription(v.target.value)}/>
      </div>
      <div className="item">
        <button>add Meetup</button>
      </div>
    </form>
  </Card>
}

export default NewMeetupForm