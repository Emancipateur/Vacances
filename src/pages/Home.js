import React from 'react';
import Navigation from '../components/Navigation';
import SideBar from '../components/SideBar';
import Comment from '../components/Comment';
import Profil from '../components/Profil';

const Home = () => {



    return (
        <>
        <Navigation />
       
        <div className='home'>
          
        <SideBar/>
            <div className="homeContent">
                <h1>Près pour le voyage</h1>
            </div>
             
        </div>
      <Profil />
        </>
    );
};

export default Home;