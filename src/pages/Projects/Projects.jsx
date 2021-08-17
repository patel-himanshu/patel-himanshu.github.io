import React from "react";
import Grid from "@material-ui/core/Grid";

import CustomButton from "../../components/CustomButton";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectInfo";
import "./Projects.css";

const Projects = () => {
  return (
    <article className="page-content">
      <section className="page-section">
        <header>
          <span className="section-header">Projects</span>
        </header>

        <Grid container>
          {projects.map((project, idx) => (
            <Grid container item xs={12} md={6} lg={4}>
              <ProjectCard key={idx} project={project} />
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
          <a
            href="https://github.com/patel-himanshu?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton
              size="1rem"
              padding="0.5rem 1rem"
              bgColor1="#4608AD"
              bgColor2="#57228f"
            >
              View more on GitHub
            </CustomButton>
          </a>
        </Grid>
      </section>
    </article>
  );
};

export default Projects;
