import { IoEllipsisVertical } from "react-icons/io5";
import {FaTrash} from "react-icons/fa";
export default function AssignmentButtons(
    { assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void;}
) {
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)} />
            <IoEllipsisVertical className="fs-4" />
        </div> );}