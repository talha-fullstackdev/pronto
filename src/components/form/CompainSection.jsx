import React from 'react'
import { Switch } from "antd";
import "antd/dist/reset.css"; // Import Ant Design reset CSS
import SmsChanel from "./SmsChanel";
const CompainSection = () => {
  return (
    <div className="mt-6 flex gap-4">
        {/* First Campaign Input */}
        <div className="flex flex-col w-[644px]">
          <div className="flex justify-between items-center mb-1">
            <h1 className="text-sm font-medium">Campaign Name</h1>
            <div className="flex items-center">
              <p className="mr-1 text-sm">Send Email and SMS</p>
              <Switch className="custom-switch" />
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter campaign name"
            className="mt-2 p-2 border rounded-sm"
          />
        </div>

        {/* Second Campaign Input */}
        <div className="flex flex-col w-[644px]">
          <div className="flex justify-between items-center mb-1">
            <h1 className="text-sm font-medium">Campaign Name</h1>
            <div className="flex items-center">
              <p className="mr-1 text-sm">Update Content</p>
              <Switch className="custom-switch" />
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter campaign name"
            className="mt-2 p-2 border rounded-sm"
          />
        </div>
      </div>
  )
}

export default CompainSection