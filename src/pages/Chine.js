import React from 'react';
import CommentPost from '../components/CommentPost';
import Navigation from '../components/Navigation';
import Post from '../components/Post';
import Profil from '../components/Profil';
import SideBar from '../components/SideBar';

const Chine = () => {
    return (
        <>
                <Navigation />
        <div className='chine'>
         
                <SideBar />
            <div className="chineContent">
                <h1>Chine</h1>
        <CommentPost />
            </div>
            
        </div>
        </>
    );
};

export default Chine;