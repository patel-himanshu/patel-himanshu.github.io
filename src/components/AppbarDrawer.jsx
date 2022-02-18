import { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import MenuIcon from "@material-ui/icons/Menu";

import palette from "../styling/palette";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		// background: "#245A99",
		// background: "-webkit-linear-gradient(top left, #245a99, #3a8ba5)",
		// background: "-moz-linear-gradient(top left, #245a99, #3a8ba5)",
		background: "linear-gradient(to bottom right, #245a99, #3a8ba5)",
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: "none",
	},
	paper: {
		backgroundColor: "#ebebeb",
		boxShadow: "0 0 20px black",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		overflowX: "hidden",
	},
	drawerClose: {
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: "hidden",
		width: theme.spacing(8) + 1,
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		// padding: theme.spacing(3),
	},
	socials: {
		marginTop: "auto",
		marginBottom: "0.5rem",
	},
}));

const AppbarDrawer = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const location = useLocation();

	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerOpen = () => {
		setDrawerOpen(true);
	};

	const handleDrawerClose = () => {
		setDrawerOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />

			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: drawerOpen,
				})}
			>
				<Toolbar style={{ padding: "0 1rem" }}>
					<IconButton
						color="inherit"
						aria-label="Open Menu Drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: drawerOpen,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						<Link to="/" style={{ color: "white", textDecoration: "none" }}>
							Himanshu Patel
							{/* <span style={{ fontSize: "0.85rem" }}>Full Stack Developer</span> */}
						</Link>
					</Typography>

					<div className={classes.grow} />
				</Toolbar>
			</AppBar>

			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: drawerOpen,
					[classes.drawerClose]: !drawerOpen,
				})}
				classes={{
					paper: clsx(classes.paper, {
						[classes.drawerOpen]: drawerOpen,
						[classes.drawerClose]: !drawerOpen,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<KeyboardArrowRightIcon />
						) : (
							<KeyboardArrowLeftIcon />
						)}
					</IconButton>
					<strong>Welcome</strong>
				</div>
				<Divider />
				<List>
					{props.drawerOptions.map(({ label, icon, path }) => (
						<NavLink
							key={label}
							to={path}
							style={{ color: "black", textDecoration: "none" }}
							activeStyle={{ color: palette.primary2 }}
						>
							<ListItem button>
								<ListItemIcon style={{ minWidth: "3rem" }}>{icon}</ListItemIcon>
								<ListItemText primary={label} />
							</ListItem>
						</NavLink>
					))}
				</List>
				<Divider />
				{location.pathname !== "/" && props.socialMediaHandles && (
					<>
						<List className={classes.socials}>
							{props.socialMediaHandles.map(({ label, icon, path }) => (
								<a
									key={label}
									href={path}
									target="_blank"
									rel="noopener noreferrer"
									style={{ color: "black", textDecoration: "none" }}
								>
									<ListItem button>
										<ListItemIcon style={{ minWidth: "3rem" }}>
											{icon}
										</ListItemIcon>
										<ListItemText primary={label} />
									</ListItem>
								</a>
							))}
						</List>
					</>
				)}
			</Drawer>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{props.children}
			</main>
		</div>
	);
};

export default AppbarDrawer;
