// import { Form, Button, Row, Col } from "react-bootstrap";
// import { useParams } from "react-router-dom";
//
// export default function AssignmentEditor({ assignmentName, setAssignmentName, addAssignment, assignmentDescription, setAssignmentDescription, assignmentPoints, setAssignmentPoints, assignmentDueDate, setAssignmentDueDate, assignmentAvailableDate, setAssignmentAvailableDate, assignmentUntilDate, setAssignmentUntilDate,}: {
//   assignmentName: string; setAssignmentName: (name: string) => void;
//   addAssignment: () => void; assignmentDescription: string; setAssignmentDescription: (name: string) => void; assignmentPoints: string; setAssignmentPoints: (name: string) => void; assignmentDueDate: string; setAssignmentDueDate: (name: string) => void; assignmentAvailableDate: string; setAssignmentAvailableDate: (name: string) => void; assignmentUntilDate: string; setAssignmentUntilDate: (name: string) => void;}) {
//   const { cid, aid } = useParams();
// console.log(cid);
//   // if (!assignment) {
//   //   return <div>Assignment not found</div>;
//   // }
//
//   if (aid == "New"){
//   }
//
//   return (
//       <div className="container mt-4">
//         <h4>Assignment Editor</h4>
//         <Form>
//           <Form.Group controlId="wd-name">
//             <Form.Label>Assignment Name</Form.Label>
//             <Form.Control type="text" defaultValue={assignmentName} onChange={(e) => {setAssignmentName(e.target.value)}}/>
//           </Form.Group>
//
//           <Form.Group controlId="wd-description" className="mt-3">
//             <Form.Label>Description</Form.Label>
//             <Form.Control as="textarea" rows={5} defaultValue={assignmentDescription} onChange={(e) => {setAssignmentDescription(e.target.value)}}/>
//           </Form.Group>
//
//           <Row className="mt-3">
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Points</Form.Label>
//                 <Form.Control type="number" defaultValue={assignmentPoints} onChange={(e) => {setAssignmentPoints(e.target.value)}}/>
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Assignment Group</Form.Label>
//                 <Form.Select defaultValue="ASSIGNMENTS">
//                   <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//           </Row>
//
//           <Row className="mt-3">
//             <Col>
//               <Form.Group>
//                 <Form.Label>Display Grade as</Form.Label>
//                 <Form.Select defaultValue="Percentage">
//                   <option value="Percentage">Percentage</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//             <Col>
//               <Form.Group>
//                 <Form.Label>Submission Type</Form.Label>
//                 <Form.Select defaultValue="Online">
//                   <option value="Online">Online</option>
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//           </Row>
//
//           <Form.Group className="mt-3">
//             <Form.Label>Online Entry Options</Form.Label>
//             <div>
//               <Form.Check type="checkbox" label="Text Entry" />
//               <Form.Check type="checkbox" label="Website URL" />
//               <Form.Check type="checkbox" label="Media Recording" />
//               <Form.Check type="checkbox" label="Student Annotation" />
//               <Form.Check type="checkbox" label="File Uploads" />
//             </div>
//           </Form.Group>
//
//           <Form.Group className="mt-3">
//             <Form.Label>Assign to</Form.Label>
//             <Form.Control type="text" defaultValue="Everyone" />
//           </Form.Group>
//
//           <Row className="mt-3">
//             <Col>
//               <Form.Group>
//                 <Form.Label>Due</Form.Label>
//                 <Form.Control type="date" defaultValue={assignmentDueDate} onChange={(e) => {setAssignmentDueDate(e.target.value)}}/>
//               </Form.Group>
//             </Col>
//             <Col>
//               <Form.Group>
//                 <Form.Label>Available from</Form.Label>
//                 <Form.Control type="date" defaultValue={assignmentAvailableDate} onChange={(e) => {setAssignmentAvailableDate(e.target.value)}} />
//               </Form.Group>
//             </Col>
//             <Col>
//               <Form.Group>
//                 <Form.Label>Until</Form.Label>
//                 <Form.Control type="date" defaultValue={assignmentUntilDate} onChange={(e) => {setAssignmentUntilDate(e.target.value)}} />
//               </Form.Group>
//             </Col>
//           </Row>
//
//           <div className="mt-4">
//             <Button variant="secondary" className="me-2" >Cancel</Button>
//             <Button variant="danger" onClick={() => {
//               addAssignment();
//             }}>Save</Button>
//           </div>
//         </Form>
//       </div>
//   );
// }

import { Modal, FormControl, Button } from "react-bootstrap";

export default function AssignmentEditor({
                                             show,
                                             handleClose,
                                             dialogTitle,
                                             assignmentName,
                                             setAssignmentName,
                                             addAssignment,
    points,
    description,
    due,
    setPoints,
    setDue,
    setDesc
                                         }: {
    show: boolean;
    handleClose: () => void;
    dialogTitle: string;
    assignmentName: string;
    setAssignmentName: (name: string) => void;
    addAssignment: () => void;
    points: string;
    setPoints: (points: string) => void;
    description: string;
    due: string;
    setDue: (due: string) => void;
    setDesc: (desc: string) => void;
    setAssignmentAvail: (avail: string) => void;
    AssignmentAvail: string;
}) {
    const clearEverything = () => {
        setAssignmentName("");
        setDesc("");
        setDue("");
        setPoints("");
    }
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{dialogTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            value={assignmentName}
            onChange={(e) => {
              setAssignmentName(e.target.value);
            }}
            placeholder={"Assignment Name"}
          />
          <br />

          <FormControl
            value={points}
            onChange={(e) => {
              setPoints(e.target.value);
            }}
            placeholder={"Points"}
          />
          <br />

          <FormControl
            value={due}
            onChange={(e) => {
              setDue(e.target.value);
            }}
            placeholder={"Due Date"}
          />
          <br />
          <FormControl
            value={description}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder={"Description"}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              clearEverything();
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addAssignment();
              handleClose();
            }}
          >
            Add Assignment
          </Button>
        </Modal.Footer>
      </Modal>
    );
}