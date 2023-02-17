import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import angular from "../../assets/logos/angular.png";
// import aspnet from "../../assets/logos/asp-net.png";
import bootstrap from "../../assets/logos/bootstrap.png";
// import csharp from "../../assets/logos/c-sharp.png";
import css from "../../assets/logos/css.png";
import django from "../../assets/logos/django.png";
// import express from "../../assets/logos/express.png";
import html from "../../assets/logos/html.png";
// import graphql from "../../assets/logos/graphql.png";
import git from "../../assets/logos/git.png";
// import grpc from "../../assets/logos/grpc.png";
import javascript from "../../assets/logos/javascript.png";
// import latex from "../../assets/logos/latex.png";
import linux from "../../assets/logos/linux.png";
import materialui from "../../assets/logos/material-ui.png";
import mongodb from "../../assets/logos/mongodb.png";
import mysql from "../../assets/logos/mysql.png";
// import netcore from "../../assets/logos/net-core.png";
import nextjs from "../../assets/logos/nextjs.png";
// import nodejs from "../../assets/logos/nodejs.png";
// import postgresql from "../../assets/logos/postgresql.png";
import postman from "../../assets/logos/postman.png";
import python from "../../assets/logos/python.png";
import react from "../../assets/logos/react.png";
import redux from "../../assets/logos/redux.png";
import sqlite from "../../assets/logos/sqlite.png";
import tailwind from "../../assets/logos/tailwind.png";
// import tensorflow from "../../assets/logos/tensorflow.png";
import typescript from "../../assets/logos/typescript.png";
import windows from "../../assets/logos/windows.png";

const data = [
	{
		category: "Languages",
		skills: [
			{ name: "Python", icon: python },
			{ name: "TypeScript", icon: typescript },
			{ name: "JavaScript", icon: javascript },
			{ name: "HTML", icon: html },
			{ name: "CSS", icon: css },
		],
	},
	{
		category: "Frameworks & Libraries",
		skills: [
			{ name: "React", icon: react },
			{ name: "Next.js", icon: nextjs },
			{ name: "Angular", icon: angular },
			{ name: "Django", icon: django },
			{ name: "Tailwind CSS", icon: tailwind },
			{ name: "Material-UI", icon: materialui },
			{ name: "Bootstrap", icon: bootstrap },
			//   { name: "Express", icon: express },
		],
	},
	{
		category: "Databases",
		skills: [
			{ name: "MongoDB", icon: mongodb },
			{ name: "MySQL", icon: mysql },
			{ name: "SQLite", icon: sqlite },
			//   { name: "PostgreSQL", icon: postgresql },
		],
	},
	{
		category: "Tools & Platforms",
		skills: [
			{ name: "Git", icon: git },
			{ name: "Redux", icon: redux },
			//   { name: "Node.js", icon: nodejs },
			{ name: "Postman", icon: postman },
			//   { name: "LATEX", icon: latex },
			{ name: "Windows", icon: windows },
			{ name: "Linux", icon: linux },
		],
	},
];

const useStyles = makeStyles({
	card: {
		backgroundColor: "#e7fcd2",
		boxShadow: "0 0 10px grey",
		border: "1px solid green",
		margin: "0.5rem",
	},
	cardContent: {
		width: "100%",
		height: "1.5px",
		background: "#808080",
		overflow: "hidden",
	},
	listItemIcon: {
		width: "100px",
		marginRight: "0.5rem",
	},
	logoIcons: {
		filter: "drop-shadow(0 0 0.5px #AAA)",
		display: "block",
		margin: "auto",
		height: "40px",
	},
});

const Skills = () => {
	const classes = useStyles();

	return (
		<Grid container direction="row" justifyContent="center">
			{data.map((elem) => {
				return (
					<Grid item lg={3} md={4} sm={6} xs={12} key={elem.category}>
						<Card variant="outlined" className={classes.card}>
							<CardContent>
								<strong>
									<em>{elem.category}</em>
								</strong>
								<div className={classes.cardContent} />
								<div>
									<List style={{ padding: "0" }}>
										{elem.skills.map((skill) => {
											return (
												<ListItem disableGutters key={skill.name}>
													<ListItemIcon className={classes.listItemIcon}>
														<img
															src={skill.icon}
															alt={skill.name}
															className={classes.logoIcons}
														/>
													</ListItemIcon>
													<ListItemText primary={skill.name} />
												</ListItem>
											);
										})}
									</List>
								</div>
							</CardContent>
						</Card>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Skills;
