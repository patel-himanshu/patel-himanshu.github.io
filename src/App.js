import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { Redirect, Route, Switch } from "react-router-dom";

import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PersonIcon from "@material-ui/icons/Person";
import TwitterIcon from "@material-ui/icons/Twitter";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import WorkIcon from "@material-ui/icons/Work";

import AppbarDrawer from "./components/AppbarDrawer";
import AboutMe from "./pages/AboutMe/AboutMe";
import Blogs from "./pages/Blogs/Blogs";
import ContactMe from "./pages/ContactMe/ContactMe";
import Experience from "./pages/Experience/Experience";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import theme from "./styling/theme";

const drawerOptions = [
  {
    label: "Home",
    icon: <HomeIcon style={{ color: "#8F5693" }} />,
    path: "/home",
  },
  {
    label: "About Me",
    icon: <PersonIcon style={{ color: "#EFB104" }} />,
    path: "/about-me",
  },
  {
    label: "Experience",
    icon: <WorkIcon style={{ color: "#B97E53" }} />,
    path: "/experience",
  },
  {
    label: "Projects",
    icon: <ViewCompactIcon style={{ color: "#119326" }} />,
    path: "/projects",
  },
  {
    label: "Blogs",
    icon: <MenuBookIcon style={{ color: "#EC4134" }} />,
    path: "/blogs",
  },
  {
    label: "Contact Me",
    icon: <EmailIcon style={{ color: "#7C7C7C" }} />,
    path: "/contact-me",
  },
];

const socialMediaHandles = [
  {
    label: "GitHub",
    icon: <GitHubIcon style={{ color: "#24292E" }} />,
    path: "https://github.com/patel-himanshu",
  },
  {
    label: "LinkedIn",
    icon: <LinkedInIcon style={{ color: "#0A66C2" }} />,
    path: "https://linkedin.com/in/patel-himanshu",
  },
  {
    label: "Twitter",
    icon: <TwitterIcon style={{ color: "#1A91DA" }} />,
    path: "https://twitter.com/Himanshu27299",
  },
];

function App() {
  const customTheme = createMuiTheme(theme);

  return (
    <ThemeProvider theme={customTheme}>
      <AppbarDrawer
        drawerOptions={drawerOptions}
        socialMediaHandles={socialMediaHandles}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/contact-me" component={ContactMe} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </AppbarDrawer>
    </ThemeProvider>
  );
}

export default App;
