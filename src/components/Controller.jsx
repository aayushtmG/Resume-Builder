import "/src/styles/controller.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
function Button({ icon, text, isSelected, onClick }) {
  const btnClassname = isSelected ? "btn active" : "btn"
  return (
    <button className={btnClassname} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </button>
  )
}
function Controller({ setEditor }) {
  const [selected, setSelected] = useState("Content")
  const handleFocus = (button) => {
    setSelected(button)
    setEditor(button)
  }
  return (
    <div className="container">
      <Button
        icon={faFile}
        text={"Content"}
        isSelected={selected === "Content"}
        onClick={() => handleFocus("Content")}
      />
      <Button
        icon={faPenToSquare}
        text={"Customize"}
        onClick={() => handleFocus("Customize")}
        isSelected={selected === "Customize"}
      ></Button>
    </div>
  )
}

export default Controller
