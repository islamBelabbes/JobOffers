export const setQueryStringParameter = (name, value) => {
  const params = new URLSearchParams(window.location.search);
  if (!value) {
    params.delete(name);
  } else {
    params.set(name, value);
  }

  let paramEntry = params.size ? "?" : "";
  window.history.replaceState(
    {},
    "",
    decodeURIComponent(`${window.location.pathname}${paramEntry}${params}`)
  );
};
