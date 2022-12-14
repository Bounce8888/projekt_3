const Select = ({ onSelectChange }) => {
  return (
    <select
      onChange={(e) => onSelectChange(e.target.value)}
      name="currency"
      id="currency"
      className="currencies"
    >
      <option value="">--wybierz walutę--</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CHF">CHF</option>
    </select>
  );
};
export default Select;
