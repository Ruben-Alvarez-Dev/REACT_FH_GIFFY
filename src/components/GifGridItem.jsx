export const GifGridItem = ({ id, title, url }) => {
  console.log(id, title, url);

  return (
    <div id={id} className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
