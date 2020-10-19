import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (
  <TextField
  id="standard-full-width"
  placeholder="Новое дело"
  fullWidth
  InputLabelProps={{
    shrink: true,
  }}
/>
);

export default InputItem;