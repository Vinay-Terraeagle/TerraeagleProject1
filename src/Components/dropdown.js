import React,{ useState } from 'react'

import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

export default function MenuClick() {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (
    <React.Fragment>
        <ul 
        onClick={handleClick} className={click ? 'menuDropdown clicked' : 'button-menu'}
        >
          {MenuItems.map((item, index) => {
            return (
                <li className='menu_links' key={index}>
                    <Link className={item.Cname}
                    to={item.url}
                    onclick={() => setClick(false)}>
                        {item.title}
                    </Link>
                </li>
            );
        })}

        </ul>
    </React.Fragment>

  )
}