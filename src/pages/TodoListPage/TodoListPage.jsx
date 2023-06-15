import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import todoService from "../../services/todo.services"
import TodoForm from "../../components/TodoForm/TodoForm"
import Todos from "../../components/Todos/Todos"

const TodoListPage = () => {

    const [todo, setTodo] = useState([])

    useEffect(() => {
        fetchTodo()
    }, [])

    const fetchTodo = () => {
        todoService
            .getTodo()
            .then(({ data }) => setTodo(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h2>Create your Todo list!</h2>
            <hr />
            <TodoForm fetchTodo={fetchTodo} />
            <hr />
            {
                todo.map(elm => {
                    return (
                        <Todos fetchTodo={fetchTodo} {...elm} />
                    )
                })
            }
        </Container>
    )
}

export default TodoListPage