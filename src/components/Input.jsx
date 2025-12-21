import { useFormContext } from "react-hook-form";

function Input({ bootstrap = null, type, name, id = null, children = null, defaultValue = null }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="d-flex flex-column">
      { id && children && (<label className="form-label" htmlFor={id}>
        {children}
      </label>)}

      <input className={bootstrap} type={type} id={id} defaultValue={defaultValue} {...register(name)} />

      {errors[name] && <p className="text-danger">{errors[name].message}</p>}
    </div>
  );
}

export default Input;
