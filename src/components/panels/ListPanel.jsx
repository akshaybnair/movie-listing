import React, { useRef, memo } from "react";
import {
  List,
  AutoSizer,
  InfiniteLoader,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { useSelector } from "react-redux";
import ItemRow from "./ItemRow";
import useLoadMovies from "../hooks/useLoadMovies";

const COUNT_PER_ROW = 3;

const generateIndexesForRow = (rowIndex, maxItemsPerRow, itemsAmount) => {
  const result = [];
  const startIndex = rowIndex * maxItemsPerRow;

  for (
    let i = startIndex;
    i < Math.min(startIndex + maxItemsPerRow, itemsAmount);
    i++
  ) {
    result.push(i);
  }

  return result;
};

const getRowsAmount = (itemsAmount, hasMore, searchMode) => {
  if (searchMode) {
    //do not load next page on search mode
    return Math.ceil(itemsAmount / COUNT_PER_ROW);
  }
  return Math.ceil(itemsAmount / COUNT_PER_ROW) + (hasMore ? 1 : 0);
};

const cellMeasurerCache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 300,
  minWidth: 300,
});

const ListPanel = () => {
  const infiniteLoaderRef = useRef();

  const loadMovies = useLoadMovies();

  const {
    nextPageAvailable,
    filteredMovies: movies,
    currentPage: currentPageNumber,
    isLoading: isNextPageLoading,
    searchMode,
  } = useSelector((state) => state);

  const rowCount = getRowsAmount(movies.length, nextPageAvailable, searchMode);
  const rowRenderer = ({ index, key, style, parent }) => {
    const moviesIndices = generateIndexesForRow(
      index,
      COUNT_PER_ROW,
      movies.length
    );

    return (
      <CellMeasurer
        key={key}
        cache={cellMeasurerCache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        {({ registerChild, measure }) => (
          <ItemRow
            measure={measure}
            ref={registerChild}
            key={key}
            movies={movies}
            indices={moviesIndices}
            style={style}
          />
        )}
      </CellMeasurer>
    );
  };

  return (
    <div className="mx-auto pb-10">
      <InfiniteLoader
        ref={infiniteLoaderRef}
        isRowLoaded={({ index }) => {
          const allItemsLoaded =
            generateIndexesForRow(index, COUNT_PER_ROW, movies.length).length >
            0;

          const isRowLoaded = !nextPageAvailable || allItemsLoaded;
          return isRowLoaded;
        }}
        loadMoreRows={({ startIndex, stopIndex }) => {
          if (!isNextPageLoading && nextPageAvailable && !searchMode) {
            loadMovies(currentPageNumber + 1);
          }
        }}
        rowCount={rowCount}
      >
        {({ onRowsRendered, registerChild }) => (
          <div className="list-panel">
            <AutoSizer>
              {({ width, height }) => (
                <List
                  ref={registerChild}
                  onRowsRendered={onRowsRendered}
                  width={width}
                  height={height}
                  rowCount={rowCount}
                  rowRenderer={rowRenderer}
                  deferredMeasurementCache={cellMeasurerCache}
                  rowHeight={cellMeasurerCache.rowHeight}
                  overscanRowCount={10}
                  noRowsRenderer={() => {
                    return (
                      <div className="text-white no-records">
                        No movies found
                      </div>
                    );
                  }}
                />
              )}
            </AutoSizer>
          </div>
        )}
      </InfiniteLoader>
    </div>
  );
};

export default memo(ListPanel);
