import React, { useState } from "react";
import AddCategory from "./AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);
  const [inputValue, setInputValue] = useState("");

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
      <h2>GifExpertApp</h2>
      <hr />
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="write here..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
      <AddCategory categories={categories} />
      <ol></ol>
    </>
  );
};

export default GifExpertApp;
