import React from 'react';
import './Button.css';

const Button = ({name, label, disabled = false}) => {
  return (
    <button type={name} disabled={disabled} dangerouslySetInnerHTML={{__html: label}} />
  )
}

export default Button;
