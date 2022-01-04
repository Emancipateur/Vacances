import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Button from '../components/Button';
import SideBar from '../components/SideBar';
import { useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

function Book() {

  const info = useSelector((state) => state.user.value )
  let navigate = useNavigate();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const options1 = { day: 'numeric' }
  const [value, setValue] = useState(new Date());
  const [startDate, setStartDate] = useState(0)
  const [endDate, setEndDate] = useState('')
  const [destination, setDestination]= useState('')


  function howManyDay(num1, num2) {

  if (num1 > num2) {
    return num1 - num2
  } else {
    return num2 - num1
  }
}

  function onChange(nextValue) {
    setValue(nextValue);
      setStartDate(parseInt(nextValue[0].toLocaleString('fr-FR', options1)))
      setEndDate(parseInt(nextValue[1].toLocaleString('fr-FR', options1)))

  }


let pricePorDayPorDestination = 0
    switch (destination){
      case 'mexique':
        pricePorDayPorDestination = 35
        break;
      case 'chine':
        pricePorDayPorDestination = 50
      break;
      default:
        pricePorDayPorDestination = 0

    }
  

  // function formatDate(choosenDate){
  //   const date = new Date(choosenDate.getTime())

  //       const formatDate =  date.toLocaleString('fr-FR', options)
  //        console.log(formatDate);
   
  // }
  return (

    <div className="book">
      <SideBar />
        <div className="bookContent">
        <h1>Reservez votre voyage</h1>
        <div className="form">

        <label htmlFor="destination-select">Choissisez votre destination</label>
            <select onChange={(e)=> setDestination(e.target.value)} name="Destination" id="destination-select">
            <option value="" selected="selected">Choissisez une destination</option>
            <option value="mexique" >Mexique</option>
            <option value="chine">Chine</option>
            </select>
            </div>
            <div className="calendar">
       <Calendar 
    
            selectRange={true}
          onChange={onChange}
          value={value}
        />
        <div className="price">
           <h3>Prix par jour : {pricePorDayPorDestination} € </h3>
           <p> {howManyDay(startDate, endDate)} jours et {howManyDay(startDate, endDate - 1)} nuits </p>
           <p>Total = {howManyDay(startDate, endDate) * pricePorDayPorDestination + '€ TTC'} </p>
          </div>
        </div>
          <div className="bookingDetails">

            { value[0] ? ('Du ' + value[0].toLocaleString('fr-FR', options) + ' au ' + value[1].toLocaleString('fr-FR', options)) : null}

          
          </div>

        <Button onClick={info[0] ? navigate("/validate") : console.log('ok')} text={'Validez mes dates'} />
        </div>
    </div>
  );
}

export default Book