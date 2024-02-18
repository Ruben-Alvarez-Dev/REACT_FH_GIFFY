import React, { useState, useEffect } from "react";

const api_url =
  "https://api.giphy.com/v1/gifs/search?api_key=bnH8Bdwd1m3qsbVOSYu9oUWmmhm2CHnj&q=gandalf&limit=10&offset=0&rating=g&lang=es&bundle=low_bandwidth";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const response = await fetch(api_url);
    const { data } = await response.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
    setImages(gifs);
  };

  /* getGifs(); */

  return (
    <>
      <h3> {category}</h3>
      <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};
