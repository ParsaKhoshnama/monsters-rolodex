import React from 'react'
import './searxh-box.styles.css'

export const SearchBox=({placeholder,handleChange})=>{

    return(<input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handleChange}
    >
    </input>)
}