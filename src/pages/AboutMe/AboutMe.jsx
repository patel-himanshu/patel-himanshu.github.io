import "./AboutMe.css";
import Skills from "./Skills";
import coding from "../../assets/coding1.png";

import Grid from "@material-ui/core/Grid";

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
            <p>
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
            </p>
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
        <p>
          <Skills />
        </p>
      </section>

      <br />
      {/* "Education" section */}
      <section className="page-section">
        <header>
          <span className="section-header">Education</span>
        </header>
      </section>
    </article>
  );
};

export default AboutMe;
