import React, {useState, useEffect} from 'react';
import './Form.css';

import TextField from './components/Textfield';
import CheckBox from './components/Checkbox';
import Radio from './components/Radio';
import Button from './components/Button';

const Form = ({className, post, elements, disabled = false}) => {

  const [state, setState] = useState(elements.map(field => ({
    ...field,
    value: field.value || '',
    touched: false,
    error: false,
    disabled: field.disabled || disabled ? true : false
  })));

  const validate = (field, value) => {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    let isError = false;
    // NOT Empty or False on REQUIRED
    isError = (field.required && (value === '' || value === false)) ? true : isError;
    isError = (field.type === 'email' && !value.match(emailRegex) && value.length > 0) ? true : isError;

    return isError;
  }

  const change = e => {
    setState(state.map(field => {
      if(field.name === e.target.name) {
        const value = field.type === 'checkbox' ? e.target.checked : e.target.value;
        return {...field, value, error: validate(field, value)};
      }
      return field;
    }))
  }

  const submit = e => {
    e.preventDefault();

    // validate field values
    const nState = state.map(field => ({...field, error: validate(field, field.value)}));
    const hasErrors = nState.filter(field => field.error).length > 0 ? true : false;
    setState(nState);

    if(hasErrors) return;

    // condense values to JSON object and send to parent
    const data = state.reduce((values,field) => ({...values, [field.name]: field.value}), {});
    post(data);
  }

  return (
    <form className={className} onSubmit={submit}>
      {
        state.map((field) => {
          switch (field.type) {
            case 'text':
            case 'tel':
            case 'email':
            case 'number':
              return <TextField
                {...field}
                handle={change}
                key={field.name} />
            case 'checkbox':
              return <CheckBox
                {...field}
                handle={change}
                key={field.name} />
            case 'radio':
              return <Radio
                {...field}
                handle={change}
                key={field.name} />
            case 'button':
              return <Button
                {...field}
                key={field.name} />
            default:
              return undefined;
          }
        })
      }
    </form>

  )
}

export default Form;
