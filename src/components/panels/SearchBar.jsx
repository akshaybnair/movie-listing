import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeSearch, searchMovie } from "../../redux/actions";
const SearchBar = () => {
  const dispatch = useDispatch();
  const searchMode = useSelector((state) => state.searchMode);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    if (searchKey === "") {
      dispatch(removeSearch());
    }
  }, [searchKey, dispatch]);

  const onSubmit = (event) => {
    event.preventDefault();
    searchKey !== "" && dispatch(searchMovie(searchKey));
  };
  return (
    <div className="bg-black py-10 flex justify-start items-center header fixed h-10 search-bar w-full">
      {searchMode && searchKey !== "" && (
        <span
          className="mr-2 h-1 cursor-pointer icon flex-none"
          onClick={() => {
            setSearchKey("");
          }}
        >
          <img src="Back.png" alt="back arrow" />
        </span>
      )}
      <div className="">
        <form onSubmit={onSubmit}>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 h-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="query"
            value={searchKey}
            onChange={(e) => {
              setSearchKey(e.target.value);
            }}
          />
        </form>
      </div>
      <span className="cursor-pointer icon flex-none ml-2" onClick={onsubmit}>
        <img src="search.png" alt="seach button" />
      </span>
    </div>
  );
};

export default SearchBar;
