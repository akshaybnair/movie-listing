const getPageUrl = (pageNum) => {
  return `/CONTENTLISTINGPAGE-PAGE${pageNum}.json`;
};
export const fetchPage = async (pageNumber) => {
  const data = await fetch(getPageUrl(pageNumber));
  const jsonData = await data.json();
  return jsonData;
};
