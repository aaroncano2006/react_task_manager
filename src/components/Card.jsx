function Card({ headerText, children }) {
  return (
    <div className="card mb-4">
      <div className="card-header">{headerText}</div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;
