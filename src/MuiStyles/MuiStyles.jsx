import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";

const CustomButton = styled(Button)({
  color: "#000000",
  backgroundColor: "#ffffff",
  "&:hover": {
    backgroundColor: "#eeeeee",
  },
  padding: "0.5rem 1rem",
  boxShadow:
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
});

const AddToCartButton = styled(Button)({
  color: "#ffffff",
  backgroundColor: "#d2791f",
  "&:hover": {
    backgroundColor: "#000000",
  },
  padding: "0.5rem 1rem",
  boxShadow:
    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.5rem",
});

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

export { CustomButton, AddToCartButton, SearchField };
