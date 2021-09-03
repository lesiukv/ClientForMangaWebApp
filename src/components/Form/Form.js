import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import { ThemeProvider }  from '@material-ui/core/styles';
import theme from '../../theme.js';
import { Paper, Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost } from '../../actions/posts.js';




const Form = () => {
    const classes = useStyles(theme);
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        title: '',
        parodie: '',
        tags: [],
        artists: [],
        group: '',
        language: '',
        category: '',
        titleImage: '',
        pages: [],
    });

    const clear = () => {
        setPostData({
            title: '',
            parodie: '',
            tags: '',
            artists: '',
            group: '',
            language: '',
            category: '',
            titleImage: '',
            pages: ''
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(postData));
        clear();
    }


    return (
        <ThemeProvider theme={theme}>
            <Paper className={classes.paper}>
                <form 
                autoComplete="off" id="form" noValidate className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit} 
                >
                    <Typography variant="h6" className={classes.formElement}>
                        Post manga
                    </Typography>
                    <TextField
                        className={classes.formElement}
                        name="title"
                        label="Title"
                        variant="outlined" 
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        fullWidth
                        color="secondary"
                    />

                    <TextField
                        className={classes.formElement}
                        name="parodie"
                        label="Parodie"
                        variant="outlined" 
                        value={postData.parodie}
                        onChange={(e) => setPostData({ ...postData, parodie: e.target.value })}
                        fullWidth
                        color="secondary"
                    />
                        
                    <TextField
                        className={classes.formElement}
                        name="tags"
                        label="Tags"
                        variant="outlined" 
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                        fullWidth
                        color="secondary"
                    />
                        
                    <TextField
                        className={classes.formElement}
                        name="artists"
                        label="Artists"
                        variant="outlined" 
                        value={postData.artists}
                        onChange={(e) => setPostData({ ...postData, artists: e.target.value.split(',') })}
                        fullWidth
                        color="secondary"
                    />
                        
                    <TextField
                        className={classes.formElement}
                        name="group"
                        label="Group"
                        variant="outlined" 
                        value={postData.group}
                        onChange={(e) => setPostData({ ...postData, group: e.target.value })}
                        fullWidth
                        color="secondary"
                    />
                        
                    <TextField
                        className={classes.formElement}
                        name="language"
                        label="Language"
                        variant="outlined" 
                        value={postData.language}
                        onChange={(e) => setPostData({ ...postData, language: e.target.value })}
                        fullWidth
                        color="secondary"
                    />

                    <TextField
                        className={classes.formElement}
                        name="category"
                        label="Category"
                        variant="outlined" 
                        value={postData.category}
                        onChange={(e) => setPostData({ ...postData, category: e.target.value })}
                        fullWidth
                        color="secondary"
                    />

                    <div className={classes.fileInput}>
                        Page title&nbsp;
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({base64}) => setPostData({ ...postData, titleImage: base64 }) }
                        />
                    </div>
                    <div className={classes.fileInput}>
                        Pages&nbsp;
                        <FileBase
                            type="file"
                            multiple={true}
                            onDone={({base64}) => setPostData({ ...postData, titleImage: base64 }) }
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" fullWidth size="large" type="submit">Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </ThemeProvider>
    )
}

export default Form;