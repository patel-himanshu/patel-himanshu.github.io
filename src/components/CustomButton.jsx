import { Button, withStyles } from "@material-ui/core";
import { fontSizes, fontWeights } from "../styling/typography";
import palette from "../styling/palette";

const CustomButton = (props) => {
  const { children, padding, size, weight, ...rest } = props;

  const StyledButton = withStyles((theme) => ({
    root: {
      backgroundColor: palette.primary1,
      borderRadius: "3px",
      border: 0,
      outline: "none",
      padding: padding || "8px 32px",
      "&:hover": {
        backgroundColor: palette.primary0,
      },
      textTransform: "none",
    },
    label: {
      color: "white",
      fontSize: fontSizes[size] || "1.25rem",
      fontWeight: fontWeights[weight] || weight || "normal",
    },
  }))(Button);

  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default CustomButton;
