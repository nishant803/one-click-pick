const initialState = {
  list: [],
  counter: 0,
  wishList: [],
};

const CartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "ADD_TO_CART": {
      const { title, image, rating, price } = actions.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: new Date().getTime().toString(),
            title: title,
            image: image,
            rating: rating,
            price: price,
          },
        ],
      };
    }
    case "ADD_TO_WISHLIST": {
      const { title, image, rating, price } = actions.payload;

      return {
        ...state,
        wishList: [
          ...state.wishList,
          {
            id: new Date().getTime().toString(),
            title: title,
            image: image,
            rating: rating,
            price: price,
          },
        ],
      };
    }
    case "INCREASE_COUNT": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case "DECREASE_COUNT": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case "REMOVE_ITEM": {
      const updatedList = state.list.filter(
        (item) => item.id != actions.payload.id
      );

      return {
        ...state,
        list: updatedList,
      };
    }
    default:
      return state;
  }
};
export default CartReducer;
