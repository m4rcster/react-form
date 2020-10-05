import React, {useRef} from 'react';
import './Checkbox.css';

const Checkbox = ({type, name, label, value, handle, error, disabled = false}) => {

  const ref = useRef(null);

  return (
    <label className={`${type} ${error ? 'has-error' : ''}`}>
      <input
        type={type}
        name={name}
        checked={value}
        disabled={disabled}
        ref={ref}
        onChange={handle}/>
      <span dangerouslySetInnerHTML={{ __html: label}}/>
    </label>
  )
}

export default Checkbox;

/*
{
  options &&
  options.map(option => {
    return <div>
    <input
      type={type}
      //id={type === 'radio' ? `${name}_${value}` : name}
      name={name}
      value={option.value}
      //checked={value}
      //disabled={disabled}
      //ref={ref}
      onChange={handle}/>
      <span dangerouslySetInnerHTML={{ __html: option.label}}/>
      </div>
  })
}

  <input
    type={type}
    id={type === 'radio' ? `${name}_${value}` : name}
    name={name}
    className=""
    //value={value}
    checked={value}
    disabled={disabled}
    ref={ref}
    onChange={handle}/>
    <span dangerouslySetInnerHTML={{ __html: label}}/>

*/
