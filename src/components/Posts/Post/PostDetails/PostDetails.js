import React, { useState } from 'react'
import useStyles from './styles';
import { Container } from '@material-ui/core';
import { useParams } from 'react-router-dom';

export const PostDetails = (post) => {

    let { postId } = useParams();

    return  (
        
        <>  <p>askld;flk;asdf;lkjahgk;ljh ID: {postId} Title {post.title} </p></>
        
    )
}
