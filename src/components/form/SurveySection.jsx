import React from 'react'
import { Switch } from "antd";
import "antd/dist/reset.css"; 
const SurveySection = () => {
  return (
    <>    <div className="flex items-center mt-4">
    <p className="mr-2 text-sm">Schedule Survey</p>
    <Switch className="custom-switch" />
  </div>

  {/* Survey Details */}
  <div className="mt-6 flex justify-between">
    {/* Survey Template Selection */}
    <div className="mb-4 w-[300px]">
      <p className="text-sm font-semibold mb-1">Select Survey Template</p>
      <select name="" id="" className="p-2 w-full border rounded-md mt-2">
        <option value="">Please select survey</option>
      </select>
    </div>

    {/* Survey Date/Time */}
    <div className="mb-4 w-[300px]">
      <p className="text-sm font-semibold mb-1">Survey Date/Time</p>
      <input type="date" className="p-2 border rounded-md w-full mt-2 " />
    </div>

    {/* Survey Time Zone */}
    <div className="mb-4 w-[300px]">
      <p className="text-sm font-semibold mb-1">Schedule Time Zone</p>
      <select name="" id="" className="p-2 w-full border rounded-md mt-2 ">
        <option value="">Please select survey time zone</option>
      </select>
    </div>
    <div className="mb-4 w-[300px]">
      <p className="text-sm font-semibold mb-1">Survey Date/Time</p>
      <input type="date" className="p-2 border rounded-md w-full mt-2" />
    </div> 
  </div>
  </>

  )
}
export default SurveySection