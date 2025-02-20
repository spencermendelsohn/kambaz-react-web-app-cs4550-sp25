import { Link, useLocation, useParams } from "react-router-dom";
import {ListGroup} from "react-bootstrap";

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();

  return (
      <ListGroup id="wd-kambaz-navigation" style={{width: 120}}
                 className="rounded-0 bottom-0 top-0 d-none d-md-block" >
    {links.map((link) => (
        <ListGroup.Item
            key={link}
            as={Link}
            to={`/Kambaz/Courses/${cid}/${link}`}
            className={`list-group-item text-danger ${pathname.includes(link) ? "text-black" +
                " border border-0" : "text-danger border border-0"}`}
        >
            {link}
        </ListGroup.Item>
    ))}
</ListGroup>
  );
}

