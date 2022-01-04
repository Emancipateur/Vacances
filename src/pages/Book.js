import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Book() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
    console.log(value[0])
    console.log(value[1])
  }

  function formatDate(choosenDate){
    const date = new Date(choosenDate.getTime())
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        const formatDate =  date.toLocaleString('fr-FR', options)
         console.log(formatDate);
   
  }
  return (

    <div className="book">
        <div className="bookContent">
        <h1>Reservez votre voyage</h1>
        <div className="form">

        <label htmlFor="destination-select">Choissisez votre destination</label>
            <select name="Destination" id="destination-select">
            <option value="mexique">Mexique</option>
            <option value="chine">Chine</option>
            </select>
            </div>
            <div className="calendar">
       <Calendar 
    
            selectRange={true}
          onChange={onChange}
          value={value}
        />
        </div>
       
        </div>
    </div>
  );
}

export default Book