import React from 'react';
import classnames from 'classnames'
import styles from './Item.module.css';
import { string } from 'prop-types';

const Item = ({value, isDone}) => (<span className ={
    classnames({
        [styles.done]: isDone
    })
}>
    {value}
</span>);

Item.defaultProps = {
    value:"Добавить дел"
}

Item.propTypes = {
    value: string
}

export default Item;