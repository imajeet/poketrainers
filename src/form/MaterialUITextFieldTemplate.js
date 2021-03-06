
import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldTemplate = (locals) => {
  return (
    <TextField
      floatingLabelText={locals.label}
      hintText={locals.label}
      value={locals.value}
      errorText={locals.error}
      type="tel"
      onChange={(evt,value) => locals.onChange(value)}
      floatingLabelFixed
    />
  )
}

export default TextFieldTemplate;
