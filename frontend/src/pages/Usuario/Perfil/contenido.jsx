import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './perfiladmin.module.css';
import { BASE_URL } from '../../../Api/constants';

const Contenido = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('DATOS PERSONALES');
  const [datosPersonales, setDatosPersonales] = useState({
    id: '',
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    nroDocumento: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const usuarioJSON = localStorage.getItem('usuario');
    const usuario = JSON.parse(usuarioJSON);
    if (usuario) {
      setDatosPersonales(usuario);
    }
  }, []);

  const handleDatosPersonalesChange = (e) => {
    const { name, value } = e.target;
    setDatosPersonales({ ...datosPersonales, [name]: value });
  };

  const handleGuardarCambios = async () => {
    const camposVacios = Object.values(datosPersonales).some((value) => value.trim() === '');

    if (camposVacios) {
      alert('Por favor, completa todos los campos antes de guardar los cambios.');
    } else {
      try {
        const response = await axios.put(`${BASE_URL}/user/${datosPersonales.id}`, {
          nombres: datosPersonales.nombres,
          apellidos: datosPersonales.apellidos,
          tipoDocumento: datosPersonales.tipoDocumento,
          nroDocumento: datosPersonales.nroDocumento,
          email: datosPersonales.email,
          password: datosPersonales.password,
        });

        localStorage.setItem('usuario', JSON.stringify(response.data));

        alert('Datos actualizados correctamente.');
      } catch (error) {
        console.error('Error al actualizar datos:', error);
        alert('Error al actualizar datos. Intente nuevamente.');
      }
    }
  };

  return (
    <article className={styles.articulo1}>
      <div className={styles.recuadro1}>
        <div className={styles.tabs}>
          <span
            className={`${styles.tab} ${opcionSeleccionada === 'DATOS PERSONALES' ? styles.tabActivo : ''}`}
            onClick={() => setOpcionSeleccionada('DATOS PERSONALES')}
          >
            DATOS PERSONALES
          </span>
          <span
            className={`${styles.tab} ${opcionSeleccionada === 'CUENTA' ? styles.tabActivo : ''}`}
            onClick={() => setOpcionSeleccionada('CUENTA')}
          >
            CUENTA
          </span>
        </div>

        <div className={styles.cuadro2}>
          <form className={styles.formulario}>
            {opcionSeleccionada === 'DATOS PERSONALES' && (
              <>
                <input
                  className={styles.input}
                  placeholder="Nombres"
                  type="text"
                  name="nombres"
                  required
                  value={datosPersonales.nombres || ''}
                  onChange={handleDatosPersonalesChange}
                />
                <input
                  className={styles.input}
                  placeholder="Apellidos"
                  type="text"
                  name="apellidos"
                  required
                  value={datosPersonales.apellidos || ''}
                  onChange={handleDatosPersonalesChange}
                />
              </>
            )}
            {opcionSeleccionada === 'CUENTA' && (
              <>
                <input
                  className={styles.input}
                  placeholder="Correo"
                  type="email"
                  name="email"
                  required
                  value={datosPersonales.email || ''}
                  onChange={handleDatosPersonalesChange}
                />
                <input
                  className={styles.input}
                  placeholder="Contraseña"
                  type="password"
                  name="password"
                  required
                  value={datosPersonales.password || ''}
                  onChange={handleDatosPersonalesChange}
                />
              </>
            )}
            <button type="button" className={styles.Button} onClick={handleGuardarCambios}>
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Contenido;
