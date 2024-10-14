import React from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ShowRooms from "../ShowRooms/ShowRooms";

import "../../styles/main.scss";
import { useState } from "react";
import Space from "../../components/Space/Space";
import Error from "../Error/Error";
import ShowCalcute from "../ShowCalcute/ShowCalcute";
import { DtPicker} from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import "../../styles/main.scss";
import Input from "../Input/Input";
//  import moment from "jalali-moment";
import {useLocation } from "react-router-dom";
import useConvertToFarsiDate from "../../hooks/useConvertToFarsiDate ";

import Button from "../Button/Button";

import useConvertToEnDate from "../../hooks/useConvertToEnDate";
import useDiffStartEnd from "../../hooks/useDiffStartEnd";



const OnlineReservasion = () => {




  const [jalaliStartDate, setJalaliStartDate] = useState();
  const [jalaliEndDate, setJalaliEndDate] = useState();

  
  
  const [miladiStartDate, setMiladiStartDate] = useConvertToEnDate(jalaliStartDate);
  const [miladiEndDate, setMiladiEndDate] = useConvertToEnDate(jalaliEndDate);
  
  
  const[diffSatrtEnd,error]= useDiffStartEnd(miladiStartDate,miladiEndDate);
  
  const[show,setShow]=useState(false)
  
  const location = useLocation();
  
const[roomId,setRoomId]= useState();
const[roomTitle,setRoomTitle]= useState();
const[roomPrice,setRoomPrice]= useState();
const[roomAdult,setRoomAdult]= useState();
  // const [startReservDate, setStartReservDate] = useConvertToFarsiDate({year:jalaliStartDate.year,month:jalaliStartDate.month,day:jalaliStartDate.day});


  const [endReservDate, setEndReservDate] = useState();
  

  
  const handleSearchRoomsClick = () => {


    
    error?setShow(false): setShow(true)

    
    
  };


const handleReservClick=(id,title,price,adult)=>{

  setRoomId(id);
  setRoomTitle(title);
  setRoomPrice(price);
  setRoomAdult(adult); 

}



  return (
    <div className="online-reserve">
      <TopMenu />
      <Header />
      <Space />
      <Space/>
      <Space/>
      <Space/>
      <div className="online-reserve__container container-custom">
<div className="online-reserve__container--right">
<div className="box-shadow p-30">
      <div className="dtpicker">
        <div className="dtpicker-right">
          <DtPicker
            onChange={setJalaliStartDate}
            local="fa"
            clearBtn="true"
            isRequired="true"
            todayBtn="true"
            headerClass="custom-headr"
            inputClass="custom-input"
            placeholder="تاریخ ورود"
            initValue={jalaliStartDate}
          />
        </div>
        <div className="dtpicker-center">
          <DtPicker
            onChange={setJalaliEndDate}
            local="fa"
            clearBtn="true"
            isRequired="true"
            todayBtn="true"
            headerClass="custom-headr"
            inputClass="custom-input"
            placeholder="تاریخ خروج"
          />
        </div>
        <div className="dtpicker-left">
          <Input
            type="text"
            disabled="disabled"
            value={`${diffSatrtEnd} شب`}
          />
        </div>

        <div
          className="btn"
          onClick={() =>{handleSearchRoomsClick()}
          }
        >
          جستجوی اتاق
        </div>
      </div>
      {location.pathname === "/onlinereservation" ? error ?<Error>{error}</Error>:null: null}

    </div>
    {
  show &&<ShowRooms startReservDate={miladiStartDate} endReservDate={miladiEndDate} handleReservClick={handleReservClick}></ShowRooms>
}
</div>


   
  <ShowCalcute startReservDate={miladiStartDate} endReservDate={miladiEndDate}></ShowCalcute>


      </div>
      <Space />
      

      <Footer />
    </div>
  );
};

export default OnlineReservasion;
