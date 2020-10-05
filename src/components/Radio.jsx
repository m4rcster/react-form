import React, {useRef} from 'react';
import './Radio.css';


const Input = ({name, value, label, checked, disabled, handle}) => {
  const ref = useRef(null);
  return (<label>
      <input
        type='radio'
        name={name}
        id={`${name}_${value}`}
        value={value}
        checked={checked}
        disabled={disabled}
        ref={ref}
        onChange={e => handle({
          target: { name, value }
        })}/>
        <span dangerouslySetInnerHTML={{ __html: label}}/>
      </label>
  )
}

const Radio = ({type, name, label, options, value, handle, error, disabled = false}) => {

  return (
    <div className={`${type} ${error ? 'has-error' : ''}`}>
      <span dangerouslySetInnerHTML={{ __html: label}}/>
      {
        options.map(option => <Input {...{
          ...option,
          key: option.value,
          name,
          checked: value === option.value ? true : false,
          disabled,
          handle}} />)
      }

    </div>
  )
}

export default Radio;
