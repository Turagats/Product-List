import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div id={props.id} className="product-box">
      <input
        id={props.id}
        type="checkbox"
        className="checkbox"
        onChange={props.selected}
      ></input>
      <p>{props.sku}</p>
      <p>{props.name}</p>
      <p>{props.price}$</p>
      <p>{props.size}</p>
      {props.atribute === "DVD"
        ? "Size:  " + props.value
        : props.atribute === "Furniture"
        ? "Dimension:  " + props.value
        : "Weight:  " + props.value}
    </div>
  );
}

export default Product;
