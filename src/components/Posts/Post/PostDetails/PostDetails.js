import React, { useState } from 'react'
import useStyles from './styles';
import { CardMedia, Container, Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export const PostDetails = (post) => {

    let { postId } = useParams();
    const classes = useStyles();


    return  (
        <Container className={classes.container}>
            <Grid key={post.post._id} alignItems="stretch" item xs={12} sm={6} md={4}>
                <CardMedia className={classes.titleImage} image={post.post.titleImage ? post.post.titleImage : post.post.selectedFile} /> 
                <Typography className={classes.title} variant="h5" >{post.post.title}</Typography>
            </Grid>
        </Container>
    )
}
