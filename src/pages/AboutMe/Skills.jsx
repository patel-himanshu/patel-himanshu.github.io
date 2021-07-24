import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import angular from "../../assets/logos/angular.png";
import bootstrap from "../../assets/logos/bootstrap.png";
import css from "../../assets/logos/css.png";
import django from "../../assets/logos/django.png";
// import express from "../../assets/logos/express.png";
import html from "../../assets/logos/html.png";
import git from "../../assets/logos/git.png";
import javascript from "../../assets/logos/javascript.png";
// import latex from "../../assets/logos/latex.png";
import linux from "../../assets/logos/linux.png";
import materialui from "../../assets/logos/material-ui.png";
import mongodb from "../../assets/logos/mongodb.png";
import mysql from "../../assets/logos/mysql.png";
// import nodejs from "../../assets/logos/nodejs.png";
// import postgresql from "../../assets/logos/postgresql.png";
import postman from "../../assets/logos/postman.png";
import python from "../../assets/logos/python.png";
import react from "../../assets/logos/react.png";
import redux from "../../assets/logos/redux.png";
import sqlite from "../../assets/logos/sqlite.png";
// import tensorflow from "../../assets/logos/tensorflow.png";
import typescript from "../../assets/logos/typescript.png";
import windows from "../../assets/logos/windows.png";

const data = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: python },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: react },
      { name: "Django", icon: django },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Material-UI", icon: materialui },
      { name: "Angular", icon: angular },
      //   { name: "Express", icon: express },
      //   { name: "TensorFlow", icon: tensorflow },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: mysql },
      { name: "SQLite", icon: sqlite },
      { name: "MongoDB", icon: mongodb },
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

const Skills = () => {
  return (
    <Grid container>
      {data.map((elem) => {
        return (
          <Grid item md={3} sm={6} xs={12} key={elem.category}>
            <Card
              variant="outlined"
              style={{
                backgroundColor: "#e7fcd2",
                boxShadow: "0 0 10px grey",
                border: "1px solid green",
                margin: "0.5rem",
              }}
            >
              <CardContent>
                <strong>
                  <em>{elem.category}</em>
                </strong>
                <div
                  style={{
                    width: "100%",
                    height: "1.5px",
                    background: "#808080",
                    overflow: "hidden",
                  }}
                />
                <div>
                  <List style={{ padding: "0" }}>
                    {elem.skills.map((skill) => {
                      return (
                        <ListItem disableGutters key={skill.name}>
                          <ListItemIcon
                            style={{ width: "100px", marginRight: "0.5rem" }}
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              style={{
                                filter: "drop-shadow(0 0 0.5px #59170D)",
                                display: "block",
                                margin: "auto",
                                height: "40px",
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={skill.name}
                            // secondary={secondary ? 'Secondary text' : null}
                          />
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
