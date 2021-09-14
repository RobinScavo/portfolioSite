import React, { useState, useEffect } from 'react';

import InternalLink from './InternalLink';

const LinkMenu = () => {

    return (
        <ul className='internalLinks'>
            <InternalLink label='Recent Work' itemName={'recentWork'}/>
            <InternalLink label='Testimonials' itemName={'testimonials'}/>
            <InternalLink label='Contact' itemName={'contact'}/>
        </ul>
    )
}

export default LinkMenu
