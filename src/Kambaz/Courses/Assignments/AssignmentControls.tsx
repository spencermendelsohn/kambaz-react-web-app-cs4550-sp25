// import {FaPlus} from "react-icons/fa6";
// import {Button} from "react-bootstrap";
// import {useNavigate, useParams} from "react-router-dom";
// export default function AssignmentControls(){
//     const navigate = useNavigate();
//     const { cid } = useParams();
//     return (
//         <div id="wd-assignment-controls" className="text-nowrap">
//             <input
//                 placeholder="Search..."
//                 id="wd-search-assignment"
//                 className="me-1 float-start">
//             </input>
//             <Button
//                 variant="danger"
//                 size="lg"
//                 className="me-1 float-end"
//                 id="wd-add-module-btn"
//                 onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/New`)}
//             >
//                 <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
//                 Assignment
//             </Button>
//             <Button
//                 variant="secondary"
//                 size="lg"
//                 className="me-1 float-end"
//                 id="wd-add-module-group-btn"
//                 >
//                 <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
//                 Group
//             </Button>
//         </div>
//     );
// }

import { FaPlus } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {useState} from "react";
import AssignmentEditor from "./Editor.tsx";

export default function AssignmentControls(
    { assignmentName, setAssignmentName, addAssignment, description, due, points, setDesc, setDue, setPoints, setAssignmentAvail, AssignmentAvail,}:
        { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; description: string; due: string; points: string; setDesc: (desc: string) => void; setDue: (due: string) => void; setPoints: (points: string) => void; setAssignmentAvail: (avail: string) => void; AssignmentAvail: string; }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { cid} = useParams();
    console.log(cid)
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <input
                placeholder="Search..."
                id="wd-search-assignment"
                className="me-1 float-start"
            />
            <Button
                variant="danger"
                size="lg"
                className="me-1 float-end"
                id="wd-add-module-btn"
                onClick={() => handleShow()}
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button
                variant="secondary"
                size="lg"
                className="me-1 float-end"
                id="wd-add-module-group-btn"
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </Button>
            <AssignmentEditor show={show} handleClose={handleClose} dialogTitle="Add Assignment"
                              assignmentName={assignmentName} setAssignmentName={setAssignmentName} addAssignment={addAssignment}  description={description} due={due} points={points} setDesc={setDesc} setDue={setDue} setPoints={setPoints} AssignmentAvail={AssignmentAvail} setAssignmentAvail={setAssignmentAvail}/>
        </div>
    );
}

//        <AssignmentEditor newAssignment={true} assignmentName={assignmentName}
//                               setAssignmentName={setAssignmentName} addAssignment={addAssignment}
//                               assignmentDescription={assignmentDescription}
//                               setAssignmentDescription={setAssignmentDescription}
//                               assignmentPoints={assignmentPoints} setAssignmentPoints={setAssignmentPoints}
//                               assignmentDueDate={assignmentDueDate} setAssignmentDueDate={setAssignmentDueDate}
//                               assignmentAvailableDate={assignmentAvailableDate}
//                               setAssignmentAvailableDate={setAssignmentAvailableDate}
//                               assignmentUntilDate={assignmentUntilDate}
//                               setAssignmentUntilDate={setAssignmentUntilDate}/>