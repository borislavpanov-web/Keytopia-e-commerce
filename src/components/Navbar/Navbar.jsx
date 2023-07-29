import React from "react";
import { MenuItem, Button, Menu, IconButton } from "@mui/material";
import { AccountCircle, Menu as MenuIcon } from "@mui/icons-material";
import keytopiaLogo from "../../assets/keytopia-logo.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
    </>
  );
};

export default Navbar;
