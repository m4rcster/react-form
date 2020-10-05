import React, {useRef} from 'react';
import './Textfield.css';

const Textfield = ({type, name, label, value, handle, error, disabled = false}) => {

  const ref = useRef(null);

  return (
    <label className={`${error ? 'has-error': ''}`}>
      <input
        type={type}
        id={name}
        name={name}
        className=""
        value={value}
        disabled={disabled}
        ref={ref}
        onChange={handle}/>
      <span dangerouslySetInnerHTML={{ __html: label}}/>
      <span className="border" />
    </label>
  )
}

export default Textfield;
