import { useFormContext } from "react-hook-form";

function Input({ bootstrap = null, type, name, id, children }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {children}
      </label>

      <input className={bootstrap} type={type} id={id} {...register(name)} />

      {errors[name] && <p className="text-danger">{errors[name].message}</p>}
    </>
  );
}

export default Input;
