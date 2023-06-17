import { useEffect, useState } from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import todoService from "../../services/todo.services";

const Todos = ({ task, _id, fetchTodo, completed }) => {
    const [editing, setEditing] = useState(false);
    const [updatedTask, setUpdatedTask] = useState(task);
    const [isCompleted, setIsCompleted] = useState(completed);

    useEffect(() => {
        setIsCompleted(completed);
    }, [completed]);

    const handleToggleCompleted = () => {
        const updatedCompletedStatus = !isCompleted;
        todoService
            .editTodo(_id, { completed: updatedCompletedStatus })
            .then(() => {
                setIsCompleted(updatedCompletedStatus);
                fetchTodo();
            })
            .catch(error => console.log(error));
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleUpdate = () => {
        todoService
            .editTodo(_id, { task: updatedTask })
            .then(() => {
                fetchTodo();
                setEditing(false);
            })
            .catch(error => console.log(error));
    };

    const handleCancel = () => {
        setUpdatedTask(task);
        setEditing(false);
    };

    const handleClick = () => {
        todoService
            .deleteTodo(_id)
            .then(() => fetchTodo())
            .catch(error => console.log(error));
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col className="mb-3">
                    {editing ? (
                        <input
                            type="text"
                            value={updatedTask}
                            onChange={e => setUpdatedTask(e.target.value)}
                        />
                    ) : (
                        <Col>
                            <Form.Check
                                type="checkbox"
                                label={<span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
                                    {task}
                                </span>}
                                checked={isCompleted}
                                onChange={handleToggleCompleted}
                            />
                        </Col>
                    )}
                </Col>
                <Col md="auto">
                    {editing ? (
                        <>
                            <Button className='me-3' variant="success" onClick={handleUpdate}>
                                Save
                            </Button>
                            <Button variant="secondary" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </>
                    ) : (
                        <Button variant="secondary" onClick={handleEdit}>
                            Edit
                        </Button>
                    )}
                </Col>
                <Col xs lg="2">
                    <Button variant="danger" onClick={handleClick}>
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Todos;
