import AssignmentControlButtons from "./AssignmentButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from 'react-icons/bs';
import * as assignmentsClient from './client';

import { useParams } from "react-router";

import {useDispatch, useSelector} from "react-redux";
import {setAssignments} from "./reducer.ts";
import {useEffect} from "react";

export default function Assignments() {
  const dispatch = useDispatch();
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.fetchAllAssignments(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments()
  }, []);


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
            {assignments.map((assignment: any) => (
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