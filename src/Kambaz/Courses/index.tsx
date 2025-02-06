import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import { Route, Routes } from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "../People/Table.tsx";

export default function Courses() {
    return (
        <div id="wd-courses">
            <div className="d-flex align-items-start">
                <div className="me-3">
                </div>
                <div>
                    <h2 className="text-danger">Course 1234</h2>
                </div>
            </div>
            <hr />
            <div className="d-flex">
                <div className="me-3">
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Zoom" element={<h1>Zoom</h1>} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}