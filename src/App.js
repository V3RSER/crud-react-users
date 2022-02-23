import React, { useState } from "react";
import TablaUsuario from "./compontents/TablaUsuario";
import { v4 as randomID } from "uuid";

function App() {
  const datosUsuarios = [
    { id: randomID(), name: "Luis", username: "V3RSER" },
    { id: randomID(), name: "Mary", username: "MaryA_N24" },
    { id: randomID(), name: "Mateo", username: "RuinedKnave323" },
  ];

  const [usuarios, setUsuarios] = useState(datosUsuarios);

  return (
    <div className="container-fluid">
      <h2 className="text-center my-5">Aplicación CRUD</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>Agregar usuario</h3>
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
