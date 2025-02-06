
import { Form, Button, Row, Col } from "react-bootstrap";


export default function AssignmentEditor() {
  return (
      <div className="container mt-4">
        <h4>Assignment Editor</h4>
        <Form>
          <Form.Group controlId="wd-name">
            <Form.Label>Assignment Name</Form.Label>
            <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
          </Form.Group>

          <Form.Group controlId="wd-description" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
                as="textarea"
                rows={5}
                defaultValue={
                  "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n• Your full name and section\n• Links to each of the lab assignments\n• Link to the Kanbas application\n• Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page."
                }
            />
          </Form.Group>

          <Row className="mt-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Points</Form.Label>
                <Form.Control type="number" defaultValue={100} />
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
            <Col >
              <Form.Group>
                <Form.Label>Due</Form.Label>
                <Form.Control type="date" defaultValue="2024-05-13" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Available from</Form.Label>
                <Form.Control type="date" defaultValue="2024-05-06" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Until</Form.Label>
                <Form.Control type="date" defaultValue="2024-05-28" />
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