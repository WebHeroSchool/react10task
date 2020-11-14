import React, { useState, useEffect} from 'react';
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import { IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import styles from "./App.module.css";


const App = () => {
  const initialState = {
    items: [
      {
        value:"Закончить реакт",
        isDone: false,
        id:1
      },
    
      {
        value:"Похудеть",
        isDone: false,
        id:2
      },
    
      {
        value:"Пройти Witcher 3",
        isDone: false,
        id:3
      }
    ],
    count:3,
  };

  const[items, setItems]=useState(initialState.items);
  const[count, setCount]=useState(initialState.count);

  useEffect(()=>{
    console.log("componentDidUpdate");
  });

  useEffect(()=>{
    console.log("componentDidMount");
  }, []);


 const onClickDone = id => { 
  const newItemList = items.map(item =>{
    const newItem = {...item};
    
    if (item.id===id){
      newItem.isDone = !item.isDone;
    }
    return newItem
  });

    setItems(newItemList);
  }

 const onClickDelete = id =>{
    const newItemList = items.filter(item => item.id !== id);
    setItems(newItemList);
    setCount((count) => count-1);
  }
  
 const onClickAdd = value => {
   const newItems = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];
    setItems(newItems);
    setCount((count) => count+1);
  }

    return(
      <div className={styles.board}>
        <div className={styles.holder}>
          <div className={styles.holderHead}>
            <div className={styles.circle}></div>
          </div>
        </div>
          <div className={styles.paper}> 
            <h1 className={styles.header}>Список дел</h1>
            <div className={styles.content}>
              <ItemList items={items} onClickDone={onClickDone} onClickDelete={onClickDelete}/>
              <InputItem onClickAdd={onClickAdd} count={count}/>
            </div>
            <Footer count={count}/>
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
};



export default App;