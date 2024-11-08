import '/index.css'

const Header = () => {
    return (
        <header className="header">
          <div className="logo">
            <a href="/">
              <img src="/path-to-logo.png" alt="Logo" />
            </a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Buscar productos..." />
            <button>🔍</button>
          </div>
          <nav className="nav-bar">
            <a href="/ofertas">Ofertas</a>
            <a href="/categorias">Categorías</a>
            <a href="/supermercado">Supermercado</a>
          </nav>
          <div className="user-icons">
            <a href="/perfil">👤</a>
            <a href="/carrito">🛒</a>
          </div>
        </header>
    )
}

export default Header