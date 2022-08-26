import React,{ useState } from 'react'

import { Link } from 'react-router-dom';
// import { MenuItems } from './MenuItems';

export default function MenuClick() {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const MenuItems1 = [
        {
            title: 'Dashboard',
            path:'/Dashboard',
            Cname:'menuDropdown'
            // icnpath:
          },
          {
            title: 'MyPlan',
            path:'/MyPlan',
            Cname:'menuDropdown'
            // icnpath:
          },
          {
            title: 'Resources',
            path:'/Dashboard',
            Cname:'menuDropdown'
            // icnpath:
          },
          {
            title: 'Discover',
            path:'/Dashboard',
            Cname:'menuDropdown'
            // icnpath:
          },
          {
            title: 'Spaces',
            path:'/Dashboard',
            Cname:'menuDropdown'
            // icnpath:
          },
          {
            title: 'Settings',
            path:'/Dashboard',
            Cname:'menuDropdown'
            // icnpath:
          },
    ];

  return (
    <React.Fragment>
        <ul 
        onClick={handleClick} className={click ? 'menuDropdown clicked' : 'button-menu'}
        {...MenuItems1.map((item, index) => {
            return (
                <li className='menu_links' key={index}>
                    <Link className={item.Cname}
                    to={item.path}
                    onclick={() => setClick(false)}>
                        {item.title}
                    </Link>
                </li>
            );
        })}>

        </ul>
    </React.Fragment>

  )
}