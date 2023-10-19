export default function DisplayForm({ Form, list, inputHandler }) {
  return <Form list={list} onChange={inputHandler}></Form>
}
