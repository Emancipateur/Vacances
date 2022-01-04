import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'
import { logout } from '../store.js'



const Navigation = () => {
    const dispatch = useDispatch()
    const info = useSelector((state) => state.user.value )
    return (
        <div className='navigation'>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            {info[0] ?   <Link onClick={() => dispatch({logout}) } to="/"> Se deconnecter</Link> :<Link to="/login"> Se connecter</Link>  }
         
        </div>
    );
};

export default Navigation;