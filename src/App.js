import React, { useState } from "react";
import TablaUsuario from "./compontents/TablaUsuario";
import TablaAgregarUsuario from "./compontents/TablaAgregarUsuario";
import { v4 as randomID } from "uuid";

function App() {
  const datosUsuarios = [
    { id: randomID(), nombre: "Luis", nombreUsuario: "V3RSER" },
    { id: randomID(), nombre: "Mary", nombreUsuario: "MaryA_N24" },
    { id: randomID(), nombre: "Cristian", nombreUsuario: "CristianCT"}
  ];

  // State de usuarios
  const [usuarios, setUsuarios] = useState(datosUsuarios);

  /**
   * Agrega un usuario a la lista
   * @param {*} usuario Entidad usuario con estructura {id, nombre, nombreUsuario}
   */
  const agregarUsuario = (usuario) => {
    usuario.id = randomID();
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center my-5">Aplicación CRUD</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Agregar usuario</h3>
          <TablaAgregarUsuario agregarUsuario={agregarUsuario} />
        </div>
        <div className="col-md-6">
          <h3>Visualizar usuarios</h3>
          <TablaUsuario usuarios={usuarios} />
        </div>
      </div>
    </div>
  );
}

export default App;
