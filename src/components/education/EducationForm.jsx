import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faSchool } from "@fortawesome/free-solid-svg-icons"
import FormButton from "../FormButton"
import { useState } from "react"
import CollapsedForm from "../CollapsedForm"

export default function EducationForm({ setList, list, onChange }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formId, setFormId] = useState(0)
  const [newForm, setNewForm] = useState(false)
  const { school, degree, educationLocation, educationEnd, educationStart } =
    list[formId] || {}
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen)
  }

  const setForm = (id) => {
    setFormId(id)
    toggleForm()
  }

  const cancelForm = () => {
    setForm(0)
    if (newForm) {
      list.pop()
      setList([...list])
    }
  }
  const addForm = () => {
    list.push({})
    setForm(list.length - 1)
    setNewForm(true)
  }
  const saveForm = (e) => {
    const id = e.target.closest(".form").dataset.id
    if (list[id]["school"]) {
      toggleForm()
    } else {
      cancelForm()
    }
  }

  const deleteForm = (e) => {
    const target = e.target.closest("form").dataset.id
    list.splice(target, 1)
    setList([...list])
    setForm(0)
  }

  return (
    <div>
      <div className="accordion-group">
        <div className="accordion-inner-group">
          <FontAwesomeIcon icon={faSchool} />
          <h3 className="title">Education</h3>
        </div>
        {isFormOpen ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="accordion-arrow flip"
          />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className="accordion-arrow " />
        )}
      </div>
      {isFormOpen ? (
        <form className="form" data-id={formId}>
          <div className="input-group">
            <label htmlFor="school">School</label>
            <input
              type="text"
              placeholder="Enter school/university"
              id="school"
              value={school}
              onChange={onChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              placeholder="Enter degree/university"
              id="degree"
              onChange={onChange}
              value={degree}
            />
          </div>
          <div className="input-group">
            <label htmlFor="educationStart">Start Date</label>
            <input
              type="text"
              placeholder="Enter start/university"
              id="educationStart"
              onChange={onChange}
              value={educationStart}
            />
          </div>
          <div className="input-group">
            <label htmlFor="educationEnd">End Date</label>
            <input
              type="text"
              placeholder="Enter end/university"
              id="educationEnd"
              value={educationEnd}
              onChange={onChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="educationLocation">Location</label>
            <input
              type="text"
              placeholder="Enter location/university"
              id="educationLocation"
              onChange={onChange}
              value={educationLocation}
            />
          </div>
          <FormButton
            saveForm={saveForm}
            cancelForm={cancelForm}
            deleteForm={deleteForm}
          ></FormButton>
        </form>
      ) : (
        <CollapsedForm
          list={list}
          title={"Education"}
          setForm={setForm}
          setNewForm={setNewForm}
          addForm={addForm}
        ></CollapsedForm>
      )}
    </div>
  )
}
