import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
export function AddFormButton({ title, onClick }) {
  return (
    <div className="toggle-btn-container">
      <button className="toggle-btn" onClick={onClick}>
        <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
        {title == "Education" ? "Education" : "Experience"}
      </button>
    </div>
  )
}
