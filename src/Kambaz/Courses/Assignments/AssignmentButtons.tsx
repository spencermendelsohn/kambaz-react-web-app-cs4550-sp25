import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from '../Modules/GreenCheckmark';
import {useDispatch, useSelector} from 'react-redux';
import { FaTrash } from 'react-icons/fa6';
import {deleteAssignment} from "./reducer.ts";
import * as client from './client';
export default function AssignmentButtons({assignmentId,}: {assignmentId: string;}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    return (
        <div className="ms-auto">
            {currentUser.role === 'FACULTY' && (
                <FaTrash
                    className="text-danger me-2 mb-1"
                    onClick={async () => {
                        await client.deleteAssignment(assignmentId);
                        dispatch(deleteAssignment(assignmentId));
                    }}
                />
            )}
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}