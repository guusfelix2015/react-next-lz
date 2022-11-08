import "./styles.css";

const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      placeholder="Type your search"
      type="seach"
      onChange={handleChange}
      value={searchValue}
    />
  );
};

export default TextInput;
