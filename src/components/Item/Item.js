import React from 'react';
import classnames from 'classnames'
import styles from './Item.module.css';
import { string } from 'prop-types';

class Item extends React.Component {
    componentDidMount() {
        this.timerID = setInterval(() => console.log('interval'), 1000);
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('componentWillUnmount');
    }
    
    render() {
        const {value, isDone} = this.props;

        return (
            <span className ={
                classnames({
                    [styles.done]: isDone
                })
            }>
                {value}
            </span>
            
        )
    }
}

Item.defaultProps = {
    value:"Добавить дел"
}   

Item.propTypes = {
    value: string
}

export default Item;