import FormButton from "./FormButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function AdvancedForm({
  title,
  icon,
  inputInfo,
  educationList,
  experienceList,
}) {
  console.log(educationList[0][`${inputInfo[0][0]}`])
  const allFields = inputInfo.map((inp) => (
    <div className="input-group">
      <label htmlFor={`${title}+${inp[0]}`}>{inp[0]}</label>
      <input
        type="text"
        placeholder={inp[1]}
        id={`${title}+${inp[0]}`}
        value={
          title == "Education"
            ? educationList[0][`${inp[0]}`]
            : experienceList[0][`${inp[0]}`]
        }
      />
    </div>
  ))
  const [education, setEducation] = useState(educationList)
  const [experience, setExperience] = useState(experienceList)

  const [isFormOpen, setIsFormOpen] = useState(false)
  const toggleAccordion = () => {
    setIsFormOpen(!isFormOpen)
  }
  const saveAction = () => {
    toggleAccordion()
  }
  const cancelAction = () => {
    setIsFormOpen(false)
  }
  const deleteAction = () => {
    alert("Delete Action")
  }

  return (
    <div>
      <button className="accordion-group" onClick={toggleAccordion}>
        <div className="accordion-inner-group">
          <FontAwesomeIcon icon={icon} />
          <h3 className="title">{title}</h3>
        </div>
        {isFormOpen ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="accordion-arrow flip"
          />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className="accordion-arrow " />
        )}
      </button>
      {isFormOpen ? (
        <form>
          {allFields}
          <div className="btn-group">
            <FormButton
              text="Delete"
              icon={faTrash}
              type={"delete"}
              action={deleteAction}
            ></FormButton>
            <div className="btn-group">
              <FormButton
                text="Cancel"
                type={"cancel"}
                action={cancelAction}
              ></FormButton>
              <FormButton
                text="Save"
                type={"save"}
                action={saveAction}
              ></FormButton>
            </div>
          </div>
        </form>
      ) : title == "Education" ? (
        <div className="added-list-container">
          <ul className="added-list">
            {education.map((ed) => (
              <li key={ed}>{ed.school}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="added-list-container">
          <ul className="added-list">
            {experience.map((el) => (
              <li key={el}>{el.company}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
