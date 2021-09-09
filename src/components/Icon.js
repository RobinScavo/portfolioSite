import React from 'react'

const Icon = ({ type, empty}) => {
    const isEmpty = empty ? 'empty' : ''

    return (
        <i className={`icon ${type} ${isEmpty}`}></i>
    )
}

export default Icon
