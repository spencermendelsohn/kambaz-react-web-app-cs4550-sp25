import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: any) => a._id === aid);
console.log(cid);
  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
      <div className="container mt-4">
        <h4>Assignment Editor</h4>
        <Form>
          <Form.Group controlId="wd-name">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control type="text" defaultValue={assignment.title} />
          </Form.Group>

          <Form.Group controlId="wd-description" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} defaultValue={assignment.description} />
          </Form.Group>

          <Row className="mt-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Points</Form.Label>
                <Form.Control type="number" defaultValue={assignment.points} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Assignment Group</Form.Label>
                <Form.Select defaultValue="ASSIGNMENTS">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <Form.Group>
                <Form.Label>Display Grade as</Form.Label>
                <Form.Select defaultValue="Percentage">
                  <option value="Percentage">Percentage</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Submission Type</Form.Label>
                <Form.Select defaultValue="Online">
                  <option value="Online">Online</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mt-3">
            <Form.Label>Online Entry Options</Form.Label>
            <div>
              <Form.Check type="checkbox" label="Text Entry" />
              <Form.Check type="checkbox" label="Website URL" />
              <Form.Check type="checkbox" label="Media Recording" />
              <Form.Check type="checkbox" label="Student Annotation" />
              <Form.Check type="checkbox" label="File Uploads" />
            </div>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Assign to</Form.Label>
            <Form.Control type="text" defaultValue="Everyone" />
          </Form.Group>

          <Row className="mt-3">
            <Col>
              <Form.Group>
                <Form.Label>Due</Form.Label>
                <Form.Control type="date" defaultValue={assignment.due} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Available from</Form.Label>
                <Form.Control type="date" defaultValue={assignment.available_starting} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Until</Form.Label>
                <Form.Control type="date" defaultValue={assignment.available_starting} />
              </Form.Group>
            </Col>
          </Row>

          <div className="mt-4">
            <Button variant="secondary" className="me-2">Cancel</Button>
            <Button variant="danger">Save</Button>
          </div>
        </Form>
      </div>
  );
}