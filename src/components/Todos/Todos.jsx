import { Container, Button, Row, Col } from "react-bootstrap"
import todoService from "../../services/todo.services";

const Todos = ({ task, _id, fetchTodo }) => {

    const handleClick = () => {
        todoService
            .deleteTodo(_id)
            .then(() => fetchTodo())
            .catch((error) => console.log(error))
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <p>{task}</p>
                </Col>
                <Col md="auto">
                    <Button variant="secondary" >Edit</Button>
                </Col>
                <Col xs lg="2">
                    <Button variant="danger" onClick={handleClick} >Delete</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Todos