const Input = ({ onInputChange }) => {
  function blockNotNumber(event) {
    if (
      event.keyCode === 69 ||
      event.keyCode === 189 ||
      event.keyCode === 187
    ) {
      event.preventDefault();
    }
  }
  return (
    <div className="input">
      <input
        type="number"
        className="inputVal"
        placeholder="Wpisz wartość"
        min="0"
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={blockNotNumber}
      />
    </div>
  );
};
export default Input;
