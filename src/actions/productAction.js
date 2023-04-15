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
  ADD_TO_CART_FAIL,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_REQUEST,
  CART_FAIL,
  CART_SUCCESS,
  CART_REQUEST,
  CHECK_USER_FAIL,
  CHECK_USER_SUCCESS,
  CHECK_USER_REQUEST,
} from "../constants/productConstants";
import { firestore } from "../firebase";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
} from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

const ref = collection(firestore, "product");

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_REQUEST,
    });

    const productCol = collection(firestore, "product");
    const productSnapshot = await getDocs(productCol);
    const products = productSnapshot.docs.map((doc) => doc.data());
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   Get proudcts  details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });
    const productCol = collection(firestore, "product");
    const productSnapshot = await getDocs(productCol);
    const product = productSnapshot.docs.filter((doc) => doc.data().id == id);
    const productDetails = product[0].data();
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: productDetails,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//   register user
export const registerUser = (email, name) => async (dispatch) => {
  // const navigate=useNavigate()
  try {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });
    const productCol = collection(firestore, "users");
    const userDetails = await addDoc(productCol, {
      name: name,
      email: email,
      role: "user",
      orders: [],
    });
    localStorage.setItem("name", name);


    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: userDetails,
      name: name,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

//add items to cart
export const addToCart =
  (id, quantity, item, name, price) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_TO_CART_REQUEST,
      });

      const productCol = collection(firestore, "users");
      const productSnapshot = await getDocs(productCol);
      const product = productSnapshot.docs.filter(
        (doc) => doc.data().name == id
      );
      const prevOrder = product[0].data().orders;
      const order = [...prevOrder];
      const index = order.findIndex((product) => product.item == item);
      if (index >= 0) {
        order[index].quantity += parseInt(quantity);
      } else {
        order.push({
          item: item,
          quantity: parseInt(quantity),
          name: name,
          price: price,
        });
      }

      const userDoc = doc(firestore, "users", product[0].id);
      const updateOrder = { orders: order };
      await updateDoc(userDoc, updateOrder);
      const cart = product[0].data();
      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: cart,
      });
    } catch (error) {
      dispatch({
        type: ADD_TO_CART_FAIL,
        payload: error.response,
      });
    }
  };

//Get cart detials
export const getCart = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CART_REQUEST,
    });
    const productCol = collection(firestore, "users");
    const productSnapshot = await getDocs(productCol);
    const product = productSnapshot.docs.filter((doc) => doc.data().name == id);
    const cart = product[0].data().orders;

    dispatch({
      type: CART_SUCCESS,
      payload: cart,
    });
  } catch (error) {
    dispatch({
      type: CART_FAIL,
      payload: error.response.data.message,
    });
  }
};

//check user
export const checkUser = (email) => async (dispatch) => {

  try {
    dispatch({
      type: CHECK_USER_REQUEST,
    });
    const exist = false;
    const productCol = collection(firestore, "users");
    const productSnapshot = await getDocs(productCol);
    const product = productSnapshot.docs.filter(
      (doc) => doc.data().email == email
    );

    dispatch({
      type: CHECK_USER_SUCCESS,
      payload: exist,
      username: product[0].data().name,
    });
  } catch (error) {
    dispatch({
      type: CHECK_USER_FAIL,
      payload: error.response,
    });
  }
};
