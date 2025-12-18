import { useFormContext } from "react-hook-form";

function Textarea ({bootstrap = null, name, id, cols = null, rows = null, children}) {

    const {
        register,
        formState: { errors }
    } = useFormContext();

    return (
        <div className="d-flex flex-column">
            <label className="form-label" htmlFor={id}>
                {children}
            </label>

            <textarea className={bootstrap} name={name} id={id} cols={cols} rows={rows}></textarea>
        </div>

    );
}

export default Textarea;