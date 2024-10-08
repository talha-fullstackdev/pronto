import React, { useRef } from "react";
import SmsChanel from "./SmsChanel";
import CompainSection from "./CompainSection";
import SmsBody from "./SmsBody";
import SurveySection from "./SurveySection";
const Form = () => {
  const campaignNameRef = useRef(null);
  const campaignContactRef = useRef(null);
  const messageRef = useRef(null);
  const smsChanelRef = useRef(null);
  const surveyRefs = {
    surveyRef: useRef(null),
    dateOneRef: useRef(null),
    timeRef: useRef(null),
    dateTwoRef: useRef(null),
  };
  const resetAllFields = () => {
    campaignNameRef.current.value = "";
    campaignContactRef.current.value = "";
    messageRef.current.value = "";
    smsChanelRef.current.value = "";
    surveyRefs.surveyRef.current.value = "";
    surveyRefs.dateOneRef.current.value = "";
    surveyRefs.timeRef.current.value = "";
    surveyRefs.dateTwoRef.current.value = "";
  };
  return (
    <div className="p-4">
      <SmsChanel smsChanelRef={smsChanelRef} />
      <CompainSection
        campaignNameRef={campaignNameRef}
        campaignContactRef={campaignContactRef}
      />
      <SmsBody messageRef={messageRef} />
      <SurveySection surveyRefs={surveyRefs} resetAllFields={resetAllFields} />
    </div>
  );
};
export default React.memo(Form);
