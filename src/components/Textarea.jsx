function Textarea ({bootstrap = null, name, id, cols = null, rows = null}) {
    return (
        <textarea class={bootstrap} name={name} id={id} cols={cols} rows={rows}></textarea>
    );
}

export default Textarea;