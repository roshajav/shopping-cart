import "../styles/ImageGallery.css";

import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";

import ProductDetails from "./ProductDetails";
import TabComponent from "./TabComponent";
import ImageCard from "./ImageCard";
import StickyFavoriteIcon from "./StickyFavoriteIcon";

import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";

const ImageGallery = () => {
  const [isSticky, setIsSticky] = useState(true);
  const tabComponentRef = useRef(null);
  const productDetailsRef = useRef(null);
  const editorsNoteRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const galleryHeight = tabComponentRef.current.offsetHeight;
    const tabComponentHeight = tabComponentRef.current.offsetHeight;
    const productDetailsHeight = productDetailsRef.current.offsetHeight;
    if (
      scrollPosition + windowHeight >= galleryHeight - productDetailsHeight ||
      scrollPosition + windowHeight <= galleryHeight - tabComponentHeight
    ) {
      setIsSticky(false);
    } else {
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
      src: Image2,
    },
    {
      id: 8,
      src: Image3,
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
          <StickyFavoriteIcon className="sticky-fav-icon" />

          <Grid container spacing={3}>
            {images.map((image, index) => (
              <>
                <Grid item xs={12} sm={12} key={image.id}>
                  <ImageCard imageSrc={image.src} isFirstCard={index === 0} />
                </Grid>
              </>
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
          <a href="/#" className="black-underline">
            JONATHAN SIMKHAI
          </a>{" "}
          <a href="/#" className="black-underline">
            BLAZERS
          </a>{" "}
          <a href="/#" className="black-underline">
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
          lurex for a shimmering surface that shines like a star in the sky.
        </p>
        <p className="editors-note">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.
        </p>
        <p className="editors-note">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.
        </p>
        <p className="editors-note">
          The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar
          lavishness by night and by day: a blazer in a linen blend shot with
          lurex for a shimmering surface that shines like a star in the sky.
        </p>
        <p className="editors-note-footer">--- By MINNA SHIM, Fashion Editor</p>
      </div>
    </div>
  );
};

export default ImageGallery;
