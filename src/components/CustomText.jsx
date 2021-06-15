import { Typography, withStyles } from "@material-ui/core";
import { fontSizes, fontWeights } from "../styling/typography";

const CustomText = (props) => {
  const { size, weight, children, ...rest } = props;

  const StyledText = withStyles((theme) => ({
    root: {
      fontSize: fontSizes[size] || "1rem",
      fontWeight: fontWeights[weight] || weight || "normal",
    },
  }))(Typography);

  return <StyledText {...rest}>{children}</StyledText>;
};

export default CustomText;
