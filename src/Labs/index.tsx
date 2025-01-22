import { Route } from "react-router";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import { Routes } from "react-router";
import { Navigate } from "react-router";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Welcome to Web Dev</h1>
      <h1>Labs</h1>
        <h2 id={"wd-full-name"}>Spencer Mendelsohn</h2>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
