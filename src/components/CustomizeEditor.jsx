import "../styles/customize.css"
export default function CustomizeEditor({
  accentColor,
  setAccentColor,
  setLayout,
}) {
  return (
    <div className="editor-container">
      <LayoutEditor
        accentColor={accentColor}
        setLayout={setLayout}
      ></LayoutEditor>
      <ColorSelection
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      ></ColorSelection>
    </div>
  )
}

function LayoutEditor({ accentColor, setLayout }) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h3 className="title">Layout</h3>
        <div className="layout-container">
          <LayoutButton
            setLayout={setLayout}
            layout={"vsplit"}
            accentColor={accentColor}
            position={"Left"}
          ></LayoutButton>
          <LayoutButton
            setLayout={setLayout}
            layout={"vsplit-reverse"}
            accentColor={accentColor}
            position={"Right"}
          ></LayoutButton>
          <LayoutButton
            setLayout={setLayout}
            layout={"default"}
            accentColor={accentColor}
            position={"Top"}
          ></LayoutButton>
        </div>
      </form>
    </div>
  )
}

function LayoutButton({ layout, accentColor, setLayout, position }) {
  const style = {
    backgroundColor: accentColor,
  }
  const handleClick = () => {
    setLayout(layout)
  }
  return (
    <div>
      <button className={`layout-btn ${layout}`} onClick={handleClick}>
        <div className="highlight" style={style}></div>
      </button>
      <p>{position}</p>
    </div>
  )
}
function ColorSelection({ accentColor, setAccentColor }) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h3 className="title">Color</h3>
        <input
          id="colorPicker"
          className="color-picker"
          type="color"
          value={accentColor}
          onChange={(e) => setAccentColor(e.target.value)}
        />
      </form>
    </div>
  )
}
