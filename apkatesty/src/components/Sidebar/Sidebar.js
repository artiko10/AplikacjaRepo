import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LeftbarData } from './SidebarData'
import './Sidebar.css';
import { IconContext } from 'react-icons'

function Sidebar() {
const [leftbar, setLeftbar] = useState(false);
const showLeftbar = () => setLeftbar(!leftbar);

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className="topbar">
            <Link to="#" className='menu-icons'>
               <FaIcons.FaBars onClick={showLeftbar}/> 
            </Link>
        </div>
        <nav className={leftbar ? 'left-menu active' : 'left-menu'}>
            <ul className='nav-menu-items' onClick={showLeftbar}>
                <li className="navbar-toggle"> 
                    <Link to="#" className='menu-icons'>
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
        </IconContext.Provider>
    </>
  )
}

export default Sidebar