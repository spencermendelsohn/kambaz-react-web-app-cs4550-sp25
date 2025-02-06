// export default function CourseStatus() {
//     return (
//         <div id="wd-course-status">
//             <h2>Course Status</h2>
//             <button>Unpublish</button>
//             <button>Publish</button>
//             <br/>
//             <br/>
//             <table>
//                 <tbody>
//                 <tr>
//                     <td>
//                         <button>Import Existing Content</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <button>Import from Commons</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <button>Choose Home Page</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <button>View Course Stream</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <button>New Announcement</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <button>New Analytics</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <button>View Course Notifications</button>
//                     </td>
//                 </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import {BiBarChart, BiBell, BiHome, BiImport} from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import {GrAnnounce} from "react-icons/gr";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" />
            Unpublish{" "}
          </Button>
        </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100">
            <FaCheckCircle className="me-2 fs-5" />
            Publish{" "}
          </Button>
        </div>
      </div>
      <br />
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" />
        Import Existing Content
      </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" />
        Import from Commons
      </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiHome className="me-2 fs-5" />
        Choose Home Page
      </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiBarChart className="me-2 fs-5" />
        View Course Stream
      </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <GrAnnounce className="me-2 fs-5" />
        New Announcement
      </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiBarChart className="me-2 fs-5" />
        New Analytics
      </Button>

      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiBell className="me-2 fs-5" />
        View Course Notifications
      </Button>
    </div>
  );
}
