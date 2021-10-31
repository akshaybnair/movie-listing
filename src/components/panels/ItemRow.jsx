import React from "react";

const ItemRow = ({ movies, indices, style }) => {
  return (
    <div
      style={style}
      className="flex flex-1 flex-row justify-around mx-3"
    >
      {indices.map((index) => {
        const movie = movies[index];
        return <ListItem key={`${movie.name}-${index}`} movie={movie} />;
      })}
    </div>
  );
};

const ListItem = ({ movie }) => {
  return (
    <div className="w-1/3 flex flex-col p-1 py-2 item h-full mb-3">
      <div>
        <img src={movie["poster-image"]} alt={movie.name} />
      </div>
      <div>
        <span className="text-white mt-2">{movie.name}</span>
      </div>
    </div>
  );
};

export default ItemRow;
