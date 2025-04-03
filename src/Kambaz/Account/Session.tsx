import * as client from "./client";
import { useEffect, useState } from "react";
import {setCurrentUser, setEnrollments} from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();
    const fetchProfile = async () => {
        try {
            const currentUser = await client.profile();
            const enrollments = await client.getAllEnrollments();
            dispatch(setCurrentUser(currentUser));
            dispatch(setEnrollments(enrollments))
        } catch (err: any) {
            console.error(err);
        }
        setPending(false);
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    if (!pending) {
        return children;
    }
}
