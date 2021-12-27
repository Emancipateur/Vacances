import React, {  useState } from 'react';
import Comment from './Comment';
import Post from './Post';

const CommentPost = () => {
   const [newPost , setNewPost] = useState('')



    return (
        <div>
            <Comment newPost={newPost} />
            <Post setNewPost={setNewPost} />
        </div>
    );
};

export default CommentPost;