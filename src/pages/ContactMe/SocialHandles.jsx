import React from "react";
import Grid from "@material-ui/core/Grid";

const SocialHandles = () => {
  return (
    <Grid item md={4} sm={8} xs={12}>
      <div style={{ textAlign: "center" }}>
        Please feel free to contact me regarding any questions, feedback or
        suggestions that you may have.
      </div>
      <table className="contact-table">
        <tbody>
          <tr>
            <td>E-Mail</td>
            <td>:</td>
            <td>
              <a
                href="mailto:hpatel27299@gmail.com"
                className="underline-animation"
              >
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
                className="underline-animation"
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
                className="underline-animation"
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
                className="underline-animation"
                rel="noopener noreferrer"
              >
                @_Patel_Himanshu
              </a>
            </td>
          </tr>
          <tr>
            <td>Bio Link</td>
            <td>:</td>
            <td>
              <a
                href="https://bio.link/patel_himanshu"
                target="_blank"
                className="underline-animation"
                rel="noopener noreferrer"
              >
                @patel_himanshu
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Grid>
  );
};

export default SocialHandles;
