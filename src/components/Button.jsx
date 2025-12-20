function Button({bootstrap = null, type, children}) {
    return(
        <button className={bootstrap} type={type}>{children}</button>
    );
}

export default Button;