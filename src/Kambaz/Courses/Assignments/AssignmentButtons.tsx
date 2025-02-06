import { IoEllipsisVertical } from "react-icons/io5";
import {FaPlus} from "react-icons/fa6";
export default function AssignmentButtons() {
    return (
        <div className="float-end">
            40% of Total
            <FaPlus className="position-relative ps-1 me-2" style={{ bottom: "1px" }} />
            <IoEllipsisVertical className="fs-4" />
        </div> );}