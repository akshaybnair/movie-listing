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
  return (
    <div className="flex justify-start align-middle header fixed h-10">
      {searchMode && searchKey !== "" && (
        <span
          className="mr-2 h-1 cursor-pointer"
          onClick={() => {
            setSearchKey("");
          }}
        >
          <img src="Back.png" alt="back arrow" />
        </span>
      )}
      <div className="flex flex-1 m-0">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 h-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="query"
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
        <span
          className="ml-2 cursor-pointer"
          onClick={() => {
            searchKey !== "" && dispatch(searchMovie(searchKey));
          }}
        >
          <img src="search.png" alt="seach button" />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
