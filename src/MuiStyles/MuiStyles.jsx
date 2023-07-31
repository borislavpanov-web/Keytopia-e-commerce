import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

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

export default CustomButton;
