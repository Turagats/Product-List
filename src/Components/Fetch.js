import React, { useState } from "react";
import $ from "jquery";

export default function Fetch() {
  const [productKeys, setProductKeys] = useState({});

  const HandleProductKey = (key, value) => {
    setProductKeys((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const fetchclick = (event) => {
    $.ajax({
      url: "http://localhost:4000/scandiwebphp/addproduct.php",
      type: "POST",
      data: JSON.stringify(productKeys),
      contentType: "application/x-www-form-urlencoded",
      success: function (response) {
        console.log(response);
      },
      error: function (xhr, status, error) {
        console.log(xhr, status, error);
      },
    });
  };

  return (
    <div>
      <div className="name-input">
        <label type="text" htmlFor="product-add-name">
          Name
        </label>
        <input
          onChange={(event) => HandleProductKey("name", event.target.value)}
          className="product-add-name"
          id="product-add-name"
        ></input>
      </div>
      <div className="name-input">
        <label type="text" htmlFor="product-add-name">
          Price
        </label>
        <input
          onChange={(event) => HandleProductKey("price", event.target.value)}
          className="product-add-name"
          id="product-add-name"
        ></input>
      </div>
      <button onClick={fetchclick}>Go Fetch</button>
    </div>
  );
}
