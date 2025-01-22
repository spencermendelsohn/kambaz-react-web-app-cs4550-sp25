import { Link } from "react-router";

export default function TOC() {
  return (
    <ul>
      <li>
        <Link id="wd-a" to="/Labs">
          Labs
        </Link>
      </li>
      <li>
        <Link id="wd-a1" to="/Labs/Lab1">
          Lab 1
        </Link>
      </li>
      <li>
        <Link id="wd-a2" to="/Labs/Lab2">
          Lab 2
        </Link>
      </li>
      <li>
        <Link id="wd-a3" to="/Labs/Lab3">
          Lab 3
        </Link>
      </li>
      <li>
        <Link id="wd-k" to="/Kambaz">
          Kambaz
        </Link>
      </li>
        <li>
            <Link id={"wd-github"} to="https://github.com/spencermendelsohn/kambaz-react-web-app-cs4550-sp25" target={"_blank"}>Github</Link>
        </li>
    </ul>
  );
}
