import { useForm } from "react-hook-form"; // Validación sin re renders. (npm install hook-form)
import { zodResolver } from "@hookform/resolvers/zod"; // Permite utilizar esquemas zod para validar formularios. (npm install @hookform/resolvers zod)
import { taskSchema } from "../schemas/task";
import Button from "Button";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data) => {
    // Afegir tasca a la llista
    const llista = document.getElementById("llistaTasques");
    const li = document.createElement("li");
    li.textContent = `${data.nom} (${data.categoria}) - ${data.data}`;
    llista.appendChild(li);

    reset();
  };

  return (
    <>
      {/* <div className="mt-3 ms-5 align-items-center">
        <form id="form-tasca" onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-4">
            <div className="col-1">
              <label htmlFor="nom-tasca">Nom de la tasca</label>
              <input id="nom-tasca" type="text" {...register("nom")} />
              {errors.nom && (
                <p className="text-danger">{errors.nom.message}</p>
              )}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-1">
              <label htmlFor="categoria-tasca">Categoria</label>
              <select id="categoria-tasca" {...register("categoria")}>
                <option value="">-- Tria categoria --</option>
                <option value="casa">Casa</option>
                <option value="feina">Feina</option>
                <option value="estudis">Estudis</option>
              </select>
              {errors.categoria && (
                <p className="text-danger">{errors.categoria.message}</p>
              )}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-1">
              <label htmlFor="data-tasca">Data</label>
              <input id="data-tasca" type="date" {...register("data")} />
              {errors.data && (
                <p className="text-danger">{errors.data.message}</p>
              )}
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Afegir tasca
          </button>
        </form>

        <ul className="mt-4" id="llistaTasques" />
      </div> */}
    </>
  );
}

export default Form;
