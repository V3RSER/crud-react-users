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
      <label>Nombre</label>
      <input
        type="text"
        name="nombre"
        {...register("nombre", {
          required: { value: true, message: "Nombre requerido." },
        })}
      />
      <div>{errors?.nombre?.message}</div>
      <label>Nombre de usuario</label>
      <input
        type="text"
        name="nombreUsuario"
        {...register("nombreUsuario", {
          required: { value: true, message: "Nombre usuario requerido." },
        })}
      />
      <div>{errors?.nombreUsuario?.message}</div>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TablaAgregarUsuario;
