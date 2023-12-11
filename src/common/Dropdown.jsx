import React, { useState } from 'react';
// import { Dropdown as FlowbiteDropdown } from 'flowbite-react'; // Rename to avoid conflict
// import DropDownBtn from '../ChildComponents/DropDownBtn';

function Dropdown() {
  const [selectedItem, setSelectedItem] = useState(null); // Declare at the top level

  const handleDropdownClick = (item) => {
    setSelectedItem(item);
    // Add any other logic you need
  };

  return (
    <>
      <div className="relative w-full lg:max-w-sm">
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>ReactJS Dropdown</option>
                <option>Laravel 9 with React</option>
                <option>React with Tailwind CSS</option>
                <option>React With Headless UI</option>
            </select>
        </div>
    </>
  );
}

export default Dropdown;
