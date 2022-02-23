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
      <div class="form-floating mb-3 mt-4">
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
      <button type="submit" className="btn btn-lg btn-outline-primary px-5">
        Editar
      </button>
    </form>
  );
};

export default TablaEditarUsuario;
