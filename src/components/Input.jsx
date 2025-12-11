function Input({bootstrap = null, type, name, id, value = null}) {
    return (
        <input className={bootstrap} type={type} name={name} id={id} value={value}/>
    );
}

export default Input;