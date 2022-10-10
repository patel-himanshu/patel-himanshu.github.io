import { memo, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
	corporateExperience,
	internshipDetails,
	positionsOfResponsibility,
} from "./experienceDetails";
import "./Experience.css";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		// padding: "0 0.25rem",
	},
	heading: {
		flexBasis: "33.33%",
		flexShrink: 0,
		[theme.breakpoints.down("sm")]: {
			fontSize: "1rem",
		},
	},
	secondaryHeading: {
		color: theme.palette.text.secondary,
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.9rem",
		},
	},
	details: {
		marginTop: "0.5rem",
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.9rem",
		},
	},
	positions: {
		[theme.breakpoints.down("sm")]: {
			fontSize: "0.9rem",
		},
	},
}));

const Experience = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<article className="page-content">
			<section className="page-section">
				<header>
					<span className="section-header">Experience</span>
				</header>

				{/* Corporate Experience section */}
				<section>
					<h2 className="subsection-header">Corporate Experience</h2>
					<div className="underline" />
					<div className={classes.root}>
						{corporateExperience.map((position) => {
							return (
								<Accordion key={position}>
									<Grid
										container
										style={{
											padding: "0.5rem 1rem 0 1rem",
										}}
									>
										<Grid item md={8} xs={12}>
											<Typography
												variant="subtitle1"
												className={classes.positions}
											>
												{position.description}
											</Typography>
										</Grid>
										<Grid item>
											<Typography className={classes.secondaryHeading}>
												{position.duration}
											</Typography>
										</Grid>
									</Grid>
								</Accordion>
							);
						})}
					</div>
				</section>

				{/* Internship section section */}
				<section>
					<h2 className="subsection-header">Internships</h2>
					<div className="underline" />
					<div className={classes.root}>
						{internshipDetails.map((internship) => {
							return (
								<Accordion
									key={internship.label}
									expanded={expanded === `${internship.label}`}
									onChange={handleChange(`${internship.label}`)}
								>
									<AccordionSummary expandIcon={<ExpandMoreIcon />}>
										<Grid container>
											<Grid item md={4} xs={12}>
												<Typography
													className={classes.heading}
													style={{ margin: "auto" }}
												>
													<strong>{internship.company}</strong>
												</Typography>
											</Grid>
											<Grid item md={4} xs={12}>
												<Typography
													className={classes.heading}
													style={{ margin: "auto" }}
												>
													{internship.role}
												</Typography>
											</Grid>
											<Grid item>
												<Typography
													className={classes.secondaryHeading}
													style={{ margin: "auto" }}
												>
													({internship.duration})
												</Typography>
											</Grid>
										</Grid>
									</AccordionSummary>
									<AccordionDetails>
										<ul className="accordian-details">
											{internship.details.map((detail) => {
												return (
													<li key={detail} className={classes.details}>
														{detail}
													</li>
												);
											})}
										</ul>
									</AccordionDetails>
								</Accordion>
							);
						})}
					</div>
				</section>

				{/* Positions of Responsibility section */}
				<section>
					<h2 className="subsection-header">Positions of Responsibility</h2>
					<div className="underline" />
					<div className={classes.root}>
						{positionsOfResponsibility.map((position) => {
							return (
								<Accordion key={position}>
									<Grid
										container
										style={{
											padding: "0.5rem 1rem 0 1rem",
										}}
									>
										<Grid item md={8} xs={12}>
											<Typography
												variant="subtitle1"
												className={classes.positions}
											>
												{position.description}
											</Typography>
										</Grid>
										<Grid item>
											<Typography className={classes.secondaryHeading}>
												{position.duration}
											</Typography>
										</Grid>
									</Grid>
								</Accordion>
							);
						})}
					</div>
				</section>
			</section>
		</article>
	);
};

export default memo(Experience);
