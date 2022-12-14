import React from 'react'
import { NavLink } from 'react-router-dom';
// import { useState, useEffect, useRef } from "react";

export default function Dropdown({ submenus, dropdown }) {
  

    return (
        <React.Fragment>
            <ul className={`dropdown ${dropdown ? "show" : ""}`}>
                {submenus.map((submenu, index) => (
                    <li key={index} className="menu-items">
                        <NavLink to={submenu.url} activeclassname="active" className="menus">{submenu.title}</NavLink>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}
