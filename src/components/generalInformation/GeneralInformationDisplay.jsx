import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function GeneralInformationDisplay({ accentColor, data }) {
  const { fullName, email, phone, address } = data
  const style = {
    backgroundColor: accentColor,
  }

  return (
    <div className="general-info-display" style={style}>
      <h2>{fullName}</h2>
      <div>
        <Item icon={faEnvelope} data={email}></Item>
        <Item icon={faPhone} data={phone}></Item>
        <Item icon={faLocationDot} data={address}></Item>
      </div>
    </div>
  )
}

function Item({ icon, data }) {
  return (
    <div className="general-info-item">
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      <p>{data}</p>
    </div>
  )
}
