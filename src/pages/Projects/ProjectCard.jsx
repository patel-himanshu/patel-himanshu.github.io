import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import InfoIcon from "@material-ui/icons/Info";
import LaunchIcon from "@material-ui/icons/Launch";

import "./Projects.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 350,
    margin: "0.5rem",
    boxShadow: "0 0 5px purple",
    backgroundColor: "#e0cae2",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ProjectCard = ({ project }) => {
  const classes = useStyles();
  let imagePath = project.image
    ? process.env.PUBLIC_URL + project.image
    : process.env.PUBLIC_URL + "/projects/placeholder.png";

  return (
    <Card className={classes.root}>
      <CardHeader
        title={project.name}
        subheader={project.subclasses}
        titleTypographyProps={{ variant: "subtitle1" }}
        subheaderTypographyProps={{ variant: "subtitle2" }}
      />
      <CardMedia
        component="img"
        alt={project.name}
        // height="250"
        src={imagePath}
        title={project.name}
      />

      <CardActions style={{ padding: 0 }}>
        {/* {project.details && (
          <a
            href={project.details}
            target="_blank"
            rel="noopener noreferrer"
            title="More Info"
          >
            <IconButton aria-label="More Info">
              <InfoIcon />
            </IconButton>
          </a>
        )} */}
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            title="Source Code (GitHub)"
          >
            <IconButton aria-label="Source Code (GitHub)">
              <GitHubIcon />
            </IconButton>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            title="Launch Demo"
          >
            <IconButton aria-label="Launch Demo">
              <LaunchIcon />
            </IconButton>
          </a>
        )}
      </CardActions>

      <hr style={{ margin: 0 }} />

      <CardContent>
        <Typography variant="body1" component="p">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(ProjectCard);
