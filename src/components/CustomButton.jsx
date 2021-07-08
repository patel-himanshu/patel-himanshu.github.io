import { Button, withStyles } from "@material-ui/core";
import { fontSizes, fontWeights } from "../styling/typography";
import palette from "../styling/palette";

const CustomButton = (props) => {
  const {
    children,
    padding,
    size,
    weight,
    border,
    bgColor1,
    bgColor2,
    textColor,
    ...rest
  } = props;

  const StyledButton = withStyles((theme) => ({
    root: {
      backgroundColor: bgColor1 || palette.primary1,
      borderRadius: "3px",
      border: border || 0,
      outline: "none",
      padding: padding || "8px 32px",
      textTransform: "none",
      transition: "0.3s",
      "&:hover": {
        backgroundColor: bgColor2 || palette.primary0,
        // boxShadow: `0 0 15px ${palette.primary3}`,
      },
    },
    label: {
      color: textColor || "white",
      fontSize: fontSizes[size] || "1.25rem",
      fontWeight: fontWeights[weight] || weight || "normal",
    },
  }))(Button);

  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default CustomButton;
