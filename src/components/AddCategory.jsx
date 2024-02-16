import React from "react";

const AddCategory = ({ categories }) => {
  return (
    <>
      <h2>Categories</h2>
      <hr />
      <ol>
        {categories.map((category, idx) => (
          <li key={idx + category}>{category}</li>
        ))}
      </ol>
    </>
  );
};

export default AddCategory;
