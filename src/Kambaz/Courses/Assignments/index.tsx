import {ListGroup} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentButtons from "./AssignmentButtons.tsx";
import AssignmentControls from "./AssignmentControls.tsx";
import { useParams } from "react-router";
import * as db from "../../Database";
import LessonControlButtons from "../Modules/LessonControlButtons.tsx";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <AssignmentControls />
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
              <ListGroup className="wd-lessons rounded-0">
                <a
                  href={
                    "#/Kambaz/Courses/" +
                    assignment.course +
                    "/Assignments/" +
                    assignment._id
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
                    |<small className="text-muted"> Due {assignment.due}</small>
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
