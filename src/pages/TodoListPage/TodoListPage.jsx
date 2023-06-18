import { useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import todoService from "../../services/todo.services"
import TodoForm from "../../components/TodoForm/TodoForm"
import Todos from "../../components/Todos/Todos"
import { AuthContext } from "../../contexts/auth.context"

const TodoListPage = () => {

    const [todo, setTodo] = useState([])

    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetchTodo()
    }, [])

    const fetchTodo = () => {
        if (user) {
            todoService
                .getTodo(user._id)
                .then(({ data }) => setTodo(data))
                .catch(err => console.log(err))
        }
    }

    return (
        <Container>
            <h2>Create your Todo list!</h2>
            <hr />
            <TodoForm fetchTodo={fetchTodo} />
            <hr />
            {
                todo && todo.map(elm => {
                    return (
                        <Todos fetchTodo={fetchTodo} {...elm} />
                    )
                })
            }
        </Container>
    )
}

export default TodoListPage