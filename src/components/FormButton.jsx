import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
function FormButton({ toggleForm, cancelForm, deleteForm }) {
  return (
    <div className="btn-group">
      <button className={`form-btn delete`} type="button" onClick={deleteForm}>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        <p>Delete</p>
      </button>
      <div className="btn-group">
        <button
          className={`form-btn cancel`}
          type="button"
          onClick={cancelForm}
        >
          <p>Cancel</p>
        </button>
        <button className={`form-btn save`} type="button" onClick={toggleForm}>
          <p>Save</p>
        </button>
      </div>
    </div>
  )
}

export default FormButton
