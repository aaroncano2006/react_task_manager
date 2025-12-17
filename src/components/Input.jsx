import { useFormContext } from "react-hook-form";

function Input({ bootstrap = null, type, name, id, children, defaultValue = null }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="d-flex flex-column">
      <label className="form-label" htmlFor={id}>
        {children}
      </label>

      <input className={bootstrap} type={type} id={id} defaultValue={defaultValue} {...register(name)} />

      {errors[name] && <p className="text-danger">{errors[name].message}</p>}
    </div>
  );
}

export default Input;
