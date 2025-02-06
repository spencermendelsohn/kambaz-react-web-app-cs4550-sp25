import {FaPlus} from "react-icons/fa6";
import {Button} from "react-bootstrap";
export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <input
                placeholder="Search..."
                id="wd-search-assignment"
                className="me-1 float-start">
            </input>
            <Button
                variant="danger"
                size="lg"
                className="me-1 float-end"
                id="wd-add-module-btn"
            >
                <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                Assignment
            </Button>
            <Button
                variant="secondary"
                size="lg"
                className="me-1 float-end"
                id="wd-add-module-group-btn"
                >
                <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                Group
            </Button>
        </div>
    );
}
