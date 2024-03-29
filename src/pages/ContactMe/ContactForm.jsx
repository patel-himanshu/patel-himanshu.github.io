import React from "react";
import { TextareaAutosize } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import SendIcon from "@material-ui/icons/Send";

import CustomButton from "../../components/CustomButton";

const ContactForm = () => {
	return (
		<Grid item md={8} sm={12} xs={12}>
			{/* <form method="POST" action="https://formspree.io/f/mbjqyqlz"> */}
			<form method="POST" action="https://api.web3forms.com/submit">
				<input
					type="hidden"
					name="apikey"
					value="ee61b2f7-78eb-45bb-93d1-8546333ed074"
				/>
				<input
					type="hidden"
					name="redirect"
					value="https://web3forms.com/success"
				/>

				<fieldset>
					{/* <legend>
            <em>Contact Me</em>
          </legend> */}
					<label htmlFor="name">
						<strong>Name</strong> <span style={{ color: "red" }}>*</span>
					</label>
					<input type="text" id="name" name="name" required />
					<label htmlFor="email">
						<strong>E-Mail</strong> <span style={{ color: "red" }}>*</span>
					</label>
					<input type="email" id="email" name="email" required />
					<label htmlFor="subject">
						<strong>Subject</strong> <span style={{ color: "red" }}>*</span>
					</label>
					<input type="text" id="subject" name="subject" required />
					<label htmlFor="message">
						<strong>Message</strong> <span style={{ color: "red" }}>*</span>
					</label>

					{/* <textarea type="text" id="message" name="message" required /> */}
					<TextareaAutosize
						type="text"
						id="message"
						name="message"
						minRows="5"
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
	);
};

export default ContactForm;
