function Select({bootstrap = null, name, id, children}) {
    return (
        <select bootstrap={bootstrap} name={name} id={id}>
            {children}
        </select>
    );
}

export default Select;