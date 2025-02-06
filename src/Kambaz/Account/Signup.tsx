// import { Link } from "react-router-dom";
// export default function Signup() {
//   return (
//     <div id="wd-signup-screen">
//       <h3>Sign up</h3>
//       <input placeholder="username" />
//       <br />
//       <input placeholder="password" type="password" />
//       <br />
//       <input placeholder="verify password" type="password" />
//       <br />
//       <Link to="/Kambaz/Account/Profile"> Sign up </Link>
//       <br />
//       <Link to="/Kambaz/Account/Signin">Sign in</Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <Form.Control
                id="wd-username"
                placeholder="username"
                className="mb-2"
            />
            <Form.Control
                id="wd-password"
                placeholder="password"
                type="password"
                className="mb-2"
            />
            <Link
                id="wd-signup-btn"
                to="/Kambaz/Account/Profile"
                className="btn btn-primary w-100 mb-2"
            >
                Sign up
            </Link>
            <br />
            <Link id="wd-signin-link" to="/Kambaz/Account/Signin">
                Sign in
            </Link>
        </div>
    );
}