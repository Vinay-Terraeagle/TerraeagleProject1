import React from 'react'
import '../Styles/BloodBiomarker.css'
import { NavLink } from 'react-router-dom'

export default function biodropdown( biomenu, biodop ) {
  return (
    <React.Fragment>
        <ul className={`biodropdown ${biodop ? "show" : ""}`}>
            {biomenu.map((submenu, index) => (
                <li key={index} className="biomenuitem">
                    <NavLink to={submenu.url} activeclassname="active" className="menus">{submenu.title}</NavLink>
                </li>
            ))}
        </ul>
    </React.Fragment>
  )
}
 