import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './styles.js';
import theme from '../../theme.js';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import { ThemeProvider }  from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';



const Header = () => {

    const classes = useStyles(theme);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleCategoryMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const menuId = 'primary-search-account-menu';

    const renderCategoryMenu = (
        <ThemeProvider theme={theme}>
            <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            color='secondary'
            >
                <MenuItem color='secondary' onClick={handleMenuClose}>
                    Artist
                </MenuItem >
                <MenuItem color='secondary' onClick={handleMenuClose}>
                    Characters
                </MenuItem >
                <MenuItem color='secondary' onClick={handleMenuClose}>
                    Groups
                </MenuItem>
                <MenuItem color='secondary' onClick={handleMenuClose}>
                    Random
                </MenuItem>
            </Menu>
        </ThemeProvider>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <ThemeProvider theme={theme}>
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                id={mobileMenuId}
                onClose={handleMobileMenuClose}
            >
                <MenuItem onClick={handleCategoryMenuOpen} aria-controls="primary-search-account-menu">
                    Categories
                </MenuItem>
                <MenuItem>
                    <FavoriteIcon color="secondary"/>
                    Favorite
                </MenuItem>
                <MenuItem>
                    Sign in
                </MenuItem>
                <MenuItem>
                    Register
                </MenuItem>
            </Menu>
        </ThemeProvider>
    );
    
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <ToolBar className={classes.navigation}>
                    <Typography color="inherit" variant="h6">Nothing</Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon color="secondary" />
                        </div>
                        <InputBase classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.desktopMenu}>
                        <Button color="inherit" className={classes.button}>Artist </Button>
                        <Button color="inherit" className={classes.button}>Characters </Button>
                        <Button color="inherit" className={classes.button}>Groups</Button>
                        <Button color="inherit" className={classes.button}>Random</Button>
                    </div>
                    <div className={classes.desktopMenu}>
                        <Button color="inherit" className={classes.button}><FavoriteIcon color="secondary"/>&nbsp;Favorite</Button> 
                        <Button color="inherit" className={classes.button}>Sign in</Button>
                        <Button color="secondary" className={classes.button}>Register</Button>
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
            {renderMobileMenu}
            {renderCategoryMenu}     
        </ThemeProvider>
    );
};

export default Header;