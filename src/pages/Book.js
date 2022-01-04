import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Book() {

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const options1 = { day: 'numeric' }
  const [value, setValue] = useState(new Date());
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')


  function howManyDay(num1, num2) {

  if (num1 > num2) {
    return num1 - num2
  } else {
    return num2 - num1
  }
}

  function onChange(nextValue) {
    setValue(nextValue);
  setStartDate(nextValue[0].toLocaleString('fr-FR', options1))
  setEndDate(nextValue[1].toLocaleString('fr-FR', options1))


  }

  function formatDate(choosenDate){
    const date = new Date(choosenDate.getTime())

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
          <div className="BookingDetails">

            { value[0] ? ('Du ' + value[0].toLocaleString('fr-FR', options) + ' au ' + value[1].toLocaleString('fr-FR', options)) : null}
          <p>Nombre de jour total : {howManyDay(startDate, endDate)}</p>
          </div>
        </div>
    </div>
  );
}

export default Book