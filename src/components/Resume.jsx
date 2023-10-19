import "../styles/Resume.css"
import GeneralInformationDisplay from "./generalInformation/GeneralInformationDisplay"
import ResumeDisplayBlock from "./education/ResumeDisplayBlock"
function Resume({ generalInformation, educationList, experienceList }) {
  return (
    <div className="resume-container">
      <div className="resume-top">
        <GeneralInformationDisplay
          data={generalInformation}
        ></GeneralInformationDisplay>
      </div>
      <div className="resume-bottom">
        <ResumeDisplayBlock
          list={educationList}
          title={"Education"}
        ></ResumeDisplayBlock>
        <ResumeDisplayBlock
          list={experienceList}
          title={"Experience"}
        ></ResumeDisplayBlock>
      </div>
    </div>
  )
}

export default Resume
