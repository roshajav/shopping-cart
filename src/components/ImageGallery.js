import React, { useState, useEffect, useRef } from "react";

import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import "../styles/ImageGallery.css"; // Import your custom styles

import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";
import ProductDetails from "./ProductDetails";
import TabComponent from "./TabComponent";
import ImageCard from "./ImageCard";

const ImageGallery = () => {
  const [isSticky, setIsSticky] = useState(true); // Initialize as true
  const tabComponentRef = useRef(null);
  const productDetailsRef = useRef(null);
  const editorsNoteRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const galleryHeight = document.getElementById("imageGallery").offsetHeight;
    const tabComponentHeight = tabComponentRef.current.offsetHeight;
    const productDetailsHeight = productDetailsRef.current.offsetHeight;
    const editorsNoteTop = editorsNoteRef.current.getBoundingClientRect().top;

    console.log("1. Scroll Position..", scrollPosition);
    console.log("2. Window Height..", windowHeight);
    console.log("3. Prod Details Height..", productDetailsHeight);
    console.log("4. Gallery Height..", galleryHeight);
    console.log("5. Editors Note Top Height..", editorsNoteTop);
    console.log("6. Tab Comp Height..", tabComponentHeight);

    // 1. Scroll Position.. 4769.45458984375
    // 2. Window Height.. 365
    // 3. Prod Details Height.. 4717
    // 4. Gallery Height.. 4717
    // 5. Editors Note Top Height.. 115.59091186523438
    // 6. Tab Comp Height.. 4717
    console.log("10. Is STicky..", isSticky);

    if (
      scrollPosition + windowHeight >= galleryHeight - productDetailsHeight ||
      scrollPosition + windowHeight <= galleryHeight - tabComponentHeight
    ) {
      console.log("7. Comes in 1st If");
      setIsSticky(false);
      // } else if (scrollPosition <= tabComponentHeight) {
      //   console.log("8. Comes in 2nd Else If");
      //   setIsSticky(false);
    } else {
      console.log("9. Comes in last Else");
      setIsSticky(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const images = [
    {
      id: 1,
      src: Image1,
    },
    {
      id: 2,
      src: Image2,
    },
    {
      id: 3,
      src: Image3,
    },
    {
      id: 4,
      src: Image4,
    },
    {
      id: 5,
      src: Image5,
    },
    {
      id: 6,
      src: Image1,
    },
    {
      id: 7,
      src: Image3,
    },
    {
      id: 8,
      src: Image5,
    },
  ];

  return (
    <div className="image-gallery-container">
      <div className="horizontal-container">
        <div
          ref={tabComponentRef}
          className={`tab-component ${isSticky ? "sticky" : ""}`}
        >
          <TabComponent />
        </div>
        <div
          id="imageGallery"
          className={`image-gallery ${isSticky ? "sticky" : ""}`}
        >
          <Grid container spacing={3}>
            {images.map((image) => (
              <Grid item xs={12} sm={12} key={image.id}>
                <ImageCard imageSrc={image.src} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div
          ref={productDetailsRef}
          className={`product-details ${isSticky ? "sticky" : ""}`}
        >
          <ProductDetails />
        </div>
      </div>
      <div className="text-notes">
        <p>
          <a href="#" className="black-underline">
            JONATHAN SIMKHAI
          </a>{" "}
          <a href="#" className="black-underline">
            BLAZERS
          </a>{" "}
          <a href="#" className="black-underline">
            VESCOSE
          </a>
        </p>
      </div>
      <div
        id="editor-note"
        ref={editorsNoteRef}
        className={`paragraph-text ${isSticky ? "sticky" : ""}`}
      >
        <p className="editors-note-title">NOTE FROM THE EDITOR</p>
        <p className="editors-note">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky. The
          Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky. The
          Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky. The
          Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky. The
          Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.
        </p>
        <p className="editors-note-footer">--- By MINNA SHIM, Fashion Editor</p>
      </div>
    </div>
  );
};

export default ImageGallery;
