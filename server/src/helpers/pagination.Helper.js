const pagination = (query, total) => {
  const page = parseInt(query?.page) || 1;
  const limit = parseInt(query?.limit)
    ? parseInt(query?.limit) > 0
      ? parseInt(query?.limit)
      : total
    : 10;

  return {
    nextPage: page * limit >= total ? null : page + 1,
    limit: limit,
    total: parseInt(total),
    skip: (page - 1) * limit,
  };
};

module.exports = pagination;
