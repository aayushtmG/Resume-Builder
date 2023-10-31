import "../styles/Resume.css"
import GeneralInformationDisplay from "./generalInformation/GeneralInformationDisplay"
import ResumeDisplayBlock from "./education/ResumeDisplayBlock"
import { useRef } from "react"
function Resume({
  generalInformation,
  accentColor,
  educationList,
  experienceList,
  layout,
  setResumeRef,
}) {
  const reference = useRef(null)
  setResumeRef(reference.current)
  return (
    <div ref={reference} id="resume" className={`resume-container ${layout}`}>
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
