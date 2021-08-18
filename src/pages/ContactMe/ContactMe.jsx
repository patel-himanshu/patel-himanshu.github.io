import { useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import ContactForm from "./ContactForm";
import SocialHandles from "./SocialHandles";
import "./ContactMe.css";

const ContactMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
