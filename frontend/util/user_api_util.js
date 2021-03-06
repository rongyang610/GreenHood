export const patchUser = (id, buyingPower) => {
  return $.ajax({
    url: `/api/users/${id}`,
    method: "PATCH",
    data: {buyingPower},
  });
};

export const getUser = (id) => {
  return $.ajax({
    url: `/api/users/${id}`
  });
};