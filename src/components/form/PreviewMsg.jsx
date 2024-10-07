import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addData } from '../../slices/FromDataSlice'
const PreviewMsg = ({handleOnClick}) => {

  const dispatch = useDispatch()
  return (
    <div className="mt-4 flex justify-end items-center mr-2">
    <span className="text-sm font-medium mr-4 text-blue-400 border p-2 rounded-md ">Preview Message</span>{" "}

    <button className="p-2 bg-red-400 text-white rounded-md"  onClick={handleOnClick}>
      Send Now
    </button>
  </div>
  )
}

export default PreviewMsg