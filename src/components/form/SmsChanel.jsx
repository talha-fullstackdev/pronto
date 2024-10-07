import React from "react";
import { useRef } from "react";
import { addData } from "../../slices/FromDataSlice";
import { useSelector, useDispatch } from "react-redux";
const SmsChanel = () => {
  const smsChanelRef = useRef();
  const dispatch = useDispatch();
  const myData = useSelector((state) => state.formSlice);
  const handleOnChange = () => {
    const smsChanel = smsChanelRef.current.value;
   
    dispatch(addData({ chanel: smsChanel }));


  };
  console.log(myData)
  return (
    <div className="sms-channel">
      <h1 className="text-lg font-medium mb-1">Select SMS Channel</h1>
      <select
        name=""
        id=""
        className="p-2 w-[644px] mt-2  border rounded-md"
        ref={smsChanelRef}
        onChange={handleOnChange}
      >
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
        <option value="four">Four</option>
      </select>
    </div>
  );
};

export default SmsChanel;
/////////////////////////////
// import React, { useState, useEffect } from 'react'

// const SmsChanel = () => {
//   const [data, setData] = useState('')

//   useEffect(() => {
//     console.log(data)
//   }, [data]) // This will run whenever 'data' changes

//   const handleOnChange = (e) => {
//     setData(e.target.value)
//   }

//   return (
//     <div className="sms-channel">
//       <h1 className="text-lg font-medium mb-1">Select SMS Channel</h1>
//       <select
//         className="p-2 w-[644px] mt-2 border rounded-md"
//         onChange={handleOnChange}
//       >
//         <option value="One">One</option>
//         <option value="Two">Two</option>
//         <option value="Three">Three</option>
//         <option value="Four">Four</option>
//       </select>
//     </div>
//   )
// }

// export default SmsChanel
