import React from "react";
import { TextField, IconButton, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#000000",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000000",
    },
    "&:hover fieldset": {
      borderColor: "#000000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000000",
    },
  },
});
const SearchBox = () => {
  return (
    <div className="flex items-center my-2 mx-2">
      <SearchField
        id="standard-basic"
        label="Search"
        variant="standard"
        className="w-full"
      />
      <IconButton style={{ marginLeft: "-30px" }}>
        <SearchIcon style={{ color: "black" }} className="hover:bg-gray-600" />
      </IconButton>
    </div>
  );
};

export default SearchBox;
