import "./ContactMe.css";
import { TextareaAutosize } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import CustomButton from "../../components/CustomButton";

const ContactMe = () => {
  return (
    <article>
      <form method="POST" action="https://formspree.io/f/mbjqyqlz">
        <fieldset>
          <legend>Contact Me</legend>

          <p>
            Please feel free to contact me regarding any questions, feedback or
            suggestions that you may have.
          </p>

          <label for="name">
            Name <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" id="name" name="name" required />

          <label for="email">
            E-Mail <span style={{ color: "red" }}>*</span>
          </label>
          <input type="email" id="email" name="email" required />

          <label for="subject">
            Subject <span style={{ color: "red" }}>*</span>
          </label>
          <input type="text" id="subject" name="subject" required />

          <label for="message">
            Message <span style={{ color: "red" }}>*</span>
          </label>
          {/* <textarea type="text" id="message" name="message" required /> */}
          <TextareaAutosize
            type="text"
            id="message"
            name="message"
            rowsMin="6"
            required
          />

          <div align="center">
            <CustomButton
              type="submit"
              style={{
                margin: "1rem 0",
                letterSpacing: "1px",
              }}
              endIcon={<SendIcon />}
            >
              Send E-Mail
            </CustomButton>
          </div>
        </fieldset>
      </form>
    </article>
  );
};

export default ContactMe;
