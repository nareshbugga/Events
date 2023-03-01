// Write your code here
import './index.css'

const EventItem = props => {
  const {eachList, clickImage, condition} = props
  const {id, imageUrl, name, location, registrationStatus} = eachList
  const onClickImage = () => clickImage(registrationStatus, id)

  const style = condition ? 'border' : null
  return (
    <li>
      <button type="button" onClick={onClickImage} className="image-button">
        <img src={imageUrl} alt="event" className={`event-image ${style}`} />
      </button>

      <p className="item-heading">{name}</p>
      <p className="item-location">{location}</p>
    </li>
  )
}

export default EventItem
