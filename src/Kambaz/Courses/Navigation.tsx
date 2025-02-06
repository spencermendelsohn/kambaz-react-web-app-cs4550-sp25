import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function CourseNavigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto flex-column">
                        <Nav.Link as={Link} to="/Kambaz/Courses/1234/Home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Kambaz/Courses/1234/Modules">Modules</Nav.Link>
                        <Nav.Link as={Link} to="/Kambaz/Courses/1234/Piazza">Piazza</Nav.Link>
                        <Nav.Link as={Link} to="/Kambaz/Courses/1234/Zoom">Zoom</Nav.Link>
                        <Nav.Link as={Link} to="/Kambaz/Courses/1234/Assignments">Assignments</Nav.Link>
                        <Nav.Link as={Link} to="/Kambaz/Courses/1234/Quizzes">Quizzes</Nav.Link>
                        <Nav.Link as={Link} to="/Kambaz/Courses/1234/People">People</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}