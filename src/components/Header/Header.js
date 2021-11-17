import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "./styles.js";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import RegisterForm from "../Form/RegisterForm";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/auth";

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const dispatch = useDispatch();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { isAuthenticated } = useSelector((state) => state?.auth);
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  const handleCategoryMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenRegisterForm = () => {
    setOpenRegisterForm(true);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const handleOpenLoginForm = () => {
    setOpenLoginForm(true);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(false);
    handleMobileMenuClose();
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(false);
  };

  const renderCategoryMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      color="secondary"
    >
      <MenuItem color="secondary" onClick={handleMenuClose}>
        <Link to="/topic/artists">Artist</Link>
      </MenuItem>
      <MenuItem color="secondary" onClick={handleMenuClose}>
        <Link to="/topic/characters">Characters</Link>
      </MenuItem>
      <MenuItem color="secondary" onClick={handleMenuClose}>
        <Link to="/topic/group">Groups</Link>
      </MenuItem>
      <MenuItem color="secondary" onClick={handleMenuClose}>
        Random
      </MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      id={mobileMenuId}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        onClick={handleCategoryMenuOpen}
        aria-controls="primary-search-account-menu"
        className={classes.categories}
      >
        Categories
      </MenuItem>
      {isAuthenticated && (
        <div>
          <MenuItem>
            <Link to="/favorites">
              {" "}
              <FavoriteIcon color="secondary" />
              Favorite
            </Link>
          </MenuItem>
          <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <MenuItem onClick={() => handleOpenLoginForm()}>Sign in</MenuItem>
          <MenuItem onClick={() => handleOpenRegisterForm()}>Register</MenuItem>
        </div>
      )}
    </Menu>
  );

  return (
    <>
      <AppBar position="static">
        <ToolBar className={classes.navigation}>
          <Typography color="inherit" variant="h6">
            <Link to="/home">Nothing</Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon color="secondary" />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.categories}>
            <Button color="inherit" className={classes.button}>
              <Link to="/topic/artists">Artist</Link>
            </Button>
            <Button color="inherit" className={classes.button}>
              <Link to="/topic/characters">Characters</Link>
            </Button>
            <Button color="inherit" className={classes.button}>
              <Link to="/topic/group">Groups</Link>
            </Button>
            <Button color="inherit" className={classes.button}>
              Random
            </Button>
          </div>
          <div className={classes.desktopMenu}>
            {!isAuthenticated && (
              <>
                <Button
                  onClick={() => handleOpenLoginForm()}
                  color="inherit"
                  className={classes.button}
                >
                  Sign in
                </Button>
                <Button
                  onClick={() => handleOpenRegisterForm()}
                  color="secondary"
                  className={classes.button}
                >
                  Register
                </Button>
              </>
            )}
            {isAuthenticated && (
              <>
                <Button color="inherit" className={classes.button}>
                  <FavoriteIcon color="secondary" />
                  &nbsp;Favorite
                </Button>
                <Button
                  onClick={() => handleLogout()}
                  color="secondary"
                  className={classes.button}
                >
                  Logout
                </Button>
              </>
            )}
          </div>
          <div className={classes.mobileMenu}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </ToolBar>
      </AppBar>
      <RegisterForm
        open={openRegisterForm}
        setOpen={setOpenRegisterForm}
        purpose={true}
      />
      <RegisterForm
        open={openLoginForm}
        setOpen={setOpenLoginForm}
        purpose={false}
      />
      {renderMobileMenu}
      {renderCategoryMenu}
    </>
  );
};

export default Header;
