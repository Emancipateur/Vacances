import React from 'react';

const Button = ({text, color}) => {
    return (
        <button className='Mybutton' style={{background : color}}> {text} </button>
    );
};

export default Button;