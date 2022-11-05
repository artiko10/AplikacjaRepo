import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';

export const LeftbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Button',
        path: '/button',
        icon: <GiIcons.GiPlayButton />,
        cName: 'nav-text'
    },
    {
        title: 'Checkbox',
        path: '/checkbox',
        icon: <IoIcons.IoMdCheckbox />,
        cName: 'nav-text'
    },
    {
        title: 'Dropdown',
        path: '/dropdown',
        icon: <AiIcons.AiOutlineSelect />,
        cName: 'nav-text'
    },
    {
        title: 'Input',
        path: '/input',
        icon: <MdIcons.MdOutlineDraw />,
        cName: 'nav-text'
    },
    {
        title: 'Table',
        path: '/table',
        icon: <BsIcons.BsTable />,
        cName: 'nav-text'
    },
    {
        title: 'Forms',
        path: '/forms',
        icon: <AiIcons.AiFillAlert />,
        cName: 'nav-text'
    },
]