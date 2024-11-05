import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegistroPage from './pages/RegistroPage';

const router = createBrowserRouter([
    { path : "/", element : <LoginPage /> },
    { path : "/main", element : <MainPage /> },
    { path : "/registro", element : <RegistroPage /> }
])

export default router