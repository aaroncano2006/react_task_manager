function RadioGroup({children}) {
  return (
    <div role="radiogroup">
      <div id="radioGroup" className="d-flex flex-column-reverse">
        {children}
      </div>
    </div>
  );
}

export default RadioGroup;
