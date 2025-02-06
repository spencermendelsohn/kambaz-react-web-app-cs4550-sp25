import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <Form.Control
                id="wd-username"
                defaultValue="alice"
                placeholder="username"
                className="mb-2"
            />
            <Form.Control
                id="wd-password"
                defaultValue="123"
                placeholder="password"
                type="password"
                className="mb-2"
            />
            <Form.Control
                id="wd-firstname"
                defaultValue="Alice"
                placeholder="First Name"
                className="mb-2"
            />
            <Form.Control
                id="wd-lastname"
                defaultValue="Wonderland"
                placeholder="Last Name"
                className="mb-2"
            />
            <Form.Control
                id="wd-dob"
                defaultValue="2000-01-01"
                type="date"
                className="mb-2"
            />
            <Form.Control
                id="wd-email"
                defaultValue="alice@wonderland"
                type="email"
                className="mb-2"
            />
            <Form.Control id="wd-role" defaultValue="USER" className="mb-2"/>
            <Link
                id="wd-signout-link"
                to="/Kambaz/Account/Signin"
                className="btn btn-danger w-100 mb-2"
            >
                Sign out
            </Link>
        </div>
    );
}