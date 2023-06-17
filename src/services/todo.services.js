import axios from 'axios'

class TodoService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/todo`
        })
    }

    getTodo() {
        return this.api.get('/getAllTodos')
    }

    saveTodo(todoData) {
        return this.api.post('/saveTodo', todoData)
    }

    editTodo(todo_id, updatedData) {
        return this.api.put(`${todo_id}/edit`, updatedData)
    }

    deleteTodo(todo_id) {
        return this.api.delete(`${todo_id}/delete`)
    }

}

const todoService = new TodoService()

export default todoService