import { useFormContext } from "react-hook-form";

function Select({bootstrap = null, name, id, children, textLabel}) {

    const {
        register,
        formState: {errors}
    } = useFormContext();

    return (
        <div className="d-flex flex-column">
            <label className="form-label" htmlFor={name}>{textLabel}</label>

            <select className={bootstrap} name={name} id={id} {...register(name)}>
                {children}
            </select>
            {errors[name] && <p className="text-danger">{errors[name].message}</p>}
        </div>
    );
}

export default Select;