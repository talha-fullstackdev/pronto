import React from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../../slices/FromDataSlice'
const SmsBody = ({messageRef}) => {
  const dispatch = useDispatch();
  const handleOnChange = () => {
    const text = messageRef.current.value
    dispatch(addData({messageBody:text}))

  };
  return (
    <div className="mt-6">
    <p className="text-sm font-medium mb-1">SMS Body Text</p>
   <input type="text" ref={messageRef} onChange={handleOnChange} className="w-full pb-16 pl-2 pt-2 border rounded-md" placeholder="Enter Sms Body Text" />
  </div>
  )
}

export default React.memo(SmsBody)


