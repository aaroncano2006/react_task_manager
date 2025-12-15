function Link({bootstrap = null, children, href}) {
    return(
        <a href={href} className={bootstrap}>{children}</a>
    );
}

export default Link;