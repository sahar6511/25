import React, { useState } from "react";
import "../../styles/main.scss";
import SearchPannel from "../SearchPanel/SearchPanel";
import Button from "../Button/Button";
import { useGetRoomsQuery } from "../redux/services/roomsApi";

// import HeartIcon from '../Icons/HeartIcon';

const ShowRooms = ({ startReservDate, endReservDate,handleReservClick}) => {

  const { data: rooms, error, isLoding } = useGetRoomsQuery();


  return (
    <div className="show-rooms">
    
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : rooms ? (
        <div>
          {rooms.map((room) =>
            (new Date(room.startreserveddate) <= new Date(startReservDate) &&
              new Date(room.endreservceddate) >= new Date(startReservDate)) ||
            (new Date(room.startreserveddate) <= new Date(endReservDate) &&
              new Date(room.endreservceddate) >= new Date(endReservDate)) ||
            (new Date(room.startreserveddate) >= new Date(startReservDate) &&
              new Date(room.endreservceddate) <=
                new Date(endReservDate)) ?  null : (
              <div key={room.id} id={room.id} className="show-rooms__container">
                <div className="show-rooms__container--img">
                  <img src={room.img} />
                  <div className="p-10">
                    <span className="text-justify text-bold black-color">
                      {" "}
                      امکانات:{" "}
                    </span>
                    {room.facilities}
                  </div>
                </div>
                <div className="show-rooms__container--info">
                  <ul>
                    <li>
                      <h2>{room.title}</h2>
                    </li>
                    <li>
                      <span> وضعیت: </span>
                      {room.status}
                    </li>
                    <li>
                      {" "}
                      <span> ظرفیت: </span>
                      {room.capacity}
                    </li>
                    <li>
                      <span>قیمت هر شب : </span>
                      {room.price}ریال{" "}
                    </li>
                    <li><span>بزرگسال : </span>
                      <select onChange={(event)=>console.log(event.target.value)} name="adult">
                        <option >تعداد</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </li>
                    <li><span>کودک : </span>
                      <select onChange={(event)=>console.log(event.target.value)} name="child">
                        <option >تعداد</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </li>
                  </ul>

                 

                <div className="btns">
                  <div className="btns-first">

                    <div className="btn" onClick={handleReservClick(room.id,room.title,room.price,room.adult)}>رزرو اتاق</div>
                  </div>

                  <div className="btns-second">

                  <Button>جزئیات بیشتر</Button> 
</div>
                 
                </div>
                </div>
              </div>
            )
          )}
        </div>
      ) : null}
    </div>
  );

  //   </div>
  // );
};

export default ShowRooms;
