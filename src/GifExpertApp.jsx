/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./GifExpertApp.css";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  /*   const handleAdd = () => {
    setCategories((cats) => [...cats, "HunterXHunter"]);
  }; */

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {categories.map((category, idx) => (
          <li key={idx + category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
