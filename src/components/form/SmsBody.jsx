import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../../slices/FromDataSlice'
const SmsBody = () => {
  const messageRef = useRef()
  const dispatch=useDispatch()
  const handleonChange=()=>{
    const msg = messageRef.current.value
    dispatch(addData({Usermessage:msg}))
  }

  return (
    <div className="mt-6">
    <p className="text-sm font-medium mb-1">SMS Body Text</p>
   <input ref={messageRef} onChange={handleonChange} type="text" className="w-full pb-16 pl-2 pt-2 border rounded-md" placeholder="enter sms body text" />
  </div>
  )
}

export default SmsBody