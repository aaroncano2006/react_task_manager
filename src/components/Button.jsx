function Button({bootstrap = null, type, children, target = null, action = null, dtoggle = null, dtarget = null, aexpanded = null, acontrols = null}) {
    return(
        <button className={bootstrap} type={type} onClick={action ? () => action(target) : undefined} data-bs-toggle={dtoggle} data-bs-target={dtarget} aria-expanded={aexpanded} aria-controls={acontrols}>
            {children}
        </button>
    );
}

export default Button;