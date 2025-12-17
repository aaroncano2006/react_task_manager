import { useFormContext } from "react-hook-form";

function RadioButton({ bootstrap = null, name, id, children, defaultValue }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="d-flex">
      <label className="me-2" htmlFor={id}>
        {children}
      </label>

      <input className={bootstrap} type="radio" id={id} defaultValue={defaultValue} {...register(name)} />

      {errors[name] && <p className="text-danger">{errors[name].message}</p>}
    </div>
  );
}

export default RadioButton;