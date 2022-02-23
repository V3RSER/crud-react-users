import React from "react";
import { useForm } from "react-hook-form";

/**
 * Componente tabla agregar usuario.
 * @param {*} props Función para agregar usuario
 */
const TablaEditarUsuario = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.usuarioActual,
  });

  const onSubmit = (data, e) => {
    data.id = props.usuarioActual.id;
    props.actualizarUsuario(props.usuarioActual.id, data);
    e.target.reset();
  };

  setValue("nombre", props.usuarioActual.nombre);
  setValue("nombreUsuario", props.usuarioActual.nombreUsuario);

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
      <button type="submit">Editar</button>
    </form>
  );
};

export default TablaEditarUsuario;
