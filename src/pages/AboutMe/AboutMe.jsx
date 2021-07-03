import "./AboutMe.css";
import Skills from "./Skills";
import coding from "../../assets/coding1.png";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const education = [
  {
    institute: "IIIT, Naya Raipur (C.G.)",
    degree: "B.Tech (Computer Science & Engineering)",
    years: "2018 - Present",
    grade: "CGPA: 8.87/10.00",
  },
  {
    institute: "Delhi Public School, Bhilai (C.G.)",
    degree: "Senior Secondary Level",
    years: "2017",
    grade: "Percentage: 85.2%",
  },
  {
    institute: "Delhi Public School, Bhilai (C.G.)",
    degree: "Secondary Level",
    years: "2015",
    grade: "CGPA: 10/10",
  },
];

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
                  👨🏼‍🎓 a final-year CSE undergrad at IIIT Naya Raipur (India)
                </li>
                <li>💼 working on getting a job/internship</li>
                <li>💻 primarily interested in full-stack development</li>
                <li>🧰 learning React and Django</li>
                <li>👩‍💻 trying to become more involved in open source</li>
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
        </header>
        <div>
          <Skills />
        </div>
      </section>

      <br />
      {/* "Education" section */}
      <section className="page-section">
        <header>
          <span className="section-header">Education</span>
        </header>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
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

export default AboutMe;
