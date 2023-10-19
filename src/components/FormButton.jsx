import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
function FormButton({ toggleForm }) {
  return (
    <div className="btn-group">
      <button className={`form-btn delete`} type="button">
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        <p>Delete</p>
      </button>
      <div className="btn-group">
        <button
          className={`form-btn cancel`}
          type="button"
          onClick={toggleForm}
        >
          <p>Cancel</p>
        </button>
        <button className={`form-btn save`} type="button">
          <p>Save</p>
        </button>
      </div>
    </div>
  )
}

export default FormButton
