import React from 'react';
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import { IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import styles from "./App.module.css";

const items = [
  {
    value:"Закончить реакт",
    isDone: false
  },

  {
    value:"Похудеть",
    isDone: false
  },

  {
    value:"Пройти Witcher 3",
    isDone: true
  }
]
const App = () => (
<div className={styles.board}>
  <div className={styles.holder}>
    <div className={styles.holderHead}>
      <div className={styles.circle}></div>
    </div>
  </div>
  <div className={styles.paper}> 
    <h1 className={styles.header}>Список дел</h1>
    <div className={styles.content}>
      <ItemList items={items}/>
      <InputItem />
    </div>
    <Footer count={3}/>
  </div>
  <div className={styles.icons}>
  <IconButton>
    <DehazeIcon />
  </IconButton>
  <IconButton>
    <CheckIcon /> 
  </IconButton>
  <IconButton>
    <ClearIcon />
  </IconButton>  
  </div>
   
</div>);

export default App;