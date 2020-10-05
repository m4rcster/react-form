import React from 'react';
import './Message.css';

const Message = ({img, title, message}) => {
  return (
    <section className="message">
      <img src={img} alt='icon'/>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  )
}

export default Message;
