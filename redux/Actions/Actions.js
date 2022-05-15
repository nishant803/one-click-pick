const addItem = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
const addToWishlist = (product) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: product,
  };
};

const incCount = () => {
  return {
    type: "INCREASE_COUNT",
  };
};
const decCount = () => {
  return {
    type: "DECREASE_COUNT",
  };
};

const removeItem = (product) => {
  return {
    type: "REMOVE_ITEM",
    payload: product,
  };
};
export { addItem, incCount, removeItem, decCount, addToWishlist };
