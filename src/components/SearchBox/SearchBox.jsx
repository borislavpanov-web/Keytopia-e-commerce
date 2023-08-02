import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  IconButton,
  Paper,
  Popper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { SearchField } from "../../MuiStyles/MuiStyles.jsx";
import products from "../../data/data.js";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchText),
    );
    setSearchTerm(searchText);
    setFilteredProducts(filtered);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center my-2 mx-2">
      <SearchField
        id="standard-basic"
        label="Search"
        variant="standard"
        className="w-full"
        inputProps={{ style: { textTransform: "none" } }}
        value={searchTerm}
        onChange={handleSearch}
      />
      <IconButton style={{ marginLeft: "-30px" }}>
        <SearchIcon style={{ color: "black" }} className="hover:bg-gray-600" />
      </IconButton>
      <Popper open={open} anchorEl={anchorEl}>
        <Paper>
          <List>
            {filteredProducts.map((product) => (
              <ListItem key={product.id} onClick={handleClose}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-12 mr-2 cursor-pointer"
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                  }}
                />
                <ListItemText primary={product.name} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Popper>
    </div>
  );
};

export default SearchBox;
