import React, { useState } from 'react';
import Calendar from 'react-calendar';
import SideBar from '../components/SideBar';
import { useSelector } from 'react-redux'


const Contact = () => {
    const info = useSelector((state) => state.user.value )


  const [value, onChange] = useState(new Date());

    return (
        <div className='contact'>
            <SideBar />
            <div className="contactContent">

                <h1>Nous contacter</h1>
                <div className="infoContact">
                   <span> <i className="fas fa-phone"></i>  Téléphone :  <tel>04 94 65 88 88</tel></span>
                   <span> <i className="fas fa-home"></i>  Adresse : <span>888 Rue de code</span></span>
                   <span> <i className="fas fa-mail-bulk"></i>  E-mail : <span>RueDuCode@voyage.com</span></span>



                </div>

            </div>
            <div>
      <Calendar onClickDay={(value, event) => alert('Vous avez choisit : '+ value)}
        onChange={onChange}
        value={value}
      />
    </div>
        </div>

        
    );
};

export default Contact;