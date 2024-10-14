import React, { useState } from 'react';
import hotelimg from '../../images/hotel.webp';
import { DtPicker, convertToEn } from "react-calendar-datetime-picker";

import '../../styles/main.scss';

import CartShopping from '../Icons/CartShopping';


const ShowCalcute = ({startReservDate,endReservDate}) => {

  return (
    <div className='show-calcute'> 
    <div className='show-calcute__img'>

        <img src={hotelimg} alt='hotelimg' />
    </div>
        <div className='show-calcute__date'>
            <p>تاریخ اقامت</p>
            <p>{endReservDate}__{startReservDate}</p>

        </div>
        <div className='show-calcute__info'>
            <CartShopping></CartShopping>
            <p>هنوز اتاقی انتخاب نشده است</p>
        </div>


      
    </div>
  )
}

export default ShowCalcute
