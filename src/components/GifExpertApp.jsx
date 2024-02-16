import { useState } from "react";

export const GifExpertApp = () => {
  /* const categories = ["One Punch", "Samurai X", "Dragon Ball"]; */
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAdd = () => {
    /* setCategories([...categories, "HunterXHunter"]); */
    setCategories((c) => [...c, "HunterXHunter"]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Add Category</button>

      <ol>
        {categories.map((cat) => {
          return <li key={cat}>{cat}</li>;
        })}
      </ol>
    </>
  );
};
