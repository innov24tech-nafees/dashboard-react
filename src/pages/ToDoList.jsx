import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';
import DropDownBtn from '../ChildComponents/DropDownBtn';



function ToDoList() {
  const Dropdown = ({ label, onClick, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      const [selectedItem, setSelectedItem] = useState(null);

    const handleDropdownClick = (item) => {
        setSelectedItem(item);
        // Add any other logic you need
    };


    return (


      <>
         <div>
            <DropDownBtn onClick={() => handleDropdownClick('Dashboard')}>
                short By
            </DropDownBtn>
            {/* Add more DropDownBtn components as needed */}
            {selectedItem && <p>Selected Item: {selectedItem}</p>}
        </div>

      </>
    )
  }
}
export default ToDoList;