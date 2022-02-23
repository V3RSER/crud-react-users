import React from "react";
import { useForm } from "react-hook-form";

/**
 * Componente tabla agregar usuario.
 * @param {*} props Función para agregar usuario
 */
const TablaAgregarUsuario = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    data.id = null;
    props.agregarUsuario(data);
    e.target.reset();
  };

  return (
    // Documentación de register sacada de: https://react-hook-form.com/api/useform
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="form-floating mb-3 mt-4" >
        <input
          type="text"
          name="nombre"
          class="form-control"
          placeholder="nombre"
          {...register("nombre", {
            required: { value: true, message: "Nombre requerido." },
          })}
        />
        <label>Nombre</label>
      </div>
      <div>{errors?.nombre?.message}</div>
      <div class="form-floating mb-3 mt-4">
        
        <input
          type="text"
          name="nombreUsuario"
          class="form-control"
          placeholder="nombre de usuario"
          {...register("nombreUsuario", {
            required: { value: true, message: "Nombre usuario requerido." },
          })}
        />
        <label>Nombre de usuario</label>
      </div>
      <div>{errors?.nombreUsuario?.message}</div>
      <button type="submit" className="btn btn-outline-success btn-lg px-5">
        Agregar
      </button>
    </form>
  );
};

export default TablaAgregarUsuario;
