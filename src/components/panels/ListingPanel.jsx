import React, { memo } from "react";
import ListPanel from "./ListPanel";
import SearchBar from "./SearchBar";

const ListingPanel = ({ movies }) => {
  return (
    <div className="bg-black overflow-x-hidden content-container">
      <SearchBar />
      <ListPanel />
    </div>
  );
};

export default memo(ListingPanel);
