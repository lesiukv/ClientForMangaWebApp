import React, { useEffect } from 'react';
import useStyles from './styles.js';
import Header from '../Header/Header.js';
import theme from '../../theme.js';
import { ThemeProvider }  from '@material-ui/core/styles';
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

    const handleFormOpen = () => {
        setOpen(true);
    };

    const handleFormClose = () => {
        setOpen(false);
    };

    const renderForm = (
        <>
        <Modal 
            open={open}
            onClose={handleFormClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            className={classes.modal}
            BackdropProps={{
            timeout: 500,
            }}>
            <Fade in={open}>
                <Form/>
            </Fade>
        </Modal>
            
        </>
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <Header/>
                <Container>
                    <Container className={classes.add} type='button'>
                        <Button className={classes.button} aria-haspopup="true" onClick={handleFormOpen} aria-controls={formId}><AddIcon color="secondary" fontSize="large" className={classes.addIcon}/></Button>
                    </Container>
                    {renderForm}
                    <Posts/>
                </Container>   
            </ThemeProvider>
        </>
    );
};

export default Home;