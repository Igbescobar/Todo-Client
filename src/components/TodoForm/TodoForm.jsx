import { useContext, useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import todoService from "../../services/todo.services";
import { AuthContext } from "../../contexts/auth.context";
import { MessageContext } from "../../contexts/message.context";

const TodoForm = ({ fetchTodo }) => {
    const [todoData, setTodoData] = useState({
        task: "",
        status: "pending",
    });

    const { user } = useContext(AuthContext);
    const { message, emitMessage } = useContext(MessageContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTodoData({ ...todoData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user) {
            todoService
                .saveTodo(user._id, todoData)
                .then(() => {
                    fetchTodo();
                    setTodoData({ task: "" });
                })
                .catch((err) => console.log(err));
        } else {
            emitMessage("Inicia sesión");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {message && <Alert variant="info">{message}</Alert>}
            <Row>
                <Col>
                    <Form.Group className="mb-3 todo-form" controlId="task">
                        <Form.Control
                            type="text"
                            placeholder="Add a todo"
                            value={todoData.task}
                            onChange={handleChange}
                            name="task"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Add Todo
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default TodoForm;
