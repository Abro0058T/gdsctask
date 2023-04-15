// import Login from "../component/Login/Login";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  CART_FAIL,CART_SUCCESS,
  CART_REQUEST,
  CHECK_USER_FAIL,
CHECK_USER_SUCCESS,
  CHECK_USER_REQUEST,
} from "../constants/productConstants";

export const productReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
      break;
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
      break;
    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      break;

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
      break;
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
      break;
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      break;

    default:
      return state;
  }
};

export const loginUser = (state = { user: [] }, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        loading: true,
        ...state,
      };
      break;
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
      break;
    case LOGIN_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      break;
      default:
      return state;
  }
};

//Add to cart 
export const addToCart = (state = { addtocart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return {
        loading: true,
        ...state,
      };
      break;
    case ADD_TO_CART_SUCCESS:
      return {
        loading: false,
        addtocart: action.payload,
      };
      break;
    case ADD_TO_CART_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      break;
      default:
      return state;
  }
};

//Get cart details 

export const getCart= (state = { cart: [] }, action) => {
  switch (action.type) {
    case CART_REQUEST:
      return {
        loading: true,
        ...state,
      };
      break;
    case CART_SUCCESS:
      return {
        loading: false,
        cart: action.payload,
      };
      break;
    case CART_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      break;
      default:
      return state;
  }
};
//check user
export const checkUser= (state = { user: [] }, action) => {
  switch (action.type) {
    case CHECK_USER_REQUEST:
      return {
        loading: true,
        ...state,
      };
      break;
    case CHECK_USER_SUCCESS:
      return {
        loading: false,
        exist: action.payload,
        username:action.username
      };
      break;
    case CHECK_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      break;
      default:
      return state;
  }
};
