export default function ResumeDisplayBlock({ title, list }) {
  return (
    <div className="resume-display-block">
      <div className="title-section">
        <h2 className="display-title">{title}</h2>
      </div>
      <div className="display-list">
        <ul>
          {title === "Education"
            ? list.map((el) => (
                <EducationDetailBlock education={el}></EducationDetailBlock>
              ))
            : list.map((el) => (
                <ExperienceBlock experience={el}></ExperienceBlock>
              ))}
        </ul>
      </div>
    </div>
  )
}

function EducationDetailBlock({ education }) {
  const {
    school,
    degree,
    educationLocation: location,
    educationStart: start,
    educationEnd: end,
  } = education
  return (
    <div className="detail-block">
      <div className="right-block">
        <p>
          {start} - {end}
        </p>
        <p>{location}</p>
      </div>
      <div className="left-block">
        <h4>{school}</h4>
        <p>{degree}</p>
      </div>
    </div>
  )
}

function ExperienceBlock({ experience }) {
  const {
    company,
    position,
    experienceLocation: location,
    experienceStart: start,
    experienceEnd: end,
    description,
  } = experience
  return (
    <div className="detail-block ">
      <div className="right-block">
        <p>
          {start} - {end}
        </p>
        <p>{location}</p>
      </div>
      <div className="left-block ">
        <div>
          <h4>{company}</h4>
          <p>{position}</p>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
