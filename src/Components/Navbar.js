import React, {useState} from 'react'
import { MenuItems } from './MenuItems';
import NavbarMenus from './NavbarMenus';

export default function Navbar() {
  return (
    <React.Fragment>
        <nav>
          <ul className="menus p-0 m-0">

            {MenuItems.map((menu, index) => {
              return <NavbarMenus items={menu} key={index} />;
            })}
            
          </ul>
        </nav>
    </React.Fragment>

  )
}