import "../styles/customize.css"
export default function CustomizeEditor() {
  return (
    <div className="editor-container">
      <LayoutEditor></LayoutEditor>
      <ColorSelection></ColorSelection>
    </div>
  )
}

function LayoutEditor() {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h3 className="title">Layout</h3>
        <div className="layout-container">
          <LayoutButton style={"vsplit"}></LayoutButton>
          <LayoutButton style={"vsplit-invert"}></LayoutButton>
          <LayoutButton style={"default"}></LayoutButton>
        </div>
      </form>
    </div>
  )
}

function LayoutButton({ style }) {
  const handleClick = () => {
    alert(style)
  }
  return (
    <button className={`layout-btn ${style}`} onClick={handleClick}>
      <div className="highlight"></div>
    </button>
  )
}
function ColorSelection() {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h3 className="title">Color</h3>
        <input type="color" onChange={(e) => alert(e.target.value)} />
      </form>
    </div>
  )
}
