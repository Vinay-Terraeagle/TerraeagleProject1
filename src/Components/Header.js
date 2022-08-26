import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/app.css'
import logo from '../assets/images/logo-sm.png'
import MenuClick from './MenuClick'

export default function Header() {
    // const [menuclick, setmenuClick] = useState(false);

    // const onMouseEnter = () => {
    //     if(window.innerWidth <960) {
    //         setmenuClick(false);
    //     } else {
    //         setmenuClick(true);
    //     }   
    // };
    // const onMouseLeave = () => {
    //     if (window.innerWidth < 960) {
    //         setmenuClick(false);
    //     } else {
    //         setmenuClick(false);
    //     }
    // }

  return (
    <React.Fragment>
        <nav>
            <div className='container'>
                <div className='nav-col'>
                    <div className='nav-logo'>
                        <img src={logo} className="main-logo" alt='logo'/>
                    </div>
                    <div className='nav-btns'>
                        <div className='dayn-btn'>
                        </div>
                        <div>
                            <Link to="/Notification">
                            {/* <button className='notification'>
                            <a href='/' className='not-badge'>2</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                        </svg>
                        </button> */}
                        <button className='profile-icn'>
                            <div className='prof-svgs'>
                            <svg viewBox="0 0 27 31" focusable="false" role="presentation" className="svg-inc"><svg fill="none" viewBox="0 0 27 31"><path fill="#fff" fill-rule="evenodd" d="M20.333 7.767a6.767 6.767 0 11-13.533 0 6.767 6.767 0 0113.533 0zm5.583 16.46c.143.276.218.582.217.893V30H1v-4.88a1.933 1.933 0 01.824-1.585 20.043 20.043 0 0111.743-3.202 20.043 20.043 0 0111.743 3.202c.254.178.462.416.606.692z" clip-rule="evenodd"></path><path stroke="#111" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M26.133 25.12a1.933 1.933 0 00-.823-1.585 20.043 20.043 0 00-11.743-3.202 20.043 20.043 0 00-11.743 3.202A1.933 1.933 0 001 25.12V30h25.133v-4.88zM13.567 14.533a6.767 6.767 0 100-13.533 6.767 6.767 0 000 13.533z"></path></svg></svg>
                            </div>
                            <a href="/" class="not-badge">2</a>
                        </button>
                        </Link>
                        </div>
                        <div>
                        {<MenuClick/>}
                        <button className='menu-btn'>
                            <div className='btn-txt'>
                            {/* {menuclick && <MenuClick/>}
                                <li className='menubtn-drp' onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave} >Dashboard</li> */}
                                
                            </div>
                            <div className='svg-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                            </div>
                        </button>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}
