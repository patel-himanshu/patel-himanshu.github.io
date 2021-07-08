import { TextareaAutosize } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SendIcon from "@material-ui/icons/Send";

import CustomButton from "../../components/CustomButton";
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
          <Grid item md={4} sm={8} xs={12}>
            <div style={{ textAlign: "center" }}>
              Please feel free to contact me regarding any questions, feedback
              or suggestions that you may have.
            </div>
            <table className="contact-table">
              <tbody>
                <tr>
                  <td>E-Mail</td>
                  <td>:</td>
                  <td>
                    <a href="mailto:hpatel27299@gmail.com">
                      hpatel27299@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>GitHub</td>
                  <td>:</td>
                  <td>
                    <a
                      href="https://github.com/patel-himanshu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @patel-himanshu
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td>:</td>
                  <td>
                    <a
                      href="https://linkedin.com/in/patel-himanshu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @patel-himanshu
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>:</td>
                  <td>
                    <a
                      href="https://twitter.com/_Patel_Himanshu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @_Patel_Himanshu
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Grid>

          <Grid item md={8} sm={12} xs={12}>
            <form method="POST" action="https://formspree.io/f/mbjqyqlz">
              <fieldset>
                {/* <legend>
                  <em>Contact Me</em>
                </legend> */}
                <label htmlFor="name">
                  <strong>Name</strong> <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">
                  <strong>E-Mail</strong>{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="subject">
                  <strong>Subject</strong>{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" id="subject" name="subject" required />
                <label htmlFor="message">
                  <strong>Message</strong>{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                {/* <textarea type="text" id="message" name="message" required /> */}
                <TextareaAutosize
                  type="text"
                  id="message"
                  name="message"
                  rowsMin="5"
                  required
                />
                <div align="center">
                  <CustomButton
                    type="submit"
                    size="normal"
                    style={{ margin: "1rem 0" }}
                    endIcon={<SendIcon />}
                  >
                    Send E-Mail
                  </CustomButton>
                </div>
              </fieldset>
            </form>
          </Grid>
        </Grid>
      </section>
    </article>
  );
};

export default ContactMe;
