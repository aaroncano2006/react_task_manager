import { useFormContext } from "react-hook-form";

function Checkbox({bootstrap = null, name, id, children, defaultValue = null}) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className="d-flex">
            <input className={bootstrap} type="checkbox" name={name} id={id} defaultValue={defaultValue}/>

            <label className="ms-2" htmlFor={id}>
                {children}
            </label>
        </div>
        
    );
}

export default Checkbox;