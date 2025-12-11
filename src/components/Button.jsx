function Button({bootstrap = null, children}) {
    return(
        <button className={bootstrap}>{children}</button>
    );
}

export default Button;