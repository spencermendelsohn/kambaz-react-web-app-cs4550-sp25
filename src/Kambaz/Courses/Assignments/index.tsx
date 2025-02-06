import {ListGroup} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import AssignmentButtons from "./AssignmentButtons.tsx";
import AssignmentControls from "./AssignmentControls.tsx";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignemnts">
        <ListGroup.Item className="wd-assignemnt p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Assignments{" "}
            <AssignmentButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <a href="#/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <h5>ASSIGNMENT 1</h5>
                <p>
                  Multiple Modules | <strong>Not available until</strong> May 6
                  at 12:00am | <strong>Due</strong> May 13 at 11:59PM | 100
                  points
                </p>
              </ListGroup.Item>
            </a>
            <a href="#/Kambaz/Courses/1234/Assignments/124" className="text-decoration-none">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <h5>ASSIGNMENT 2</h5>
                <p>
                  Multiple Modules | <strong>Not available until</strong> May 13
                  at 12:00am | <strong>Due</strong> May 20 at 11:59PM | 100 points
                </p>
              </ListGroup.Item>
            </a>
            <a href="#/Kambaz/Courses/1234/Assignments/125" className="text-decoration-none">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <h5>ASSIGNMENT 3</h5>
                <p>
                  Multiple Modules | <strong>Not available until</strong> May 20
                  at 12:00am | <strong>Due</strong> May 27 at 11:59PM | 100 points
                </p>
              </ListGroup.Item>
            </a>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );

  {
    /*<h3 id="wd-assignments-title">*/
  }
  {
    /*    ASSIGNMENTS 40% of Total <button>+</button></h3>*/
  }
  {
    /*<ul id="wd-assignment-list">*/
  }
  {
    /*    <li className="wd-assignment-list-item">*/
  }
  {
    /*        <a href="#/Kambaz/Courses/1234/Assignments/123"*/
  }
  {
    /*           className="wd-assignment-link">*/
  }
  {
    /*            A1 - ENV + HTML*/
  }
  {
    /*        </a><br/>*/
  }
  {
    /*        <div id="wd-assignment-details">*/
  }
  {
    /*            <span>Multiple Modules |</span>*/
  }
  {
    /*            <span><strong> Not available until</strong> May 6 at 12:00am |</span>*/
  }
  {
    /*            <span><strong> Due</strong> May 13 at 11:59PM |</span>*/
  }
  {
    /*            <span> 100 points</span>*/
  }
  {
    /*        </div>*/
  }
  {
    /*    </li>*/
  }
  {
    /*    <li className="wd-assignment-list-item">*/
  }
  {
    /*        <a href="#/Kambaz/Courses/1234/Assignments/124"*/
  }
  {
    /*           className="wd-assignment-link">*/
  }
  {
    /*            A2 - CSS + BOOTSTRAP*/
  }
  {
    /*        </a><br/>*/
  }
  {
    /*        <div id="wd-assignment-details">*/
  }
  {
    /*            <span>Multiple Modules |</span>*/
  }
  {
    /*            <span><strong> Not available until</strong> May 13 at 12:00am |</span>*/
  }
  {
    /*            <span><strong> Due</strong> May 20 at 11:59PM |</span>*/
  }
  {
    /*            <span> 100 points</span>*/
  }
  {
    /*        </div>*/
  }
  {
    /*    </li>*/
  }
  {
    /*    <li className="wd-assignment-list-item">*/
  }
  {
    /*        <a href="#/Kambaz/Courses/1234/Assignments/125"*/
  }
  {
    /*           className="wd-assignment-link">*/
  }
  {
    /*            A3 - JAVASCRIPT + REACT*/
  }
  {
    /*        </a><br/>*/
  }
  {
    /*        <div id="wd-assignment-details">*/
  }
  {
    /*            <span>Multiple Modules |</span>*/
  }
  {
    /*            <span><strong> Not available until</strong> May 20 at 12:00am |</span>*/
  }
  {
    /*            <span><strong> Due</strong> May 27 at 11:59PM |</span>*/
  }
  {
    /*            <span> 100 points</span>*/
  }
  {
    /*        </div>*/
  }
  {
    /*    </li>*/
  }
  {
    /*</ul>*/
  }
  //   </ListGroup>
  // </div>
}
