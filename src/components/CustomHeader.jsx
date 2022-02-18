import { Typography, withStyles } from "@material-ui/core";
import { fontSizes, fontWeights } from "../styling/typography";

const CustomHeader = (props) => {
	const { size, weight, children, ...rest } = props;

	const StyledText = withStyles((theme) => ({
		root: {
			color: "white",
			backgroundColor: "black",
			fontSize: fontSizes[size] || "1.5rem",
			fontWeight: fontWeights[weight] || weight || "normal",
		},
	}))(Typography);

	return (
		<StyledText
			{...rest}
			style={{
				padding: "0.25rem 1rem",
				marginBottom: "1.5rem",
			}}
		>
			<span>{children}</span>
		</StyledText>
	);
};

export default CustomHeader;
