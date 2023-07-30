import React, { useState, useEffect } from "react";
import { MenuItem, Button, Menu, IconButton } from "@mui/material";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import keytopiaLogo from "../../assets/keytopia-logo.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isNavbarBlurred, setNavbarBlurred] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavbarBlurred(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-white ${
        isNavbarBlurred ? "backdrop-blur-md" : ""
      }`}
      style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex items-center justify-between">
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{
              color: "black",
              outline: "none",
              textDecoration: "none",
              marginTop: "5px",
            }}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <img
          src={keytopiaLogo}
          alt="keytopiaLogo"
          className="w-28 rounded-3xl mt-2 ml-2"
        />
        <div className="mr-2">
          <IconButton>
            <AccountCircle style={{ color: "black" }} />
          </IconButton>
        </div>
      </div>
      <hr className="my-2 border-black" />
    </div>
  );
};

export default Navbar;
