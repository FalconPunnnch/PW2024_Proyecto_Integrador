import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './page.module.css';
import Input from '../Registro/input1';
import { BASE_URL } from "../../../Api/constants.js";

const Logins = () => {
  const [state, setState] = useState({ usuario: '', contrasena: '', termsAccepted: false });
  const navigate = useNavigate();

  const mngmtChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState({
      ...state,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validarLogeo = async (e) => {
    e.preventDefault();

    if (!state.termsAccepted) {
      alert('Debe aceptar los términos y condiciones antes de continuar.');
      return;
    }

    const { usuario, contrasena } = state;

    const isEmail = usuario.includes('@');
    const loginData = {
      password: contrasena,
      ...(isEmail ? { email: usuario } : { username: usuario })
    };

    try {
      const response = await axios.post(`${BASE_URL}/user/login`, loginData);
      const { data } = response;

      if (data) {
        localStorage.setItem('usuario', JSON.stringify(data));

        if (data.role === 'admin' && data.email.endsWith('@ulima.edu.pe')) {
          navigate('/AdminProductos'); 
        } else if (data.role === 'user' && data.email.endsWith('@gmail.com')) {
          navigate('/Contenido/user'); 
        } else {
          alert('Rol desconocido. No se puede acceder.');
        }

        setTimeout(() => {
          window.location.reload();
        }, 50);
      } else {
        alert('No coincide la contraseña o usuario o No tiene cuenta');
      }
    } catch (error) {
      console.error(error);
      alert('Error al intentar iniciar sesión. Intente nuevamente.');
    }
  };

  return (
    <div className={styles.contenedor}>
      <div className={styles.contenido}>
        <span className={styles.titulo1}>Iniciar Sesión</span>
        <form className={styles.registro} onSubmit={validarLogeo}>
          <Input
            inputType="text"
            spanText="Usuario o Correo"
            name="usuario"
            value={state.usuario}
            onChange={mngmtChange}
          />
          <div className={styles.label2}>
            <Input
              inputType="password"
              spanText="Contraseña"
              name="contrasena"
              value={state.contrasena}
              onChange={mngmtChange}
            />
          </div>
          <div className={styles.terms}>
            <input
              type="checkbox"
              id="terms"
              name="termsAccepted"
              checked={state.termsAccepted}
              onChange={mngmtChange}
            />
            <label htmlFor="terms">
              He leído y acepto los{' '}
              <Link to="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">
                Términos y Condiciones
              </Link>
              , así como la{' '}
              <Link to="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
                Política de Privacidad y Seguridad
              </Link>
              {' '}y la{' '}
              <Link to="/politica-de-cookies" target="_blank" rel="noopener noreferrer">
                Política de Cookies
              </Link>.
            </label>
          </div>
          <div className={styles.botones}>
            <Link to="/register">
              <button className={styles.button1}>
                Registro usuario
              </button>
            </Link>
            <button className={styles.button2} type="submit">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logins;
