import { Routes, Route } from 'react-router-dom'
import TodoListPage from '../pages/TodoListPage/TodoListPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<TodoListPage />} />
            <Route path='/profile' element={<h1>PROFILE</h1>} />
            <Route path='/register' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes