import React, { useState } from "react";
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
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
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
