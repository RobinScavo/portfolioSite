import React, { useState, useEffect } from 'react'

const InternalLink = ({ label, itemName }) => {
    const [target, setTarget] = useState(null);

    useEffect(() => {
        setTarget(document.getElementById(itemName))
    }, [itemName])

    const handleClick = event => {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <li>
            <a
                href={`#${itemName}`}
                onClick={handleClick}
                className={`button`}
                aria-label={`Scroll to ${itemName}`}
            >
                {label}
            </a>
        </li>
    )
}

export default InternalLink
