export const deleteQueryParam = (queryName: string) => {
  const params = new URLSearchParams(window.location.search.slice(1));
  params.delete(queryName);

  window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
};
