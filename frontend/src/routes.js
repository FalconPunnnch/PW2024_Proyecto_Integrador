import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegistroPage from './pages/RegistroPage';
import CompraPage from './pages/CompraPage';
import DetallesPage from './pages/DetallesPage';
import CarritoPage from './pages/CarritoPage';
import AdminPage from './pages/AdminPage';

const router = createBrowserRouter([
    { path : "/", element : <MainPage/> },
    { path : "/login", element : <LoginPage /> },
    { path : "/registro", element : <RegistroPage /> },
    { path : "/carrito", element : <CarritoPage /> },
    { path : "/compra", element: <CompraPage /> },
    { path : "/detalles", element: <DetallesPage /> },
    { path : "/admin", element: <AdminPage /> }   

])

export default router
