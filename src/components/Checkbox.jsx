import { useFormContext } from "react-hook-form";

function Checkbox({bootstrap = null, name, id, children, defaultChecked = false}) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="d-flex">
            <input className={bootstrap} type="checkbox" name={name} id={id} defaultChecked={defaultChecked} value="true" {...register(name)}/>

            <label className="ms-2 me-2" htmlFor={id}>
                {children}
            </label>

            {errors[name] && <p className="text-danger">{errors[name].message}</p>}
        </div>
        
    );
}

export default Checkbox;