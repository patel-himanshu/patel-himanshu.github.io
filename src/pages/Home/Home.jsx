import React from "react";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
import TwitterIcon from "@material-ui/icons/Twitter";

import CustomButton from "../../components/CustomButton";
import photo from "../../assets/himanshu-patel.jpg";
import resume from "../../assets/Himanshu Patel.pdf";
import "./Home.css";

const Home = () => {
  return (
    <article className="page-section">
      <Grid
        container
        id="home-page"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* <Grid item lg={6} md={4} sm={8} xs={9}>         */}
        <Grid item lg={4} md={4} sm={4}>
          <img src={photo} alt="Himanshu Patel" className="my-photo" />
        </Grid>
        {/* <Grid item lg={6} md={8} sm={8} xs={11}>         */}
        <Grid item lg={6} md={7} sm={6}>
          <p className="introduction">
            Hello, folks! My name is
            <br />
            <span className="my-name">Himanshu Patel</span>
            <br />
            <span className="main-container-flip">
              I am&nbsp;
              <span className="container-flip">
                <span className="flip">
                  a software developer.{" "}
                  <span role="img" aria-label="laptop">
                    💻
                  </span>
                </span>
                <span className="flip">
                  an open source enthusiast.{" "}
                  <span role="img" aria-label="star">
                    ⭐
                  </span>
                </span>
                <span className="flip">
                  a lifelong learner.{" "}
                  <span role="img" aria-label="books">
                    📚
                  </span>
                </span>
                {/* <span className="flip">a technical writer. <span role="img" aria-label="writing">✍🏼</span></span> */}
                <span className="flip">
                  a big MCU fan.{" "}
                  <span role="img" aria-label="movie clapper">
                    🎬
                  </span>
                </span>
              </span>
            </span>
          </p>
        </Grid>
      </Grid>

      <div className="links">
        <Grid container justifyContent="center">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <CustomButton>View My Resume</CustomButton>
          </a>
        </Grid>
        <Grid container justifyContent="center" className="logos">
          <a href="mailto:hpatel27299@gmail.com" title="email">
            <MailOutlineSharpIcon fontSize="large" id="mail-logo" />
          </a>
          <a
            href="https://github.com/patel-himanshu"
            target="_blank"
            rel="noopener noreferrer"
            title="github"
          >
            <GitHubIcon fontSize="large" id="github-logo" />
          </a>
          <a
            href="https://linkedin.com/in/patel-himanshu"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
          >
            <LinkedInIcon fontSize="large" id="linkedin-logo" />
          </a>
          <a
            href="https://twitter.com/_Patel_Himanshu"
            target="_blank"
            rel="noopener noreferrer"
            title="twitter"
          >
            <TwitterIcon fontSize="large" id="twitter-logo" />
          </a>
        </Grid>
      </div>
    </article>
  );
};

export default Home;
