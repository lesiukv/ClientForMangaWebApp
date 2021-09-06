import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';
import { Grid, Container } from '@material-ui/core';
import useStyless from './styles.js';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import { PostDetails } from './Post/PostDetails/PostDetails.js';


const Posts = () => {
    const posts =  useSelector( (state) =>  state.posts);
    const classes = useStyless();
    let { path, url } = useRouteMatch();
    console.log(posts);
    
    return (
        <>
            <Switch>
                <Route exact path={path} render={() => 
                    <Container className={classes.container}>
                        <Grid container alignItems="stretch" spacing={2}> {
                            posts.slice(0).reverse().map((post) => (
                                <Grid key={post._id} item xs={12} sm={6} md={4}>
                                    <Link to={`${url}/${post._id}`} >
                                        <Post post={post} />
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                } /> 
                <Route path={`${path}/:postId`} render={({match}) => (
                    <PostDetails post={posts.find(p => p._id === match.params.postId)} />
                )} />    
            </Switch>
        </>      
    )
}

export default Posts;