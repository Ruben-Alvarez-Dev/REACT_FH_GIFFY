export const getGifs = async (category) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=bnH8Bdwd1m3qsbVOSYu9oUWmmhm2CHnj&q=${encodeURI(
      category
    )}&limit=10&offset=0&rating=g&lang=es&bundle=low_bandwidth`
  );
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
