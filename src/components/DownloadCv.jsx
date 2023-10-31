import "../styles/index.css"
import { jsPDF } from "jspdf"
import { useReactToPrint } from "react-to-print"
export default function DownloadCv({ resumeRef }) {
  // const downloadCv = useReactToPrint({
  //   content: () => resumeRef,
  // })
  const downloadCv = () => {
    alert("Still working on this one sorry!")
  }
  return (
    <button className="download-btn" type="button" onClick={downloadCv}>
      Download Resume
    </button>
  )
}
