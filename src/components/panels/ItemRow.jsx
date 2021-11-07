import React, { forwardRef } from "react";

// background-image: url("/placeholder_for_missing_posters.png");

const ItemRow = ({ movies, indices, style, measure }, ref) => {
  return (
    <div
      ref={ref}
      style={style}
      className="flex flex-1 flex-row justify-around  item-row"
    >
      {indices.map((index) => {
        const movie = movies[index];
        return (
          <ListItem
            key={`${movie.name}-${index}`}
            movie={movie}
            measure={measure}
          />
        );
      })}
    </div>
  );
};

const ListItem = ({ movie, measure }) => {
  return (
    <div className=" flex flex-col p-1 py-2 item h-full mb-3 item">
      <div>
          <img
            className="image"
            src={movie["poster-image"]}
            alt={movie.name}
            // onLoad={measure}
          />
      </div>
      <div>
        <span className="text-white mt-2 movie-description">{movie.name}</span>
      </div>
    </div>
  );
};

export default forwardRef(ItemRow);
