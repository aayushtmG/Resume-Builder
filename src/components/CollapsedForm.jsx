import { AddFormButton } from "./AddFormButton"
export default function CollapsedForm({ list, setForm, title, addForm }) {
  return (
    <div className="collapsed-form">
      {list.map((e, index) => (
        <li>
          <button id={index} onClick={(e) => setForm(e.target.id)}>
            {title == "Education" ? e.school : e.company}
          </button>
        </li>
      ))}
      <AddFormButton title={title} onClick={addForm}></AddFormButton>
    </div>
  )
}
