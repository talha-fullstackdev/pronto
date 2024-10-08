import React from "react";
import { addData } from "../../slices/FromDataSlice";
import { useSelector, useDispatch } from "react-redux";
const SmsChanel = ({ smsChanelRef }) => {
  const dispatch = useDispatch();
  const handleOnChange = () => {
    const smsChanelData = smsChanelRef.current.value;
    dispatch(addData({ smsChanel: smsChanelData }));
  };
  const data = useSelector((state) => state.formSlice);
  console.log(data)

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

export default React.memo(SmsChanel);
