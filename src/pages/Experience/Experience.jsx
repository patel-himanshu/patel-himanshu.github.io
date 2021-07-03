import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Experience.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0 1rem",
  },
  heading: {
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
  },
}));

const internshipDetails = [
  {
    label: "label1",
    company: "Cartel101",
    role: "Software Developer Intern",
    details: [
      "Work from Home (April 2021 - May 2021)",
      "Worked on the front end of an Asset Performance Manager (APM) project, using React and Material-UI",
      "Performed multiple API integrations on the front end, and used Redux for state management",
    ],
  },
  {
    label: "label2",
    company: "ChaloPadhe",
    role: "Software Developer Intern",
    details: [
      "Work from Home (August 2020 - October 2020)",
      "Helped in the creation of multiple APIs using Django REST Framework",
      "Helped in developing the front end of the website for the organization using Angular",
    ],
  },
];

const Experience = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section className="page-section">
        <header>
          <span className="section-header">Experience</span>
        </header>

        {/* Internship section section */}
        <section>
          <h2 className="subsection-header">Internships</h2>
          <div className="underline" />
          <div className={classes.root}>
            {internshipDetails.map((internship) => {
              return (
                <Accordion
                  expanded={expanded === `${internship.label}`}
                  onChange={handleChange(`${internship.label}`)}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container>
                      <Grid item lg={2} md={1} xs={4}>
                        <Typography
                          className={classes.heading}
                          style={{ margin: "auto" }}
                        >
                          <strong>{internship.company}</strong>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          className={classes.secondaryHeading}
                          style={{ margin: "auto" }}
                        >
                          {internship.role}
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="accordian-details">
                      {internship.details.map((detail) => {
                        return <li>{detail}</li>;
                      })}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </section>

        {/* Positions of Responsibility section */}
        <section>
          <h2 className="subsection-header">Positions of Responsibility</h2>
          <div className="underline" />
          <ul className="positions-responsibility">
            <li>Core Member of The Society of Coders, IIIT-Naya Raipur</li>
            <li>
              Website Manager of college’s website for Student Activity Center
              and IEEE Student Branch
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default Experience;
