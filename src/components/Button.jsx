function Button({bootstrap = null, type, children = null, action = null, dtoggle = null, dtarget = null, aexpanded = null, acontrols = null}) {
    return(
        <button className={bootstrap} type={type} onClick={action || undefined} data-bs-toggle={dtoggle} data-bs-target={dtarget} aria-expanded={aexpanded} aria-controls={acontrols}>
            {children}
        </button>
    );
}

export default Button;