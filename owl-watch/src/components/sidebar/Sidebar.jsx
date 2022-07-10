import React from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Getting Started',
        icon: <i className='bx bx-star'></i>,
        to: '/started',
        section: 'started'
    },
    {
        display: 'Calendar',
        icon: <i className='bx bx-calendar'></i>,
        to: '/calendar',
        section: 'calendar'
    },
]

const Sidebar = () => {
    return <div className='sidebar'>
        <div className="sidebar__logo">
            Animate
        </div>
        <div className="sidebar__menu">
            <div className="sidebar__menu__indicator">
                {
                    sidebarNavItems.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <div className="sidebar__menu__item">
                                <div className="sidebar__menu__item__icon">
                                    {item.icon}
                                </div>
                                <div className="sidebar__menu__item__text">
                                    {item.display}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </div>
}

export default Sidebar;