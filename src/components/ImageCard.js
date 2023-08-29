import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const ImageCard = ({ imageSrc }) => {
  return (
    <Card
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" image={imageSrc} alt="" />
    </Card>
  );
};

export default ImageCard;
