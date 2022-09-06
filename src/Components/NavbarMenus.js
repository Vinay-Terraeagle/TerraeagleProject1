import React, { useState }  from 'react'
import Dropdown from './Dropdown';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from "react";

export default function NavbarMenus({ items }) {
    const [activeTab, setActive] = useState('Dashboard');
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
         if (dropdown && ref.current && !ref.current.contains(event.target)) {
          setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);

  return (
    <li className='menu-items' ref={ref}>
      {items.submenu ? (
        <>
          <button 
          type="button" 
          aria-haspopup="menu" 
          aria-expanded={dropdown ? "true" : "false"} 
          className= { activeTab === 'resourceBtn' ? 'active' : ''}
          onClick={() => {
            setDropdown((prev) => !prev);
            setActive('resourceBtn');

            }}
          >
            {items.title}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown}  />
        </>
      ) : (
        <NavLink to={items.url} activeClassName="active" className="menus">{items.title}</NavLink>
      )}
    </li>
  )
}
