export const calculateTotalPages = (totalItems, limit) => {
  return Math.ceil(totalItems / limit);
};
