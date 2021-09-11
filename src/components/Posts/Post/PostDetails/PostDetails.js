import React, {useState} from 'react'
import useStyles from './styles';
import { CardMedia, Container, Grid, CircularProgress, 
    Typography, Menu, MenuItem, IconButton } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../../actions/posts';
import Form from '../../../Form/Form.js';
import { useHistory } from 'react-router-dom';



export const PostDetails = (post) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    let history = useHistory();
    const dispatch = useDispatch();

    if (!post.post) {
        return (<Container className={classes.loadingContainer}><CircularProgress className={classes.loading}/></Container>);
    }

    const handleMenuOpen = e => setAnchorEl(e.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    function handleDelete() {
        dispatch(deletePost(post.post._id));
        history.push("/home");
    }

    const menuId = 'menu-post-manipulation';

    const renderMenu = (
        <Menu
      
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            id={menuId}
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            >
                <MenuItem>
                    Update
                </MenuItem>
                <MenuItem className={classes.delete} onClick={handleDelete}>
                    Delete
                </MenuItem>
        </Menu>
    );

    const updateForm = (
        <Form formFor='Update' id={post.post._id}/>
    );

    return  (
        <>
        <Container className={classes.container}>
            <Grid key={post.post._id} className={classes.detailsContainer} alignItems="stretch">
                <Grid className={classes.details} item xs={12} sm={4}>
                    <CardMedia className={classes.titleImage} image={post.post.titleImage} /> 
                </Grid>
                <Grid className={classes.details} item xs={12} sm={3} md={5}>
                    <Typography className={classes.title} variant="h4" >{post.post.title}</Typography>
                    <div className={classes.subDetails}><Typography>Parodie:</Typography>&nbsp;<span className={classes.span}>{post.post.parodie}</span></div>
                    <div className={classes.subDetails}><Typography>Language:</Typography>&nbsp;<span className={classes.span}>{post.post.language}</span></div>
                    <div className={classes.subDetails}><Typography>Group:</Typography>&nbsp;<span className={classes.span}>{post.post.group}</span></div>
                    <div className={classes.subDetails}><Typography>Category:</Typography>&nbsp;<span className={classes.span}>{post.post.category}</span></div>
                    <div className={classes.subDetails}><Typography>Tags:</Typography>&nbsp;{
                        post.post.tags.map((tag) => 
                            (<>&nbsp;<span className={classes.span}>
                                {tag}
                            </span></>))}
                    </div>
                    <div className={classes.subDetails}><Typography>Artists:&nbsp;</Typography>{
                        post.post.artists.map((artist) => 
                            (<>&nbsp;<span className={classes.span}>
                                {artist}
                            </span></>))}
                    </div>
                </Grid>
                
                <IconButton className={classes.iconButton} onClick={handleMenuOpen} aria-controls={menuId} aria-haspopup="true">
                    <MoreIcon className={classes.moreIcon}/>
                </IconButton>
                
            </Grid>
        </Container>
        {renderMenu}
        </>
    )
}
