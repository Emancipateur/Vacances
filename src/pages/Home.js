import React from 'react';
import SideBar from '../components/SideBar';
import image from '../assets/homePic.jpg'
import { useSelector} from 'react-redux'


const Home = () => {

    const info = useSelector((state) => state.user.value )


    return (
        <>
        {/* <Navigation /> */}
       
        <div className='home'>
          
        <SideBar/>
            <div className="homeContent">
                <h1>Près pour le voyage {info[0] ? ( info[0].name + ' ?') : null}</h1>    
                    <h2>Ici tout est possible</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque temporibus nemo blanditiis dolore ipsa deleniti esse, ea explicabo est porro vero nam at tempore, corrupti ipsum soluta. Consequatur magni libero iste repellat saepe nihil eligendi numquam, veritatis architecto asperiores voluptas accusantium quo dolore recusandae fugit officiis quod impedit dignissimos ipsum reprehenderit quos at ipsam voluptatem? Quod quo culpa dolorem odit similique ut tempore accusantium fugit sunt temporibus vel porro, delectus recusandae laboriosam perferendis aut quasi consequatur iure consectetur qui veniam. Iure aliquid consequatur consectetur tempore porro dolorum cumque illo <dolorem className=""></dolorem></p>
             <img src={image} alt="" className="homePic" />
                    </div>
        </div>
        </>
    );
};

export default Home;