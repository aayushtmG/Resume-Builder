import { AddFormButton } from "./AddFormButton"
export default function CollapsedForm({
  setNewForm,
  list,
  setForm,
  title,
  addForm,
  isListEmpty,
}) {
  const handleItems = (e) => {
    setForm(e.target.id * 1)
    setNewForm(false)
  }
  const available = list.map((e, index) => (
    <li>
      <button id={index} onClick={handleItems}>
        {title == "Education" ? e.school : e.company}
      </button>
    </li>
  ))
  return (
    <div className="collapsed-form">
      {isListEmpty ? <ul></ul> : available}
      <AddFormButton title={title} onClick={addForm}></AddFormButton>
    </div>
  )
}
