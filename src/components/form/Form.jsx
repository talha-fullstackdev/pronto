import React from "react";
import SmsChanel from "./SmsChanel";
import CompainSection from "./CompainSection";
import SmsBody from "./SmsBody";
import SurveySection from "./SurveySection";
import PreviewMsg from "./PreviewMsg";
const Form = () => {
 

  return (
    <div className="p-4">
      <SmsChanel/>
      <CompainSection  />
      <SmsBody />
      <SurveySection  />
      {/* <PreviewMsg  /> */}
    </div>
  );
};

export default Form;
