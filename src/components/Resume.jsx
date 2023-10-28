import "../styles/Resume.css"
import GeneralInformationDisplay from "./generalInformation/GeneralInformationDisplay"
import ResumeDisplayBlock from "./education/ResumeDisplayBlock"
function Resume({
  generalInformation,
  accentColor,
  educationList,
  experienceList,
  layout,
}) {
  return (
    <div className={`resume-container ${layout}`}>
      <div className="resume-top">
        <GeneralInformationDisplay
          accentColor={accentColor}
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
