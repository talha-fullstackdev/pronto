import React, { useState } from 'react';
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaNetworkWired } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoLayers } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(''); // State to track the active menu item
  const [isSmsDropdownOpen, setIsSmsDropdownOpen] = useState(false); // For SMS dropdown

  const toggleSmsDropdown = () => {
    setIsSmsDropdownOpen(!isSmsDropdownOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
 
    <div className="w-64 h-screen  flex flex-col ml-2 mt-4">
      {/* Logo */}
      <div className="flex items-center p-4">
        <div className="text-2xl font-semibold text-grey-500">PRONTO</div>
      </div>

      <nav className="flex flex-col mt-2">
        <a 
          href="#"
          className={`flex items-center p-4  ${activeItem === 'overview' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('overview')}
        >
         <HiMiniSquares2X2 className='mr-2'/>Overview
        </a>
        <a 
          href="#"
          className={`flex items-center p-4  ${activeItem === 'activity-log' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('activity-log')}
        >
          <FaNetworkWired className='mr-2'/> Activity Log
        </a>

        {/* SMS Channel Dropdown */}
        <div>
          <div 
            className={`p-4  flex items-center justify-between cursor-pointer ${activeItem === 'sms-channel' ? 'bg-red-400 text-white rounded-lg' : ''}`}
            onClick={() => {
              handleItemClick('sms-channel');
              toggleSmsDropdown();
            }}
          >
            <span className="flex items-center">
            <BiSolidMessageRounded className='mr-2'/> SMS Channel
            </span>
            <span>{isSmsDropdownOpen ? <MdOutlineKeyboardArrowDown className='text-xl'/> : <MdOutlineKeyboardArrowUp className='text-xl'/>}</span>
          </div>
          {isSmsDropdownOpen && (
            <div className="ml-8 flex flex-col">
              <a href="#" className="p-2 hover:bg-gray-200">sms chanel one</a>
              <a href="#" className="p-2 hover:bg-gray-200">sms chanel two</a>
            </div>
          )}
        </div>

        <a 
          href="#"
          className={`flex items-center p-4 ${activeItem === 'email-channel' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('email-channel')}
        >
         <MdEmail className='mr-2'/>Email Channel
        </a>
        <NavLink 
         to={"/whatsapp"}
          className={`flex items-center p-4  ${activeItem === 'whatsapp-channel' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('whatsapp-channel')}
        >
         <FaWhatsapp className='mr-2'/>WhatsApp Channel
        </NavLink>
        <a 
          href="#"
          className={`flex items-center p-4  ${activeItem === 'analytics' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('analytics')}
        >
          <TbBrandGoogleAnalytics className='mr-2'/>Analytics
        </a>
        <a 
          href="#"
          className={`flex items-center p-4 ${activeItem === 'layer-group' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('layer-group')}
        >
         <IoLayers className='mr-2'/>Layer Group
        </a>
        <a 
          href="#"
          className={`flex items-center p-4  ${activeItem === 'contact' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('contact')}
        >
          <MdPermContactCalendar className='mr-2'/> Contact
        </a>
      </nav>

      <div className="mt-auto p-4">
        <a 
          href="#"
          className={`flex items-center p-4  ${activeItem === 'logout' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('logout')}
        >
          <TbLogout2  className='mr-2'/>Log Out
        </a>
      </div>
      
    </div>



  );
};

export default Sidebar;

