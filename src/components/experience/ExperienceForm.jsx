import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import FormButton from "../FormButton"
import { useState } from "react"
import CollapsedForm from "../CollapsedForm"

export default function ExperienceForm({ list, onChange }) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formId, setFormId] = useState(0)
  console.log(list)
  const {
    company,
    position,
    experienceStart,
    experienceEnd,
    experienceLocation,
    description,
  } = list[formId]
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen)
  }
  const setForm = (id) => {
    setFormId(id)
    toggleForm()
  }
  return (
    <div>
      <div className="accordion-group">
        <div className="accordion-inner-group">
          <FontAwesomeIcon icon={faBriefcase} />
          <h3 className="title">Experience</h3>
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
            <label htmlFor="company">School</label>
            <input
              type="text"
              placeholder="Enter school/university"
              id="company"
              value={company}
              onChange={onChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              placeholder="Enter degree/university"
              id="position"
              onChange={onChange}
              value={position}
            />
          </div>
          <div className="input-group">
            <label htmlFor="experienceStart">Start Date</label>
            <input
              type="text"
              placeholder="Enter start/university"
              id="experienceStart"
              onChange={onChange}
              value={experienceStart}
            />
          </div>
          <div className="input-group">
            <label htmlFor="experienceEnd">End Date</label>
            <input
              type="text"
              placeholder="Enter end/university"
              id="experienceEnd"
              value={experienceEnd}
              onChange={onChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="experienceLocation">Location</label>
            <input
              type="text"
              placeholder="Enter location/university"
              id="experienceLocation"
              onChange={onChange}
              value={experienceLocation}
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="Enter location/university"
              id="description"
              onChange={onChange}
              value={description}
            />
          </div>
          <FormButton toggleForm={toggleForm}></FormButton>
        </form>
      ) : (
        <CollapsedForm
          list={list}
          setForm={setForm}
          toggleForm={toggleForm}
        ></CollapsedForm>
      )}
    </div>
  )
}
