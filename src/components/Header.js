import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">MyCompany.com</Typography>

        {/* Part 2: Nav Menus in the center */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <MenuItem>The Edit</MenuItem>
          <MenuItem>New Arrivals</MenuItem>
          <MenuItem>Desginers</MenuItem>
          <MenuItem>Clothing</MenuItem>
          <MenuItem>Shoes</MenuItem>
          <MenuItem>Bags</MenuItem>
          <MenuItem>Accessories</MenuItem>
          <MenuItem>Jewellery</MenuItem>
          <MenuItem>Beauty</MenuItem>
          <MenuItem>Home</MenuItem>
        </div>

        <div>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton size="large" aria-label="addToCart" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="profile"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
