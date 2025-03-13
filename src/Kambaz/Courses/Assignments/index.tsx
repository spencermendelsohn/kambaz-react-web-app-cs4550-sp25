import {ListGroup} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentButtons from "./AssignmentButtons.tsx";
// import AssignmentControls from "./AssignmentControls.tsx";
import { useParams } from "react-router";
import * as db from "../../Database";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4 } from "uuid";
import AssignmentControls from "./AssignmentControls.tsx";
import {useState} from "react";
import {addAssignment} from "./reducer.ts";
import {deleteModule, updateModule} from "../Modules/reducer.ts";

export default function Assignments() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser.role === "FACULTY";
  const { cid } = useParams();
  // const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const [assignmentName, setAssignmentName] = useState("");
  const [assignmentDue, setAssignmentDue] = useState("");
  const [assignmentAvail, setAssignmentAvail] = useState("");
  const [assignmentDesc, setAssignmentDesc] = useState("");
  const [assignmentPoints, setAssignmentPoints] = useState("");

  // const addAssignment = () => {
  //   setAssignments([ ...assignments, { _id: uuidv4(), title: assignmentName, course: cid, due: assignmentDue, available_starting: assignmentDue, description: assignmentDesc, points: assignmentPoints } ]);
  //   setAssignmentName("");
  //   setAssignmentDesc("");
  //   setAssignmentDue("");
  //   setAssignmentPoints("");
  //   setAssignmentAvail("");
  // };

    return (
    <div id="wd-assignments">
      {isFaculty &&(<AssignmentControls assignmentName={assignmentName} setAssignmentName={setAssignmentName} addAssignment={() => {
        dispatch(addAssignment({ title: assignmentName, course: cid, due: assignmentDue, available_starting: assignmentDue, description: assignmentDesc, points: assignmentPoints }));
        setAssignmentName("");
        setAssignmentDesc("");
        setAssignmentDue("");
        setAssignmentPoints("");
        console.log(assignmentPoints)
      }} description={assignmentDesc} due={assignmentDue} points={assignmentPoints} setDesc={setAssignmentDesc} setDue={setAssignmentDue} setPoints={setAssignmentPoints} AssignmentAvail={assignmentAvail} setAssignmentAvail={setAssignmentAvail}/>)}
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignemnts">
        <ListGroup.Item
          key={cid}
          className="wd-assignment p-0 mb-5 fs-5 border-gray"
        >
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Assignments{" "}
            <AssignmentButtons />
          </div>
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              //   TODO: Maybe fix the href?
              <ListGroup className="wd-lessons rounded-0">
                <a
                  href={isFaculty ?
                    "#/Kambaz/Courses/" +
                    assignment.course +
                    "/Assignments/" +
                    assignment._id : "#/Kambaz/Courses/" +
                      assignment.course +
                      "/Assignments/"
                  }
                  className="text-decoration-none"
                >
                  <ListGroup.Item
                    key={assignment._id}
                    className="wd-lesson p-3 ps-1"
                  >
                    <BsGripVertical className="me-2 fs-3" />
                    {assignment.title} | {assignment._id}
                    <br />
                    <small className="text-muted">
                      {assignment.points} Points
                    </small>{" "}
                    |<small className="text-muted"> Due {assignment.available_starting}</small>
                    <small className="text-muted">
                      {" "}
                      | Available {assignment.available_starting}
                    </small>
                    <LessonControlButtons />
                  </ListGroup.Item>
                </a>
              </ListGroup>
            ))}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
