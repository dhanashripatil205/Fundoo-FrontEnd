import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { Google } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function HeaderNew({ listenToHeader }) {
  const navigate = useNavigate();
  async function logout() {
    localStorage.clear();
    await navigate("/");
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(!mobileMoreAnchorEl);
  };

  const handleMenuClose = () => {
    setAnchorEl(!anchorEl);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <RefreshIcon />
        Refresh
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ViewStreamOutlinedIcon />
        ViewStream
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <SettingsIcon />
        Settings
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Google />
        GoogleAccount
      </MenuItem>
      <MenuItem onClick={logout}>
        {" "}
        <LogoutIcon onClick={logout} />
        LogoutI
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <RefreshIcon />
        Refresh
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <ViewStreamOutlinedIcon />
        ViewStream
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <SettingsIcon />
        Settings
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Google />
        GoogleAccount
      </MenuItem>
      <MenuItem onClick={logout}>
        {" "}
        <LogoutIcon onClick={logout} />
        LogoutI
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            style={{ color: "black" }}
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={() => listenToHeader()} />
          </IconButton>
          <LightbulbCircleIcon style={{ backgroundColor: "yellow" }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "black", marginLeft: "10px" }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Keep
          </Typography>

          <Search style={{ color: "black" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large" color="inherit" style={{ color: "black" }}>
              <RefreshIcon />
            </IconButton>

            <IconButton size="large" color="inherit" style={{ color: "black" }}>
              <ViewStreamOutlinedIcon />
            </IconButton>
            <IconButton size="large" color="inherit" style={{ color: "black" }}>
              <SettingsIcon />
            </IconButton>

            <IconButton size="large" color="inherit" style={{ color: "black" }}>
              <Badge color="error">
                <ViewCompactIcon onClick={handleMenuClose} />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              style={{ color: "black" }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
