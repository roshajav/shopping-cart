import "../styles/ProductDetails.css";

import React, { useState } from "react";

import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import ProductImage1 from "../assets/Product-Img-Color1.jpg";
import ProductImage2 from "../assets/Product-Img-Color2.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductDetails = () => {
  const product = {
    title: "JONATHAN SIMKHAI",
    description: "Lurex Linen Viscose Jacket in Conchiglia",
    price: "$225",
    color: "COLOR CONCHIGLIA",
  };

  const [selectedSize, setSelectedSize] = useState("L");

  const handleSizeButtonClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="sticky-right">
      <p className="product-details-title">{product.title}</p>
      <p className="product-details-description">{product.description}</p>
      <p className="product-details-pricing">{product.price}</p>
      <p className="product-details-color">{product.color}</p>
      <div className="product-images">
        <Card className="small-card">
          <CardMedia
            component="img"
            image={ProductImage1}
            alt=""
            style={{ width: "100%" }}
          />
        </Card>
        <div className="tab-spacing" />
        <Card className="small-card">
          <CardMedia
            component="img"
            image={ProductImage2}
            alt=""
            style={{ width: "100%" }}
          />
        </Card>
      </div>
      <div className="size-info">
        <p className="size-text">Size {selectedSize}</p>
        <p className="size-chart-text">Size Chart</p>
      </div>
      <div className="size-buttons">
        <Button
          variant={selectedSize === "XS" ? "contained" : "outlined"}
          onClick={() => handleSizeButtonClick("XS")}
          sx={{
            backgroundColor: selectedSize === "XS" ? "black" : "",
            color: selectedSize === "XS" ? "white" : "black",
          }}
        >
          XS
        </Button>
        <Button
          variant={selectedSize === "S" ? "contained" : "outlined"}
          onClick={() => handleSizeButtonClick("S")}
          sx={{
            backgroundColor: selectedSize === "S" ? "black" : "",
            color: selectedSize === "S" ? "white" : "black",
          }}
        >
          S
        </Button>
        <Button
          variant={selectedSize === "M" ? "contained" : "outlined"}
          onClick={() => handleSizeButtonClick("M")}
          sx={{
            backgroundColor: selectedSize === "M" ? "black" : "",
            color: selectedSize === "M" ? "white" : "black",
          }}
        >
          M
        </Button>
        <Button
          variant={selectedSize === "L" ? "contained" : "outlined"}
          onClick={() => handleSizeButtonClick("L")}
          sx={{
            backgroundColor: selectedSize === "L" ? "black" : "",
            color: selectedSize === "L" ? "white" : "black",
          }}
        >
          L
        </Button>
        <Button
          variant={selectedSize === "XXL" ? "contained" : "outlined"}
          onClick={() => handleSizeButtonClick("XXL")}
          sx={{
            backgroundColor: selectedSize === "XXL" ? "black" : "",
            color: selectedSize === "XXL" ? "white" : "black",
          }}
        >
          XXL
        </Button>
      </div>
      <div className="add-to-cart-button">
        <Button variant="outlined">
          Add to Bag &ensp; <ArrowForwardIcon />{" "}
        </Button>
      </div>
      <div>
        <p>Get 4 interest-free payments of $196.25 with Klarna LEARN MORE</p>
        <p> Speak to a Personal Stylist CHAT NOW </p>
      </div>
    </div>
  );
};

export default ProductDetails;
