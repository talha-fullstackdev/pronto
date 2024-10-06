import React from 'react'

const PreviewMsg = () => {
  return (
    <div className="mt-4 flex justify-end items-center mr-2">
    <span className="text-sm font-medium mr-4 text-blue-400 ">Preview Message</span>{" "}

    <button className="p-2 bg-red-400 text-white rounded-md">
      Send Now
    </button>
  </div>
  )
}

export default PreviewMsg