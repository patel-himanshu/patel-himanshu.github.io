import React from "react";
import Grid from "@material-ui/core/Grid";

import ContactForm from "./ContactForm";
import SocialHandles from "./SocialHandles";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <article className="page-content">
      <section className="page-section">
        <header>
          <span className="section-header">Contact Me</span>
        </header>

        <Grid
          container
          style={{ justifyContent: "center", marginTop: "1rem" }}
          spacing={2}
        >
          <SocialHandles />
          <ContactForm />
        </Grid>
      </section>
    </article>
  );
};

export default ContactMe;
