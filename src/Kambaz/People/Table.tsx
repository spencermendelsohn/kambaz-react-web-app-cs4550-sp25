import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../Database";

export default function PeopleTable() {
  const { cid} = useParams();
  const { users, enrollments } = db;
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
        <tr>
          <th>Name</th>
          <th>Login ID</th>
          <th>Section</th>
          <th>Role</th>
          <th>Last Activity</th>
          <th>Total Activity</th>
        </tr>
        </thead>
        <tbody>
        {users
            .filter((usr: any) =>
                enrollments.some((enrollment: any) => enrollment.user === usr._id && enrollment.course === cid)
            )
            .map((user: any) => (
                <tr key={user._id}>
                  <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary"/>
                    <span className="wd-first-name">{user.firstName}</span>
                    <span className="wd-last-name">{user.lastName}</span>
                  </td>
                  <td className="wd-login-id">{user.loginId}</td>
                  <td className="wd-section">{user.section}</td>
                  <td className="wd-role">{user.role}</td>
                  <td className="wd-last-activity">{user.lastActivity}</td>
                  <td className="wd-total-activity">{user.totalActivity}</td>
                </tr>
            ))}
        </tbody>

        {/*<tbody>*/}
        {/*  <tr>*/}
        {/*    <td className="wd-full-name text-nowrap">*/}
        {/*      <FaUserCircle className="me-2 fs-1 text-secondary" />*/}
        {/*      <span className="wd-first-name">Tony</span>{" "}*/}
        {/*      <span className="wd-last-name">Stark</span>*/}
        {/*    </td>*/}
        {/*    <td className="wd-login-id">001234561S</td>*/}
        {/*    <td className="wd-section">S101</td>*/}
        {/*    <td className="wd-role">STUDENT</td>*/}
        {/*    <td className="wd-last-activity">2020-10-01</td>*/}
        {/*    <td className="wd-total-activity">10:21:32</td>*/}
        {/*  </tr>*/}

        {/*  /!**!/*/}
        {/*  <tr>*/}
        {/*    <td className="wd-full-name text-nowrap">*/}
        {/*      <FaUserCircle className="me-2 fs-1 text-secondary" />*/}
        {/*      <span className="wd-first-name">Bruce</span>{" "}*/}
        {/*      <span className="wd-last-name">Wayne</span>*/}
        {/*    </td>*/}
        {/*    <td className="wd-login-id">001234562X</td>*/}
        {/*    <td className="wd-section">S102</td>*/}
        {/*    <td className="wd-role">STUDENT</td>*/}
        {/*    <td className="wd-last-activity">2020-10-02</td>*/}
        {/*    <td className="wd-total-activity">10:20:50</td>*/}
        {/*  </tr>*/}
        {/*  <tr>*/}
        {/*    <td className="wd-full-name text-nowrap">*/}
        {/*      <FaUserCircle className="me-2 fs-1 text-secondary" />*/}
        {/*      <span className="wd-first-name">Spencer</span>{" "}*/}
        {/*      <span className="wd-last-name">Mendelsohn</span>*/}
        {/*    </td>*/}
        {/*    <td className="wd-login-id">001234563S</td>*/}
        {/*    <td className="wd-section">S103</td>*/}
        {/*    <td className="wd-role">STUDENT</td>*/}
        {/*    <td className="wd-last-activity">2020-10-03</td>*/}
        {/*    <td className="wd-total-activity">14:56:34</td>*/}
        {/*  </tr>*/}
        {/*  <tr>*/}
        {/*    <td className="wd-full-name text-nowrap">*/}
        {/*      <FaUserCircle className="me-2 fs-1 text-secondary" />*/}
        {/*      <span className="wd-first-name">Tim</span>{" "}*/}
        {/*      <span className="wd-last-name">Bob</span>*/}
        {/*    </td>*/}
        {/*    <td className="wd-login-id">001234564N</td>*/}
        {/*    <td className="wd-section">S104</td>*/}
        {/*    <td className="wd-role">STUDENT</td>*/}
        {/*    <td className="wd-last-activity">2020-10-04</td>*/}
        {/*    <td className="wd-total-activity">16:21:45</td>*/}
        {/*  </tr>*/}
        {/*</tbody>*/}
      </Table>
    </div>
  );
}
