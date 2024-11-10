import '../index.css'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-sections">
            <div className="footer-section">
              <h4>Sobre Nosotros</h4>
              <ul>
                <li><a href="/about">Nuestra Historia</a></li>
                <li><a href="/careers">Carreras</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Ayuda y Soporte</h4>
              <ul>
                <li><a href="/faq">Preguntas Frecuentes</a></li>
                <li><a href="/support">Centro de Soporte</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Conéctate</h4>
              <div className="social-icons">
                <a href="https://facebook.com" aria-label="Facebook">F</a>
                <a href="https://instagram.com" aria-label="Instagram">I</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Wong.pe. Todos los derechos reservados.</p>
          </div>
        </footer>
      )
}

export default Footer