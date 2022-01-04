import React, {  useState } from 'react';
import Button from './Button';

const Post = ({setNewPost}) => {

  const [post , setPost] = useState('')
  const [title, setTitle] = useState('')
  const [userName, setUserName] = useState('')

  

const sendPost= () => {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              body: post,
              userId: 1,
              name: userName 
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => setNewPost(json))
            .then(setUserName(''))
            .then(setTitle(''))
            .then(setPost(''))
          
      }


    return (


        <div className='post'>
<div className="postContent">

    <label htmlFor="userName">Pseudo</label>
    <input type="text" id='userName' value={userName} onChange={ (e) => setUserName(e.target.value)}/>
  <label htmlFor="postTitle">Titre</label>
    <input type="text" id='postTitle'value={title} onChange={ (e) => setTitle(e.target.value)}/>
    <label htmlFor="postBody">Message</label> 
     <textarea type="text" id='postBody'value={post} onChange={ (e) => setPost(e.target.value)}/>
    <Button onClick={sendPost} text={'Envoyer'} />

    </div>            
        </div>
     
    );
};

export default Post;