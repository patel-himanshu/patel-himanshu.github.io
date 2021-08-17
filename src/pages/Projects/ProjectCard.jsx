import { memo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

import "./Projects.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // minWidth: 350,
    margin: "0.5rem 0.25rem",
    boxShadow: "0 0 7px purple",
    backgroundColor: "#e0cae2",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    padding: "0",
    justifyContent: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#eed6f9",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProjectCard = ({ project }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let imagePath = project.image
    ? process.env.PUBLIC_URL + "/projects/" + project.image
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

      <CardActions className={classes.cardActions}>
        {project.details && (
          <>
            <IconButton
              aria-label="More Info"
              style={{ color: "#994407" }}
              type="button"
              onClick={handleOpen}
            >
              <InfoIcon />
            </IconButton>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <h1 id="transition-modal-title">{project.name}</h1>
                  <section id="transition-modal-description">
                    <strong>Technologies Used</strong>:{" "}
                    {project.technologiesUsed.join(", ")}
                    <br />
                    <br />
                    <strong>Additional Details</strong>:
                    <ul>
                      {project.details.map((item, idx) => {
                        return <li key={idx}>{item}</li>;
                      })}
                    </ul>
                  </section>
                </div>
              </Fade>
            </Modal>
          </>
        )}
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            title="Source Code (GitHub)"
          >
            <IconButton
              aria-label="Source Code (GitHub)"
              style={{ color: "black" }}
            >
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
            <IconButton aria-label="Launch Demo" style={{ color: "#1751c7" }}>
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

export default memo(ProjectCard);
