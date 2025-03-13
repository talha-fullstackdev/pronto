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
 
    <div className="w-64 h-[96vh]  flex flex-col ml-2 mt-4">
      {/* Logo */}
      <div className="flex items-center p-4">
        <div className="text-2xl font-semibold text-grey-500">PRONTO</div>
      </div>

      <nav className="flex flex-col mt-2">
        <NavLink 
          href="#"
          className={`flex items-center p-4   ${activeItem === 'overview' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('overview')}
        >
         <HiMiniSquares2X2 className='mr-2'/>Overview
        </NavLink>
        <NavLink 
          href="#"
          className={`flex items-center p-4  w-[200px] ${activeItem === 'activity-log' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('activity-log')}
        >
          <FaNetworkWired className='mr-2'/> Activity Log
        </NavLink>

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
            <span>{isSmsDropdownOpen ? <MdOutlineKeyboardArrowUp className='text-xl'/> : <MdOutlineKeyboardArrowDown className='text-xl'/>}</span>
          </div>
          {isSmsDropdownOpen && (
            <div className="ml-8 flex flex-col">
              <NavLink href="#" className="p-2 hover:bg-gray-200">sms chanel one</NavLink>
              <NavLink href="#" className="p-2 hover:bg-gray-200">sms chanel two</NavLink>
            </div>
          )}
        </div>

        <NavLink 
          to='/'
          className={`flex items-center p-4 ${activeItem === 'email-channel' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('email-channel')}
        >
         <MdEmail className='mr-2'/>Email Channel
        </NavLink>
        <NavLink 
         to={"/whatsapp"}
          className={`flex items-center p-4  ${activeItem === 'whatsapp-channel' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('whatsapp-channel')}
        >
         <FaWhatsapp className='mr-2'/>WhatsApp Channel
        </NavLink>
        <NavLink 
          href="#"
          className={`flex items-center p-4  ${activeItem === 'analytics' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('analytics')}
        >
          <TbBrandGoogleAnalytics className='mr-2'/>Analytics
        </NavLink>
        <NavLink 
          href="#"
          className={`flex items-center p-4 ${activeItem === 'layer-group' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('layer-group')}
        >
         <IoLayers className='mr-2'/>Layer Group
        </NavLink>
        <NavLink 
          href="#"
          className={`flex items-center p-4  ${activeItem === 'contact' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('contact')}
        >
          <MdPermContactCalendar className='mr-2'/> Contact
        </NavLink>
      </nav>

      <div className="mt-auto p-4">
        <NavLink 
          to='/'
          className={`flex items-center justify-center p-2   ${activeItem === 'logout' ? 'bg-red-400 text-white rounded-lg' : ''}`}
          onClick={() => handleItemClick('logout')}
        >
          <TbLogout2  className='mr-1'/>Log Out
        </NavLink>
      </div>
      
    </div>



  );
};

export default Sidebar;

