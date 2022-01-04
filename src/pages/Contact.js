import React from 'react';
import SideBar from '../components/SideBar';



const Contact = () => {
   

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
        </div>

        
    );
};

export default Contact;