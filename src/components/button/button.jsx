import './button.css'
import React from 'react';


export const Button = (params) => {
    return (
    <a href="#" className={params._class}>{params._text}</a>
    )    
}