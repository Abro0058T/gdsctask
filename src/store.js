import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { addToCart, checkUser, getCart, loginUser, productDetailsReducer, productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  products:productReducer,
  product:productDetailsReducer,
  user:loginUser,
  usercart:addToCart,
  cart:getCart,
  checkUser:checkUser
});

let initalState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;