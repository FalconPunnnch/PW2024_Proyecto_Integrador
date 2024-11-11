import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegistroPage from './pages/RegistroPage';
import CompraPage from './pages/CompraPage';
import DetallesPage from './pages/DetallesPage';
import ProductoPage from './pages/ProductoPage';

const router = createBrowserRouter([
    { path : "/", element : <MainPage /> },
    { path : "/login", element : <LoginPage/> },
    { path : "/registro", element : <RegistroPage /> },
    { path : "/producto", element : <ProductoPage /> },
    { path : "/compra", element: <CompraPage /> },
    { path : "/detalles", element: <DetallesPage /> }

])

export default router