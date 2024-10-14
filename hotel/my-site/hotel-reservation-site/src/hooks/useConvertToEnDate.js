
import {convertToEn } from "react-calendar-datetime-picker";


const useConvertToEnDate = (date) => {

console.log(date)
    const newDate= convertToEn(date);
    console.log(newDate)

   return [newDate]
}


export default useConvertToEnDate
