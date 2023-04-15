import React, { Fragment } from "react";
import "./Itemlist.css";
function Itemlist({ items }) {

  return (
    <Fragment>
      <div className="items">
        <h1>{items.name}</h1>
        <p>{items.price}</p>
        <p>{items.quantity}</p>
      </div>
    </Fragment>
  );
}

export default Itemlist;
