import { alpha, makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(1),
        width: '100%',
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
        width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '300px',

        },
    },
    navigation: {
        display: 'inline',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    mobileMenu: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    desktopMenu: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
}))