import React, {  useState } from 'react';
import Comment from './Comment';
import Post from './Post';

const CommentPost = ({background}) => {
   const [newPost , setNewPost] = useState('')



    return (
        <div>
            <Comment newPost={newPost} background={background} />
            <Post setNewPost={setNewPost} />
        </div>
    );
};

export default CommentPost;