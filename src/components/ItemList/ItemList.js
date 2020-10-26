import React from 'react';
import Item from "../Item/Item";
import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "./ItemList.module.css"

const ItemList = ({items, onClickDone, onClickDelete}) => (<ul className={styles.list}>
  {items.map(item => <li key={item.id} className={styles.item}>
    <Checkbox
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        onClick={() => onClickDone(item.id)}
    />
    <Item value={item.value} isDone={item.isDone}/>
    <IconButton aria-label="delete" onClick={()=> onClickDelete(item.id)}>
        <DeleteIcon/>
    </IconButton>
  </li>)}
</ul>);

  export default ItemList;