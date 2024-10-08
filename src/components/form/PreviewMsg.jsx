import React from 'react'
const PreviewMsg = ({handleOnClick}) => {
  return (
    <div className="mt-4 flex justify-end items-center mr-2">
    <span className="text-sm font-medium mr-4 text-blue-400 border p-2 rounded-md ">Preview Message</span>{" "}

    <button className="p-2 bg-red-400 text-white rounded-md" onClick={handleOnClick} >
      Send Now
    </button>
  </div>
  )
}

export default React.memo(PreviewMsg)
