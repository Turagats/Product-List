import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./ProductList.css";

function ProductList() {
  const [data, setData] = useState([]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [renderAll, setRenderAll] = useState(false);
  const handleItemSelect = (item) => {
    const isSelected = selectedItems.includes(item.target.id);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((i) => i !== item.target.id));
    } else {
      setSelectedItems([...selectedItems, Number(item.target.id)]);
    }
    console.log("1", item.target.id);
    if (item.target.id) {
    }
  };

  console.log(selectedItems);

  const handleDelete = () => {
    fetch("http://localhost:4000/scandiwebphp/deleteprodcut.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ productIDs: selectedItems }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("response: ", error);
      });
    setRenderAll(!renderAll);
    window.location.reload();
  };

  useEffect(() => {
    fetch("http://localhost:4000/scandiwebphp/retriveexample.php")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [renderAll]);

  return (
    <div className="view">
      <div className="header-div">
        <span className="header">Product List</span>
        <div className="button-container">
          <Link to="addProduct" className="button-add-remove">
            ADD
          </Link>
          <button className="button-add-remove" onClick={handleDelete}>
            MASS DELETE
          </button>
        </div>
      </div>
      <div className="products-div">
        {data.map((i) => {
          return (
            <Product
              key={i.products_id}
              id={i.products_id}
              sku={i.products_sku}
              name={i.products_name}
              price={i.products_price}
              value={i.products_value}
              atribute={i.products_atribute}
              selected={handleItemSelect}
            ></Product>
          );
        })}
      </div>
      <div className="footer-div">
        <span className="footer">Scandiweb Test assigment</span>
      </div>
    </div>
  );
}

export default ProductList;
