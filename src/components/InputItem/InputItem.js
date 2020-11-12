import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from "./InputItem.module.css";
import classnames from 'classnames'

class InputItem extends React.Component {
  state = {
    InputValue: '',
    isError:" ",
    isEmpty: false,
  }

  onButtonClick = () => {
    this.setState({
      InputValue: ''
    });
    console.log("InputValue :"+ this.state.InputValue)

    if(this.state.InputValue===''){
      this.setState({isError: "ПОЛЕ НЕ ДОЛЖНО БЫТЬ ПУСТЫМ!"})
      this.setState({isEmpty: true})
    }
    else {
      this.props.onClickAdd(this.state.InputValue);
    }
    
  }

  render () {
    const { count } = this.props;
    return (
      <div className={ classnames({[styles.empty]: this.state.isEmpty, [styles.input]: true})}>
          <TextField
            id="standard-full-width"
            color="primary"
            fullWidth
            label={this.state.isError}
            value={this.state.InputValue}
            onChange={event => this.setState({ InputValue: event.target.value.toUpperCase(), isError:" ", isEmpty: false})}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {count<8 ? 
            <Button variant="contained" color="default" disabled={false} onClick={this.onButtonClick} >  
            Добавить дело 
            </Button> : <Button variant="contained" color="default" disabled={true}>  
            Выполни хотя бы 1 задание 
            </Button>
          }
          
      </div>
    );
  }
  
}

export default InputItem;


