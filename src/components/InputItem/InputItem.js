import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from "./InputItem.module.css";

class InputItem extends React.Component {
  state = {
    InputValue: ''
  }
  
  render () {
    const { onClickAdd, isActive, btnisActive} = this.props;
    return (
      <div className={styles.input}>
          <TextField
            id="standard-full-width"
            color = "secondary"
            fullWidth
            value={this.state.InputValue}
            onChange={event => this.setState({ InputValue: event.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" color="default" disabled={isActive}  onClick={(btnisActive())} onClick = {() => onClickAdd(this.state.InputValue)} >  
                  Добавить дело 
          </Button>
          
      </div>
    );
  }
}

export default InputItem;


//{count<8 ? <Button variant="contained" color="default" disabled={false} onClick = {() => onClickAdd(this.state.InputValue)} >  
//          Добавить дело 
//          </Button> : <Button variant="contained" color="default" disabled={true}>  
//                  Выполни хотя бы 1 задание 
//          </Button>}