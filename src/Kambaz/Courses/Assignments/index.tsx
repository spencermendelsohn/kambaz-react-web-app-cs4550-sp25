import AssignmentControlButtons from "./AssignmentButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from 'react-icons/bs';
import * as db from "../../Database"
import { useParams } from "react-router";
import { useState } from "react";
import {useSelector} from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser.role === "FACULTY";
  const deleteAssignment = (assignmentId: string) => {
    setAssignments(assignments.filter((a) => a._id !== assignmentId));
  };



  return (
    <div id="wd-assignments">
      {isFaculty && <AssignmentControls />}
      <br /> <br /> <br /> <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item p-3 ps-1"
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <BsGripVertical className="me-2 fs-3" />
                        <a
                          className="text-decoration-none"
                          href={`#/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                        >
                          {assignment.title}
                        </a>
                      </div>
                      <div className="assignment-details ms-5">
                        <div className="assignment-info">
                          <span className="text-red">
                            {assignment.description}
                          </span>{" "}
                          | <b>Due</b> {assignment.due} |{" "}
                          <small>{assignment.points} points </small>
                        </div>
                      </div>
                    </div>
                    <div className="align-self-start mt-n2">
                      {isFaculty && (
                        <AssignmentControlButtons
                          assignmentId={assignment._id}
                          deleteAssignment={deleteAssignment}
                        />)
                      }
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}