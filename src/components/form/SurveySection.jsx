import React from "react";
import { Switch } from "antd";
import { addData } from "../../slices/FromDataSlice";
import { useDispatch } from "react-redux";
import PreviewMsg from "./PreviewMsg";
import "antd/dist/reset.css";
import { toast } from "react-toastify";
const SurveySection = ({ surveyRefs, resetAllFields }) => {
  const { surveyRef, dateOneRef, timeRef, dateTwoRef } = surveyRefs;
  const dispatch = useDispatch();
  const handleOnClick = () => {
    const survey = surveyRef.current.value;
    const dateOne = dateOneRef.current.value;
    const time = timeRef.current.value;
    const dateTwo = dateTwoRef.current.value;
    if (survey && dateOne && time && dateTwo) {
      dispatch(
        addData({
          surveyValue: survey,
          dateOneValue: dateOne,
          timeValue: time,
          dateTwoValue: dateTwo,
        })
      );
      resetAllFields();
      toast.success("your request has ben sent");
    } else {
      toast.error("select all fields");
    }
  };
  return (
    <>
      <div className="flex items-center mt-4">
        <p className="mr-2 text-sm">Schedule Survey</p>
        <Switch className="custom-switch" />
      </div>
      <div className="mt-6 flex justify-between">
        {/* Survey Template Selection */}
        <div className="mb-4 w-[300px]">
          <p className="text-sm font-semibold mb-1">Select Survey Template</p>
          <select ref={surveyRef} className="p-2 w-full border rounded-md mt-2">
            <option value="">select survey one</option>
            <option value="Survey 1">Survey 1</option>
            <option value="Survey 2">Survey 2</option>
            <option value="Survey 3">Survey 3</option>
            <option value="Survey 4">Survey 4</option>
          </select>
        </div>

        {/* Survey Date/Time */}
        <div className="mb-4 w-[300px]">
          <p className="text-sm font-semibold mb-1">Survey Date/Time</p>
          <input
            ref={dateOneRef}
            type="date"
            className="p-2 border rounded-md w-full mt-2"
          />
        </div>

        {/* Survey Time Zone */}
        <div className="mb-4 w-[300px]">
          <p className="text-sm font-semibold mb-1">Schedule Time Zone</p>
          <select ref={timeRef} className="p-2 w-full border rounded-md mt-2">
            <option value="">Please select survey time zone</option>
            <option value="Pacific/Midway">Pacific/Midway (UTC-11:00)</option>
            <option value="America/Los_Angeles">
              America/Los Angeles (UTC-08:00)
            </option>
            <option value="America/New_York">
              America/New York (UTC-05:00)
            </option>
            <option value="Europe/London">Europe/London (UTC+00:00)</option>
          </select>
        </div>

        {/* Second Survey Date */}
        <div className="mb-4 w-[300px]">
          <p className="text-sm font-semibold mb-1">Survey Date/Time</p>
          <input
            type="date"
            className="p-2 border rounded-md w-full mt-2"
            ref={dateTwoRef}
          />
        </div>
      </div>
      <PreviewMsg handleOnClick={handleOnClick} />
    </>
  );
};

export default React.memo(SurveySection);
