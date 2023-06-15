import { Routes, Route } from 'react-router-dom'
import TodoListPage from '../pages/TodoListPage/TodoListPage'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<TodoListPage />} />
            <Route path='/profile' element={<h1>PROFILE</h1>} />
            <Route path='/register' element={<h1>REGISTER</h1>} />
            <Route path='/login' element={<h1>LOGIN</h1>} />
            <Route path='*' element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes