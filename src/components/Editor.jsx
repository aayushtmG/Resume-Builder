import "../styles/Editor.css"
import GeneralInformationForm from "./generalInformation/GeneralInformationForm"
import EducationForm from "./education/EducationForm"
import ExperienceForm from "./experience/ExperienceForm"
import DisplayForm from "./DisplayForm"
function Editor({
  generalInformation,
  generalInformationInputHandler,
  educationList,
  educationInputHandler,
  experienceList,
  experienceInputHandler,
}) {
  return (
    <div className="editor-container">
      <GeneralInformationForm
        onChange={generalInformationInputHandler}
        generalInformation={generalInformation}
      />
      <DisplayForm
        Form={EducationForm}
        list={educationList}
        inputHandler={educationInputHandler}
      ></DisplayForm>
      <DisplayForm
        Form={ExperienceForm}
        list={experienceList}
        inputHandler={experienceInputHandler}
      ></DisplayForm>
    </div>
  )
}

export default Editor
