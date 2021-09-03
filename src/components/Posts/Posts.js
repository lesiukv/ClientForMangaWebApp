import React from 'react';
import Post from './Post/Post.js';
import { useSelector } from 'react-redux';
import { Grid, Container } from '@material-ui/core';
import useStyless from './styles.js';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PostDetails } from './Post/PostDetails/PostDetails.js';


const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyless();
    console.log(posts);
    
    return (
        <Router>
            
            <Switch>
                <Route path="/:postId" render={({match}) => (
                    <PostDetails post={posts.find(p => { if (p._id === match.params.postId) return p;})} />
                )} />
                <Route  path="/">
                    <Container className={classes.container}>
                        <Grid container alignItems="stretch" spacing={2}>
                            {
                                posts.slice(0).reverse().map((post) => (
                                    <Grid key={post._id} item xs={12} sm={6} md={4}>
                                        <Link to={`/${post._id}`} >
                                            <Post post={post} />
                                        </Link>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Container>
                </Route>
            </Switch>
        </Router>
            
     
    );
};

export default Posts;