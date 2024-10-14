import { useEffect, useState } from "react";




const useConvertToFarsiDate = (date) => {

  const[newDate,setNewDate]=useState();
  useEffect(()=>{
    if(date){
        const year = date.year;
        const month = date.month;
        const day = date.day;
        setNewDate(year + "/" +month +"/"+day)
      }
  },[])
      return [newDate]
    }



export default useConvertToFarsiDate
