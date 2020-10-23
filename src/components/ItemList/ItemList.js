import React from 'react';
import Item from "../Item/Item";
import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "./ItemList.module.css"

const ItemList = ({items, onClickDone}) => (<ul className={styles.list}>
  {items.map(item => <li key={item.value} className={styles.item}>
    <Checkbox
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        onClick={() => onClickDone(item.isDone)}
    />
    <Item value={item.value} isDone={item.isDone}/>
    <IconButton aria-label="delete">
        <DeleteIcon />
    </IconButton>
  </li>)}
</ul>);

  export default ItemList;