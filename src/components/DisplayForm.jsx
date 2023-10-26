export default function DisplayForm({ Form, list, setList, inputHandler }) {
  return <Form list={list} setList={setList} onChange={inputHandler}></Form>
}
