import React, { useEffect, useState } from 'react';

const Profil = ({userName}) => {
   
    const [user , setUser] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setUser(data.results))
      },[])

    return (
        <div className='profil'>
            {user.map((item) => { 
                return (

                    <div className='profilContent'>
                          <img src={item.picture.medium} alt="profilPicture" />
                <h4>{userName ? userName : item.name.first}</h4>
                </div>)
            })}
  
        </div>
    );
};

export default Profil;