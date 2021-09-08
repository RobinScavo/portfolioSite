import React, { useState, useEffect } from 'react';

import InternalLink from './InternalLink';

const LinkMenu = () => {

    // useEffect(() => {
    //     const observer = new MutationObserver(getAnchorPoints);

    //     observer.observe(document.getElementById('root'), {
    //         childList: true,
    //         subtree: true,
    //     });
    //     window.addEventListener('scroll', handleScroll)
    // }, []);

    // const getAnchorPoints = () => {
    //     const curScroll = window.scrollY - 100;
    //     const viewPortHeight = Math.max(
    //         document.documentElement.clientHeight,
    //         window.innerHeight || 0
    //     )
    //     for (const key in menuItems) {
    //         menuItems[key] =
    //             document.getElementById(key).getBoundingClientRect().top + curScroll;
    //     }
    //     const bottom = document.body.offsetHeight;
    //     handleScroll();
    // }

    // const handleScroll = () => {
    //     const curPos = window.scrollY;
    //     let curSection = null;

    //     for (const section in menuItems) {
    //         curSection = menuItems[sectioin] >= curPos ? section : curSection
    //         if (curSection !== activeItem) {
    //             setActiveItem(curSection)
    //         }
    //     }
    // }

    return (
        <ul className='internalLinks'>
            <InternalLink label='Recent Work' itemName={'recentWork'}/>
            <InternalLink label='Testimonials' itemName={'testimonials'}/>
            <InternalLink label='Contact' itemName={'contact'}/>
        </ul>
    )
}

export default LinkMenu
