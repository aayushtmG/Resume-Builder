import Controller from "./components/Controller"
import Editor from "./components/Editor"
import Resume from "./components/Resume"
import CustomizeEditor from "./components/CustomizeEditor"
import "./styles/index.css"
import { useState } from "react"
import templateData from "./templateData"

function App() {
  const [editor, setEditor] = useState("Content")
  const [generalInformation, setGeneralInformation] = useState(
    templateData.personalInfo
  )
  const [education, setEducation] = useState(templateData.education)
  const [experience, setExperience] = useState(templateData.experience)
  const generalInformationInputHandler = (e) => {
    setGeneralInformation({
      ...generalInformation,
      [e.target.id]: e.target.value,
    })
  }
  const educationInputHandler = (e) => {
    const key = e.target.id
    const value = e.target.value
    const id = e.target.closest(".form").dataset.id
    setEducation(
      education.map((elem, index) => {
        if (id == index) elem[key] = value
        return elem
      })
    )
  }

  const experienceInputHandler = (e) => {
    const key = e.target.id
    const value = e.target.value
    const id = e.target.closest(".form").dataset.id
    setExperience(
      experience.map((elem, index) => {
        if (id == index) elem[key] = value
        return elem
      })
    )
  }
  return (
    <>
      <main>
        <div className="left-part">
          <Controller setEditor={setEditor}></Controller>
          {editor == "Content" ? (
            <Editor
              generalInformationInputHandler={generalInformationInputHandler}
              generalInformation={generalInformation}
              educationList={education}
              educationInputHandler={educationInputHandler}
              experienceList={experience}
              experienceInputHandler={experienceInputHandler}
            />
          ) : (
            <CustomizeEditor />
          )}
        </div>
        <div className="right-part">
          <Resume
            generalInformation={generalInformation}
            educationList={education}
            experienceList={experience}
          ></Resume>
        </div>
      </main>
    </>
  )
}

export default App
