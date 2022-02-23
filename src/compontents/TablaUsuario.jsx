import React from "react";

/**
 * Componente tabla de usuario.
 */
const TablaUsuario = (props) => {
  return (
    <table className="table table-bordered mt-4">
      <thead>
        <tr>
          <th className="text-center">Nombre</th>
          <th className="text-center">Usuario</th>
          <th className="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.usuarios.length > 0 ? (
          props.usuarios.map((user) => (
            <tr key={user.id}>
              <td className="align-middle">{user.name}</td>
              <td className="align-middle">{user.username}</td>
              <td className="text-center">
                <button type="button" className="btn btn-primary m-1">
                  Editar
                </button>
                <button type="button" className="btn btn-danger m-1">
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr className="table-danger">
            <td className="text-center" colSpan={3}>
              No hay usuarios
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TablaUsuario;
