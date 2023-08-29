import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import "../styles/StickyFavoriteIcon.css";

const StickyFavoriteIcon = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`favorite-icon-container ${isSticky ? "sticky" : ""}`}>
      <IconButton className="favorite-icon">
        <FavoriteIcon />
      </IconButton>
    </div>
  );
};

export default StickyFavoriteIcon;
