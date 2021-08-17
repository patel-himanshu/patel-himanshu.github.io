import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import coding from "../../assets/coding1.png";
import { education } from "./education";
import Skills from "./Skills";
import "./AboutMe.css";

const MemoedSkills = React.memo(Skills);

const AboutMe = () => {
  return (
    <article className="page-content">
      {/* "About Me" section */}
      <section className="page-section">
        <header>
          <span className="section-header">About Me</span>
        </header>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid item md={5}>
            <div>
              My name is Himanshu Patel. Currently, I am
              <ul>
                <li>
                  <span role="img" aria-label="student">
                    👨🏼‍🎓
                  </span>{" "}
                  a final-year CSE undergrad at IIIT Naya Raipur (India)
                </li>
                <li>
                  <span role="img" aria-label="briefcase">
                    💼
                  </span>{" "}
                  working on getting a job/internship
                </li>
                <li>
                  <span role="img" aria-label="laptop">
                    💻
                  </span>{" "}
                  interested in full-stack development
                </li>
                <li>
                  <span role="img" aria-label="toolbox">
                    🧰
                  </span>{" "}
                  learning React and Django
                </li>
                <li>
                  <span role="img" aria-label="student with laptop">
                    👩‍💻
                  </span>{" "}
                  trying to become more involved in open source
                </li>
              </ul>
              I enjoy writing code, especially in Python and JavaScript.
              <br />I am always eager to learn and explore new things.
            </div>
          </Grid>
          <Grid item md={4}>
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
        <div>
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

export default React.memo(AboutMe);
