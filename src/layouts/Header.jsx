import { useState, Fragment, useRef } from "react";

import {
  SwipeableDrawer,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  HomeOutlined,
  Groups2Outlined,
  SettingsSuggestOutlined,
  AddCircleOutline,
  Menu as MenuIcon,
} from "@mui/icons-material";
import TeamSelector from "../components/TeamSelector";
import ModalStepper from "./ModalStepper";
import { Link } from "react-router-dom";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const stepperModalElement = useRef();

  const menuData = [
    { name: "Home", icon: <HomeOutlined />, relativePath: "/" },
    {
      name: "Technologies",
      icon: <SettingsSuggestOutlined />,
      relativePath: "/technologies",
    },
    { name: "Teams", icon: <Groups2Outlined />, relativePath: "/teams" },
  ];

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpenMenu(false)}>
      {menuData.map((item, index) => (
        <ListItem button component={Link} to={item.relativePath} key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );
  return (
    <Fragment>
      <Fragment key="side-menu">
        <SwipeableDrawer
          onOpen={() => setOpenMenu(true)}
          open={openMenu}
          anchor={"left"}
          onClose={() => setOpenMenu(false)}
        >
          {getList()}
        </SwipeableDrawer>
      </Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenMenu(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Technology Radar
            </Typography>
            <TeamSelector />
            <Button
              color="inherit"
              onClick={() => stepperModalElement.current.handleOpen()}
            >
              <AddCircleOutline />
              &nbsp; <b>Associate Technologies </b>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <ModalStepper ref={stepperModalElement} />
    </Fragment>
  );
}
