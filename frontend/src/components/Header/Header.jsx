import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faSearch, faUser, faUserPlus, faBox, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [userRole, setUserRole] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      window.location.href = `/search?query=${searchTerm}`;
    }
  };
  
  useEffect(() => {
    const storedCount = localStorage.getItem('cartCount');
    setCartCount(storedCount ? parseInt(storedCount) : 0);

    const handleStorageChange = () => {
      const updatedCount = localStorage.getItem('cartCount');
      setCartCount(updatedCount ? parseInt(updatedCount) : 0);

      const usuario = JSON.parse(localStorage.getItem('usuario'));
      if (usuario) {
        setUserRole(usuario.role);
        setIsLoggedIn(true);
      } else {
        setUserRole(null);
        setIsLoggedIn(false);
      }
    };

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
      setUserRole(usuario.role);
      setIsLoggedIn(true);
    }

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    setIsLoggedIn(false);
    setUserRole(null);
    window.location.href = '/login'; 
  };

  return (
    <header>
      <div className="top-bar">
        <div className="logo">
          <a href="/">
            <img
              src="https://i1.sndcdn.com/avatars-000345690437-n939v3-t1080x1080.jpg"
              alt="Kingtana"
            />
          </a>
        </div>

        <div className="search-and-nav">
          <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => {
              if (e.key === "Enter") {
              handleSearch();
              }
            }} 
          />

          <button className="search-button" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
          </button>
          </div>
          <nav className="main-nav">
            <ul>
              <li className="dropdown">
                <a href="#">Categorías</a>
                <div className="desplegable-categorias">
                  <div className="category-group">
                    <a href="/Juguetes">Juguetería</a>
                    <div className="subcategory-dropdown">
                      <a href="/categoria/Juguetes">Juguetes</a>
                      <a href="/categoria/Coleccionables">Coleccionables</a>
                      <a href="/categoria/Juegos de Mesa">Juegos de Mesa</a>
                      <a href="/categoria/Juegos de Exterior">Juegos de Exterior</a>
                      <a href="/categoria/Juguetes">Juguetes</a>
                      <a href="/categoria/Figuras de Acción">Figuras de Acción</a>
                    </div>
                  </div>
                  <div className="category-group">
                    <a href="#">Tecnología</a>
                    <div className="subcategory-dropdown">
                      <a href="/categoria/Cámaras">Cámaras</a>
                      <a href="/categoria/Cómputo">Cómputo</a>
                      <a href="/categoria/Telefonía">Telefonía</a>
                      <a href="/categoria/Televisores">Televisores</a>
                      <a href="/categoria/Zona Gamer">Zona Gamer</a>
                      <a href="/categoria/Audio">Audio</a>
                    </div>
                  </div>
                  <div className="category-group">
                    <a href="#">Deportes y Aire Libre</a>
                    <div className="subcategory-dropdown">
                      <a href="/categoria/Aire Libre">Aire Libre</a>
                      <a href="/categoria/Bicicletas">Bicicletas</a>
                      <a href="/categoria/Camping">Camping</a>
                      <a href="/categoria/Máquinas de Ejercicio">Máquinas de Ejercicio</a>
                      <a href="/categoria/Terrazas y Parrillas">Terrazas y Parrillas</a>
                    </div>
                  </div>
                  <div className="category-group">
                    <a href="#">Confitería</a>
                    <div className="subcategory-dropdown">
                      <a href="/categoria/Chocolates">Chocolates</a>
                      <a href="/categoria/Dulces y Golosinas">Dulces y Golosinas</a>
                      <a href="/categoria/Tortas">Tortas</a>
                      <a href="/categoria/Repostería Fina">Repostería Fina</a>
                      <a href="/categoria/Panes y Bizcochos">Panes y Bizcochos</a>
                    </div>
                  </div>
                </div>
              </li>
              <li><a href="#" className="rojo">Ofertas</a></li>
            </ul>
          </nav>
        </div>

        <div className="user-options">
          {isLoggedIn ? (
            userRole === 'user' ? (
              <>
             
                <a href="/Carrito" className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span>Carrito</span>
                  <span className="cart-count">{cartCount}</span>
                </a>

                <a href="/Contenido/user" className="user-icon">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Perfil</span>
                </a>
                <button onClick={handleLogout} className="logout-button">
                  Cerrar Sesión
                </button>
          

              </>
            ) : userRole === 'admin' ? (
              <>
                <a href="/AdminProductos" className="user-icon">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Cuenta (Admin)</span>
                </a>
                <button onClick={handleLogout} className="logout-button">
                  Cerrar Sesión
                </button>
              </>
            ) : null
          ) : (
            <>
              <a href="/Login" className="user-icon">
                <FontAwesomeIcon icon={faUser} />
                <span>Inicia Sesión</span>
              </a>
              <a href="/Register" className="register-icon">
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Registrarse</span>
              </a>
              <a href="/Carrito" className="cart-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>Carrito</span>
                <span className="cart-count">{cartCount}</span>
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
