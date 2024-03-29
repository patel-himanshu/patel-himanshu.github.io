import { memo, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import coding from "../../assets/coding1.png";
import { education } from "./education";
import Skills from "./Skills";
import "./AboutMe.css";

const MemoedSkills = memo(Skills);

const AboutMe = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<article className="page-content">
			{/* "About Me" section */}
			<section className="page-section">
				<header>
					<span className="section-header">About Me</span>
				</header>
				<Grid container justifyContent="center" alignItems="center">
					<Grid item lg={6} md={7}>
						<div>
							My name is Himanshu Patel. Currently, I am
							<ul>
								<li>
									<span role="img" aria-label="Work">
										💼
									</span>{" "}
									currently working as a Graduate Engineer Trainee at Carl Zeiss, India
								</li>
								<li>
									<span role="img" aria-label="Laptop">
										💻
									</span>{" "}
									interested in full-stack development
								</li>
								<li>
									<span role="img" aria-label="Toolbox">
										🧰
									</span>{" "}
									learning React and TypeScript
								</li>
								<li>
									<span role="img" aria-label="Student with laptop">
										👩‍💻
									</span>{" "}
									trying to become more involved in open source
								</li>
							</ul>
							I enjoy writing code, especially in TypeScript and Python.
							<br />I am always eager to learn and explore new things.
						</div>
					</Grid>
					<Grid item lg={5} md={5}>
						<img
							src={coding}
							alt="A person coding on laptop"
							className="about-me-image"
						/>
					</Grid>
				</Grid>
			</section>

			<br />
			{/* "My Skills" section */}
			<section className="page-section">
				<header>
					<span className="section-header">My Skills</span>
					{/* <h2 className="subsection-header">My Skills</h2>
          				<div className="underline" /> */}
				</header>
				<div className="skills-section">
					<MemoedSkills />
				</div>
			</section>

			<br />
			{/* "Education" section */}
			<section className="page-section">
				<header>
					<span className="section-header">Education</span>
					{/* <h2 className="subsection-header">Education</h2>
          				<div className="underline" /> */}
				</header>
				<Grid
					container
					spacing={3}
					direction="row"
					justifyContent="center"
					alignItems="stretch"
				>
					{education.map((entry) => {
						return (
							<Grid item key={entry.years}>
								{/* <Grid item md={4} sm={6} xs={12} key={entry.years}> */}
								<Card variant="outlined" className="education-card-main">
									<CardContent className="education-card-content">
										<strong>
											<u>{entry.years}</u>
										</strong>
										<Typography variant="body1">{entry.degree}</Typography>
										<Typography variant="body2">
											<em>{entry.institute}</em>
										</Typography>
										<Typography variant="subtitle2" component="p">
											{entry.grade}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</section>
		</article>
	);
};

export default memo(AboutMe);
