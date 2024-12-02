import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../src/App.css'
import App from '../App.jsx'
import Header from '../components/Header/Header.jsx'
import Logins from '../pages/Usuario/Login/Login.jsx'
import Registros from '../pages/Usuario/Registro/Register.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Contenido from '../pages/Usuario/Perfil/contenido.jsx'
import Categoria from '../components/Categoria/Categoria.jsx'
import ProductDetail from '../pages/Producto/ProductDetail.jsx'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import CompraPage from '../pages/CompraPage.jsx';
import DetallesPage from '../pages/DetallesPage.jsx';
import CarritoPage from '../pages/CarritoPage.jsx';
import AdminPage from '../pages/AdminPage.jsx';
import ProductList from '../pages/Producto/ProductList.jsx';
import AdminProductos from '../pages/AdminProductos/AdminProductos.jsx';
import Editar from '../pages/AdminProductos/Editar.jsx'
import RegistrarProducto from '../pages/AdminProductos/RegistrarProducto.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> }, 
  { path: "/Login", element: <Logins /> }, 
  { path: "/Register", element: <Registros /> }, 
  { path: "/Contenido/:modo", element: <Contenido /> },
  { path: "/ProductList", element: <ProductList />},
  { path: "/product/:productId", element: <ProductDetail />},
  { path: "/categoria/:categoria", element: <Categoria />},
  { path : "/carrito", element : <CarritoPage /> },
  { path : "/compra", element: <CompraPage /> },
  { path : "/detalles", element: <DetallesPage /> },
  { path : "/admin", element: <AdminPage /> },
  { path: "/AdminProductos", element: <AdminProductos />},   
  { path: "/Editar/:id",  element: <Editar />},
  { path: "/RegistrarProducto",  element: <RegistrarProducto />}


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="app-container">
      <Header />
      <div className="main-content">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  </StrictMode>
);
