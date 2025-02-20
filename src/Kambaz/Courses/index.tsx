import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import {Route, Routes, useLocation} from "react-router";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "../People/Table.tsx";
import {useParams} from "react-router-dom";
import {courses} from "../Database";
import {FaAlignJustify} from "react-icons/fa";

export default function Courses() {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1"/>
                {course && course.name} &gt; {pathname.split("/")[4]}
            </h2>
            <hr/>
            <div className="d-flex">
                <div className="me-3">
                    <CoursesNavigation/>
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="Home" element={<Home/>}/>
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Assignments" element={<Assignments/>}/>
                        <Route path="Assignments/:aid" element={<AssignmentEditor/>}/>
                        <Route path="People" element={<PeopleTable/>}/>
                        <Route path="Piazza" element={<h1>Piazza</h1>}/>
                        <Route path="Zoom" element={<h1>Zoom</h1>}/>
                        <Route path="Quizzes" element={<h1>Quizzes</h1>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}