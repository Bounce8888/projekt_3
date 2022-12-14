const Button = ({ onClick }) => {
  return (
    <div className="button">
      <button onClick={onClick} className="btn" id="btn">
        Przelicz
      </button>
    </div>
  );
};

export default Button;
