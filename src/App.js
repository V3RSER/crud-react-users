import React, { useState } from "react";
import TablaUsuario from "./compontents/TablaUsuario";
import TablaAgregarUsuario from "./compontents/TablaAgregarUsuario";
import TablaEditarUsuario from "./compontents/TablaEditarUsuario";
import { v4 as randomID } from "uuid";

function App() {
  const datosUsuarios = [
    { id: randomID(), nombre: "Luis", nombreUsuario: "V3RSER" },
    { id: randomID(), nombre: "Mary", nombreUsuario: "MaryA_N24" },
    { id: randomID(), nombre: "Cristian", nombreUsuario: "CristianCT" },
  ];

  // State de usuarios
  const [usuarios, setUsuarios] = useState(datosUsuarios);

  /**
   * Agrega un usuario recibido como parámetro a la lista.
   * @param {*} usuario Entidad usuario con estructura {id, nombre, nombreUsuario}
   */
  const agregarUsuario = (usuario) => {
    usuario.id = randomID();
    setUsuarios([...usuarios, usuario]);
  };

  // State de editar usuario
  const [editando, setEditando] = useState(false);
  const initialFormState = { id: null, nombre: "", nombreUsuario: "" };
  const [usuarioActual, setUsuarioActual] = useState(initialFormState);

  /**
   * Establece un usuario recibido como parámetro como usuarioActual y editando como verdadero.
   * @param {*} usuario Entidad usuario con estructura {id, nombre, nombreUsuario}
   */
  const botonEditar = (usuario) => {
    setEditando(true);
    setUsuarioActual({
      id: usuario.id,
      nombre: usuario.nombre,
      nombreUsuario: usuario.nombreUsuario,
    });
  };

  /**
   * Actualiza un usuario recibido como parámetro y establece editando como falso.
   * @param {*} usuario Entidad usuario con estructura {id, nombre, nombreUsuario}
   */
  const actualizarUsuario = (id, actualizarUsuario) => {
    setEditando(false);
    setUsuarios(
      usuarios.map((usuario) =>
        usuario.id === id ? actualizarUsuario : usuario
      )
    );
  };

  /**
   * Elimina un usuario que coincida con una id pasada como parámetro.
   * @param {*} id Id de usuario.
   */
  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center my-5">Aplicación CRUD</h2>
      <div className="row">
        <div className="col-md-6">
          {editando ? (
            <div>
              <h3>Editar usuario</h3>
              <TablaEditarUsuario
                setEditando={setEditando}
                usuarioActual={usuarioActual}
                actualizarUsuario={actualizarUsuario}
              />
            </div>
          ) : (
            <div>
              <h3>Agregar usuario</h3>
              <TablaAgregarUsuario agregarUsuario={agregarUsuario} />
            </div>
          )}
        </div>
        <div className="col-md-6">
          <h3>Visualizar usuarios</h3>
          <TablaUsuario
            usuarios={usuarios}
            botonEditar={botonEditar}
            eliminarUsuario={eliminarUsuario}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
