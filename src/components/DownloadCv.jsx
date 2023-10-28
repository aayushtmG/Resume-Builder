import "../styles/index.css"
export default function DownloadCv() {
  return (
    <button
      className="download-btn"
      type="button"
      onClick={() => alert("Downloaded cv")}
    >
      Download Resume
    </button>
  )
}
