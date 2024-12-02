import './Footer.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
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
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kingtana.pe. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
