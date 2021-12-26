import React, { useEffect, useState } from 'react';

const Post = () => {

    const [post , setPost] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'foo',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
      },[])


    return (
        <div className='post'>
<div className="postContent">


    </div>            
        </div>
    );
};

export default Post;