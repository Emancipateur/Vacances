import React, { useEffect, useState } from 'react';
import Profil from './Profil';




const Comment = () => {

    const [dataPost, setDataPost] = useState([])
 
    
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setDataPost(data))
    },[])


    

    return (
       
        <div className='comment'>
         <h2>Section Commentaires</h2>



            {dataPost.filter((item )=> item.id < 10)
            .map((item) => 
            <div className="commentContent">
                <Profil />
                
             <div className="commentBody"><h3>{item.title}</h3>
             
             <p>{item.body}</p>
             </div>
             </div>


             
            
           
              
            
            )}
         
        </div>
    );
};

export default Comment;