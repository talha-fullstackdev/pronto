
import { Switch } from "antd";
import "antd/dist/reset.css"; // Import Ant Design reset CSS
import { addData } from '../../slices/FromDataSlice';
import { useDispatch} from 'react-redux';
const CompainSection = ({campaignNameRef,campaignContactRef}) => {
  const dispatch = useDispatch();
  const handleOnChange = () => {
    const name = campaignNameRef.current.value
    const contact = campaignContactRef.current.value
    dispatch(addData({campainName:name,campainContact:contact}))

  };
  return (
    <div className="mt-6 flex gap-4">
        {/* First Campaign Input */}
        <div className="flex flex-col w-[644px]">
          <div className="flex justify-between items-center mb-1">
            <h1 className="text-sm font-medium">Campaign contact</h1>
            <div className="flex items-center">
              <p className="mr-2 text-sm">Send Email & SMS</p>
              <Switch className="custom-switch" />
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter campaign contact"
            className="mt-2 p-2 border rounded-md"
            ref={campaignNameRef}
            onChange={handleOnChange}
       
          />
        </div>

        {/* Second Campaign Input */}
        <div className="flex flex-col w-[644px]">
          <div className="flex justify-between items-center mb-1">
            <h1 className="text-sm font-medium">Campaign Name</h1>
            <div className="flex items-center">
              <p className="mr-2 text-sm">Update Content</p>
              <Switch className="custom-switch" />
            </div>
          </div>
          <input
            type="text"
            placeholder="Enter Contact Number"
            className="mt-2 p-2 border rounded-md"
            ref={campaignContactRef}
            onChange={handleOnChange}
  
          />
        </div>
      </div>
  )
}

export default CompainSection
