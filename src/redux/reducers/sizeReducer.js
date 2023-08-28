// src/redux/reducers/sizeReducer.js
const sizeReducer = (state = "L", action) => {
  switch (action.type) {
    case "SET_SIZE":
      return action.payload;
    default:
      return state;
  }
};

export default sizeReducer;
