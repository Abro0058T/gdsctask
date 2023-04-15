import React, { Fragment } from "react";
import productImage from "../../images/product.jpg";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  console.log(product);
  return (
    <Link to={`product/${product.id}`}>
      <div className="productContainer">
        <img src={productImage} className="productImage" alt="productImage" />
        <h2 className="productName">{product.name}</h2>
        <p className="productHeading">{product.description}</p>
        <p className="productPrice">{product.price}</p>
        {/* <div className="productReviews"></div> */}
        <p className="review">{product.stock}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
