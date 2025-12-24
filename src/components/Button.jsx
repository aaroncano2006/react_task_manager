function Button({bootstrap = null, type, children, target = null, action = null}) {
    return(
        <button className={bootstrap} type={type}>{children}</button>
    );
}

export default Button;