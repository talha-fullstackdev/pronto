
// import React, { useState } from 'react';
// import { MdEmail } from "react-icons/md";
// import { FaBell } from "react-icons/fa";
// import User from "../../assets/images/user.jpeg"
// import { NavLink } from 'react-router-dom';
// const Header = () => {
//   // State to handle dropdown visibility
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);


//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header className="flex justify-between items-center p-2 h-16  w-full mr-4">
//       {/* Left Section - Title */}
//       <div className="text-xl font-semibold">
//         Title here
//       </div>

//       {/* Right Section - Icons and User Info */}
//       <div className="flex items-center space-x-4">
//         {/* Bell Icon */}
//         <div className="relative cursor-pointer">
//           <FaBell className="h-5 w-5 text-gray-500 mr-4" />
//         </div>

//         {/* Email Icon */}
//         <div className="relative cursor-pointer">
//           <MdEmail className="h-5 w-5 text-gray-500 mr-4" />
//         </div>

//         {/* Profile Picture and Info with Dropdown */}
//         <div className="relative">
//           <div 
//             className="flex items-center space-x-2 text-gray-700 cursor-pointer gap-2"
//             onClick={toggleDropdown} // Toggle dropdown on click
//           >
//             {/* <FaUserAlt className="h-5 w-5 text-gray-500" /> */}
//             <img src={User} alt="user" className="h-[50px] w-[50px]  rounded-full"  />
//             <div className="flex flex-col leading-tight">
//               <span className="font-medium">Talha Nawaz</span>
//               <span className="text-sm text-gray-400">Super Admin</span>
//             </div>

//             {/* Dropdown Arrow */}
//             <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </div>

//           {/* Dropdown Menu */}
//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
//               <ul className="py-1 flex flex-col">
//                 <NavLink className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</NavLink>
//                 <NavLink className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</NavLink>
//                 <NavLink to="/" className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</NavLink>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import User from "../../assets/images/user.jpeg";
import { NavLink } from 'react-router-dom';

const Header = () => {
  // State to handle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown after clicking an option
  const handleOptionClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-2 h-16 w-full mr-4 px-8">
      {/* Left Section - Title */}
      <div className="text-xl font-semibold">
        Title here
      </div>

      {/* Right Section - Icons and User Info */}
      <div className="flex items-center space-x-4">
        {/* Bell Icon */}
        <div className="relative cursor-pointer">
          <FaBell className="h-5 w-5 text-gray-500 mr-4 hover:text-red-400" />
        </div>

        {/* Email Icon */}
        <div className="relative cursor-pointer">
          <MdEmail className="h-5 w-5 text-gray-500 mr-4 hover:text-red-400" />
        </div>

        {/* Profile Picture and Info with Dropdown */}
        <div className="relative">
          <div 
            className="flex items-center space-x-2 text-gray-700 cursor-pointer gap-2"
            onClick={toggleDropdown} // Toggle dropdown on click
          >
            <img src={User} alt="user" className="h-[50px] w-[50px] rounded-full" />
            <div className="flex flex-col leading-tight">
              <span className="font-medium">Talha Nawaz</span>
              <span className="text-sm text-gray-400">Super Admin</span>
            </div>

            {/* Dropdown Arrow */}
            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              {isDropdownOpen ? ( <path fillRule="evenodd" d="M4.293 10.707a1 1 0 011.414 0L10 6.414l4.293 4.293a1 1 0 001.414-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 001.414 1.414z" clipRule="evenodd" />):
              (<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />)}
            </svg>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <ul className="py-1 flex flex-col">
                <NavLink
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleOptionClick} // Close dropdown on click
                >
                  Profile
                </NavLink>
                <NavLink
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleOptionClick} // Close dropdown on click
                >
                  Settings
                </NavLink>
                <NavLink
                  to="/"
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleOptionClick} // Close dropdown on click
                >
                  Logout
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
