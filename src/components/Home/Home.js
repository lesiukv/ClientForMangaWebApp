import React, { useEffect } from 'react';
import useStyles from './styles.js';

import theme from '../../theme.js';
import { Container, Button, Modal, Backdrop, Fade } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Form from '../Form/Form.js';
import Posts from '../Posts/Posts.js';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Home = () => {


    const classes = useStyles(theme);

    const [open, setOpen] = React.useState(null);
    const formId = 'form-menu';

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts());
    }, [dispatch])

    const handleFormOpen = () => setOpen(true);
    
    return (
        <>
        <Container>
            <Button className={classes.button} aria-haspopup="true" onClick={handleFormOpen} aria-controls={formId}><AddIcon color="secondary" fontSize="large" className={classes.addIcon}/></Button>
            <Posts/>
            <Form formFor='Post' open={open} setOpen={setOpen}/>
        </Container>   
        
        </>
    )
}

export default Home;