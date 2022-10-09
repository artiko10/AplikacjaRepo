import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LeftbarData } from './SidebarData'

function Sidebar() {
const [leftbar, setLeftbar] = useState(false);
const showLeftbar = () => setLeftbar(!leftbar);

  return (
    <>
        <div className="sidebar">
            <Link to="#" className='menu-bars'>
               <FaIcons.FaBars/> 
            </Link>
        </div>
        <nav className={leftbar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className="navbar-toggle">
                    <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {LeftbarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>

                    )
                })}
            </ul>
        </nav>

    </>
  )
}

export default Sidebar