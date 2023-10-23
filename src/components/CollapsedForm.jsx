import { AddFormButton } from "./AddFormButton"
export default function CollapsedForm({
  setNewForm,
  list,
  setForm,
  title,
  addForm,
}) {
  const handleItems = (e) => {
    setForm(e.target.id)
    setNewForm(false)
  }
  return (
    <div className="collapsed-form">
      {list.map((e, index) => (
        <li>
          <button id={index} onClick={handleItems}>
            {title == "Education" ? e.school : e.company}
          </button>
        </li>
      ))}
      <AddFormButton title={title} onClick={addForm}></AddFormButton>
    </div>
  )
}
