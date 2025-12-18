import { useFormContext } from "react-hook-form";

function RadioButton({ bootstrap = null, name, id, children, defaultValue }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="d-flex">
      
      <input className={bootstrap} type="radio" id={id} defaultValue={defaultValue} {...register(name)} />

      <label className="ms-2" htmlFor={id}>
        {children}
      </label>

      {errors[name] && <p className="text-danger">{errors[name].message}</p>}
    </div>
  );
}

export default RadioButton;