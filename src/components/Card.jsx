function Card({ headerText, children, id = null }) {
  const className = `card mb-4 ${id ? "collapse" : ""}`;

  return (
    <div className={className} {...(id ? { id } : {})}>
      <div className="card-header">{headerText}</div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;