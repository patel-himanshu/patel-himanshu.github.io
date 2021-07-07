import Grid from "@material-ui/core/Grid";

import CustomButton from "../../components/CustomButton";
import photo from "../../assets/himanshu-patel.jpg";
import resume from "../../assets/Himanshu Patel.pdf";
import "./Home.css";

const Home = () => {
  return (
    <article className="page-section">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ marginTop: "2rem" }}
      >
        {/* <Grid item lg={6} md={4} sm={8} xs={9}>         */}
        <Grid item lg={4} md={4} sm={4}>
          <img src={photo} alt="Himanshu Patel" className="my-photo" />
        </Grid>
        {/* <Grid item lg={6} md={8} sm={8} xs={11}>         */}
        <Grid item lg={6} md={7} sm={6}>
          <p className="introduction">
            Hello, folks! My name is
            <br />
            <span className="my-name">Himanshu Patel</span>
            <br />
            <span className="main-container-flip">
              I am&nbsp;
              <span className="container-flip">
                <span className="flip">a software developer. 💻</span>
                <span className="flip">an open source enthusiast. ⭐</span>
                <span className="flip">a lifelong learner. 📚</span>
                {/* <span className="flip">a technical writer. ✍🏼</span> */}
                <span className="flip">a Marvel fan. 🎬</span>
              </span>
            </span>
          </p>
        </Grid>
      </Grid>

      <Grid container justify="center">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <CustomButton>View My Resume</CustomButton>
        </a>
      </Grid>
    </article>
  );
};

export default Home;
