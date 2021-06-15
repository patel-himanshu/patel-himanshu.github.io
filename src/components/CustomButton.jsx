import { Button, withStyles } from "@material-ui/core";
import { fontSizes, fontWeights } from "../styling/typography";
import palette from "../styling/palette";

const CustomButton = (props) => {
  const { children, padding, ...rest } = props;

  const StyledButton = withStyles((theme) => ({
    root: {
      backgroundColor: palette.primary1,
      borderRadius: "3px",
      border: 0,
      outline: "none",
      padding: padding || "8px 32px",
      "&:hover": {
        backgroundColor: palette.primary2,
      },
      textTransform: "none",
    },
    label: {
      color: palette.white,
      fontSize: fontSizes.normal,
      fontWeight: fontWeights.semibold,
    },
  }))(Button);

  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default CustomButton;
