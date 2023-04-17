import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddProduct.css";

function AddProduct() {
  const [productKeys, setProductKeys] = useState({});
  const HandleProductKey = (key, value) => {
    setProductKeys((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const [added, setAdded] = useState(false);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [atribute, setAtribute] = useState("");
  const [value, setValue] = useState("");

  const [isSkuValid, setIsSkuValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPriceValid, setIsPriceValid] = useState(false);
  const [isAtributeValid, setIsAtributeValid] = useState(false);
  const [isValueValid, setIsValueValid] = useState(false);

  const HandleSkuValue = (event) => {
    setSku(event.target.value);
    console.log("sku", event.target.value);
  };

  const [mySkuStyle, setMySkuStyle] = useState({
    borderColor: "",
    backgroundColor: "",
  });
  const [myNameStyle, setMyNameStyle] = useState({
    borderColor: "",
    backgroundColor: "",
  });
  const [myPriceStyle, setMyPriceStyle] = useState({
    borderColor: "",
    backgroundColor: "",
  });

  const [myAtributeStyle, setMyAtributeStyle] = useState({
    borderColor: "",
    backgroundColor: "",
  });

  const [myValueStyle, setMyValueStyle] = useState({
    borderColor: "",
    backgroundColor: "",
  });

  const HandleSku = () => {
    setIsSkuValid(sku.length > 0);
    if (sku === "") {
      setMySkuStyle({ borderColor: "red", backgroundColor: "pink" });
    } else {
      setMySkuStyle({ borderColor: "", backgroundColor: "" });
    }
  };
  const HandleNameValue = (event) => {
    setName(event.target.value);
  };
  const HandleName = () => {
    setIsNameValid(name.length > 0);
    if (name === "") {
      setMyNameStyle({ borderColor: "red", backgroundColor: "pink" });
    } else {
      setMyNameStyle({ borderColor: "", backgroundColor: "" });
    }
  };
  const HandlePriceValue = (event) => {
    setPrice(event.target.value);
  };
  const HandlePrice = () => {
    setIsPriceValid(price.length > 0);
    if (price === "") {
      setMyPriceStyle({ borderColor: "red", backgroundColor: "pink" });
    } else {
      setMyPriceStyle({ borderColor: "", backgroundColor: "" });
    }
  };
  const HandleAtributeValue = (event) => {
    setAtribute(event.target.value);
  };
  const HandleAtribute = () => {
    setIsAtributeValid(atribute.length > 0);
    if (atribute === "") {
      setMyAtributeStyle({ borderColor: "red", backgroundColor: "pink" });
    } else {
      setMyAtributeStyle({ borderColor: "", backgroundColor: "" });
    }
  };
  const HandleValueValue = (event) => {
    setValue(event.target.value);
  };
  const HandleValue = () => {
    setIsValueValid(value.length > 0);
    if (value === "") {
      setMyValueStyle({ borderColor: "red", backgroundColor: "pink" });
    } else {
      setMyValueStyle({ borderColor: "", backgroundColor: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      isSkuValid &&
      isNameValid &&
      isPriceValid &&
      isAtributeValid &&
      isValueValid
    ) {
      fetch("http://localhost:4000/scandiwebphp/addproduct.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(productKeys),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("response: ", error);
        });

      document.getElementById("product-add-sku").value = "";
      document.getElementById("product-add-name").value = "";
      document.getElementById("product-add-price").value = "";
      document.getElementById("product-atribute").value = "";
      document.getElementById("product-demension").value = "";

      setProductKeys({});
      console.log(" vqeni");
      setSku("");
      setName("");
      setPrice("");
      setAtribute("");
      setValue("");
      setAdded(true);
    } else {
      if (!isSkuValid) {
        setIsSkuValid(false);
        setMySkuStyle({ borderColor: "red", backgroundColor: "pink" });
      }
      if (!isNameValid) {
        setIsNameValid(false);
        setMyNameStyle({ borderColor: "red", backgroundColor: "pink" });
      }
      if (!isPriceValid) {
        setIsPriceValid(false);
        setMyPriceStyle({ borderColor: "red", backgroundColor: "pink" });
      }
      if (!isAtributeValid) {
        setIsAtributeValid(false);
        setMyAtributeStyle({ borderColor: "red", backgroundColor: "pink" });
      }
      if (!isValueValid) {
        setIsValueValid(false);
        setMyValueStyle({ borderColor: "red", backgroundColor: "pink" });
      }
    }
  };

  return (
    <div className="add-product-view">
      <div className="header-div">
        <span className="header">Product Add</span>
        <div className="button-container">
          <button className="button-add-remove" onClick={handleSubmit}>
            Save
          </button>

          <Link to="/" className="button-add-remove">
            Cancel
          </Link>
        </div>
      </div>

      {added && (
        <div className="succesfully-added-product">
          <div className="succesfully-added-product-text">
            Product succesfully added
          </div>
          <div>
            <Link to="/" className="button-add-remove" d="okay-button">
              Okay
            </Link>
          </div>
        </div>
      )}

      <div className="products-Add">
        <div className="inputs">
          <div className="sku-input">
            <label htmlFor="product-add-sku">SKU</label>

            <input
              onChange={(event) => {
                HandleProductKey("sku", event.target.value);
                HandleSkuValue(event);
              }}
              onBlur={HandleSku}
              type="text"
              className="product-add-sku"
              id="product-add-sku"
              value={sku}
              style={mySkuStyle}
            ></input>
          </div>
          <div className="name-input">
            <label type="text" htmlFor="product-add-name">
              Name
            </label>
            <input
              onChange={(event) => {
                HandleProductKey("name", event.target.value);
                HandleNameValue(event);
              }}
              className="product-add-name"
              id="product-add-name"
              onBlur={HandleName}
              value={name}
              style={myNameStyle}
            ></input>
          </div>
          <div className="price-input">
            <label type="number" htmlFor="product-add-price">
              PRICE
            </label>
            <input
              onChange={(event) => {
                HandleProductKey("price", event.target.value);
                HandlePriceValue(event);
              }}
              className="product-add-price"
              id="product-add-price"
              onBlur={HandlePrice}
              value={price}
              style={myPriceStyle}
            ></input>
          </div>

          <div className="selector-input">
            <label>Atribute</label>
            <select
              onChange={(event) => {
                HandleProductKey("atribute", event.target.value);
                HandleAtributeValue(event);
              }}
              className="switcher-selector"
              id="product-atribute"
              onBlur={HandleAtribute}
              value={atribute}
              style={myAtributeStyle}
            >
              <option disabled selected></option>
              <option>DVD</option>
              <option>Book</option>
              <option>Furniture</option>
            </select>
          </div>

          <div className="price-input">
            <label type="text" htmlFor="product-demension">
              Value
            </label>
            <input
              placeholder={
                atribute === "DVD"
                  ? "Size:  " + value
                  : atribute === "Furniture"
                  ? "Dimension:  " + value
                  : atribute === "Book"
                  ? "Weight:  " + value
                  : "Value"
              }
              onChange={(event) => {
                HandleProductKey("value", event.target.value);
                HandleValueValue(event);
              }}
              className="product-demension"
              id="product-demension"
              value={value}
              style={myValueStyle}
              onBlur={HandleValue}
            ></input>
          </div>
        </div>
      </div>
      <div className="footer-div">
        <span className="footer">Scandiweb Test assigment</span>
      </div>
    </div>
  );
}
export default AddProduct;
