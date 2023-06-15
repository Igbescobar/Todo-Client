import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import todoService from "../../services/todo.services"

const TodoForm = ({ fetchTodo }) => {

    const [todoData, setTodoData] = useState({
        task: '',
        status: 'pending'
    })

    const handleChange = e => {
        const { name, value } = e.target
        setTodoData({ ...todoData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        todoService
            .saveTodo(todoData)
            .then(() => {
                fetchTodo()
                setTodoData({ task: '' })
            })
            .catch(err => console.log(err))
    }

    return (
        < Form onSubmit={handleSubmit} >
            <Row>
                <Col>
                    <Form.Group className="mb-3 todo-form" controlId="task">
                        <Form.Control type="text" placeholder="Add a todo" value={todoData.task} onChange={handleChange} name="task" />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">Add Todo</Button>
                </Col>
            </Row>
        </Form >
    )
}

export default TodoForm

