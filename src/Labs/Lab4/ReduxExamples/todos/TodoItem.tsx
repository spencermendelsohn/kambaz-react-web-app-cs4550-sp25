import {Button, ListGroup} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo}: {
    todo: { id: string; title: string };
}) {
    const dispatch = useDispatch();
    return (
        <ListGroup.Item key={todo.id} className="d-flex align-items-center">
            {todo.title}
            <Button onClick={() => dispatch(deleteTodo(todo.id))} className="btn-danger me-2 ms-2"
                    id="wd-delete-todo-click"> Delete </Button>
            <Button onClick={() => dispatch(setTodo(todo))} className="btn-primary me-2"
                    id="wd-set-todo-click"> Edit </Button>
                </ListGroup.Item>);}