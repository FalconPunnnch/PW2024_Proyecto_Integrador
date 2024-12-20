import React, { useState } from 'react';

const AdminPage = () => {
      const [nombreProducto, setNombreProducto] = useState('');
      const [id, setId] = useState('');
      const [descripcion, setDescripcion] = useState('');
      const [precio, setPrecio] = useState('0.00');
      const [file, setFile] = useState(null);

      const handleFileChange = (e) => {
            setFile(e.target.files[0]);
      };

      const handleButtonClick = (action) => {
            alert(`Botón ${action} presionado`);
      };

      return (
            <>
                  <h1>Administrar Productos</h1>
                  <section className="container mt-4">

                        <div className="row align-items-start mb-4">
                              {['Buscar', 'Añadir', 'Quitar', 'Modificar'].map((action) => (
                                    <button
                                          key={action}
                                          className="btn btn-primary col-1 p-2 mx-2"
                                          onClick={() => handleButtonClick(action)}
                                    >
                                          {action}
                                    </button>
                              ))}
                        </div>


                        <div className="row align-items-start mb-4">
                              <div className="col-8">
                                    <div className="input-group mb-3">
                                          <span className="input-group-text">Nombre del producto</span>
                                          <input
                                                type="text"
                                                className="form-control"
                                                value={nombreProducto}
                                                onChange={(e) => setNombreProducto(e.target.value)}
                                                aria-label="Nombre del producto"
                                          />
                                    </div>
                              </div>
                              <div className="col-2">
                                    <div className="input-group mb-3">
                                          <span className="input-group-text">ID</span>
                                          <input
                                                type="text"
                                                className="form-control"
                                                value={id}
                                                onChange={(e) => setId(e.target.value)}
                                                aria-label="ID del producto"
                                          />
                                    </div>
                              </div>
                        </div>

                        <div className="row align-items-start mb-4">
                              <div className="col-8">
                                    <div className="input-group">
                                          <span className="input-group-text">Descripción</span>
                                          <textarea
                                                className="form-control"
                                                value={descripcion}
                                                onChange={(e) => setDescripcion(e.target.value)}
                                                aria-label="Descripción"
                                          />
                                    </div>
                              </div>
                        </div>

                        <div className="row align-items-start mb-4">
                              <div className="col-8">
                                    <div className="input-group mb-3">
                                          <span className="input-group-text">Precio</span>
                                          <input
                                                type="text"
                                                className="form-control"
                                                value={precio}
                                                onChange={(e) => setPrecio(e.target.value)}
                                                aria-label="Precio del producto"
                                          />
                                    </div>
                              </div>
                        </div>

                        <div className="row align-items-start mb-4">
                              <div className="col-8">
                                    <div className="input-group mb-3">
                                          <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                                          <input
                                                type="file"
                                                className="form-control"
                                                id="inputGroupFile01"
                                                onChange={handleFileChange}
                                          />
                                    </div>
                              </div>
                        </div>
                  </section>
            </>

            
      );
};

export default AdminPage
