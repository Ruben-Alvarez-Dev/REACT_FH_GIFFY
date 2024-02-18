import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ categories, setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    !inputValue
      ? ""
      : categories.includes(inputValue)
      ? ""
      : setCategories([...categories, inputValue]);
  };

  return (
    <>
      <h2>AddCategory</h2>
      <hr />
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Write here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAdd}>Agregar</button>
      </form>
    </>
  );
};

AddCategory.propTypes = {
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
};
