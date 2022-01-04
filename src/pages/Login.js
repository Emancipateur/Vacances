import React, { useState } from 'react';

import { useDispatch } from 'react-redux'
import { login } from '../store'
import SideBar from '../components/SideBar';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button';


const Login = () => {


    const dispatch = useDispatch()

const [inputEmail, setInputEmail] = useState('')
const [inputPassword, setinputPassword] = useState('')
let navigate = useNavigate();

const handleForm = () => {


 dispatch(login({ name: inputEmail, id:Math.random()}))

navigate("/ ")

}
 




    return (


        <div className='login'>
            <SideBar />
        
            <div className='loginContent'>
                <h2>Connection</h2>
                <input onChange={(e) => setInputEmail(e.target.value)} type="text" placeholder='Pseudo' value={inputEmail} />
                <input  onChange={(e) => setinputPassword(e.target.value)} type="password" placeholder='Mot de passe' value={inputPassword}/>
                <Button onClick={() => handleForm()} text={'Validez'}/>

            </div>

        </div>
    );
};

export default Login;