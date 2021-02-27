import React, { useState } from 'react';
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import { IconButton } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import styles from "./Todo.module.css";


const Todo = () => {
  const initialState = {
    items: [
      {
        value:"Закончить реакт",
        isDone: false,
        id:1,
        isHidden: false
      },
    
      {
        value:"Похудеть",
        isDone: false,
        id:2,
        isHidden:false,
      },
    
      {
        value:"Пройти Witcher 3",
        isDone: false,
        id:3,
        isHidden:false,
      }
    ],
    count:3,
    birthId:3,
    filter:'all',

  };

  const[filter, setFilter]=useState(initialState.filter);
  const[items, setItems]=useState(initialState.items);
  const[count, setCount]=useState(initialState.count);
  const[birthId, setbirthId]=useState(initialState.birthId);


const taskComplete = () => { 
  setFilter('done');
  const newItemList = items.map(item =>{
    const newItem = {...item};
    
    if (item.isDone===true){
      newItem.isHidden = false;
    } else newItem.isHidden = true;
    return newItem
  });
  setItems(newItemList);
  }

  const taskNotComplete = () => { 
    setFilter('unDone');
    const newItemList = items.map(item =>{
      const newItem = {...item};
      
      if (item.isDone!==true){
        newItem.isHidden = false;
      } else newItem.isHidden = true;
      return newItem
    });
    setItems(newItemList);
    }

  const taskAll = () =>{
    setFilter('all');
    const newItemList = items.map(item =>{
      const newItem = {...item};
      
      if (item.id){
        newItem.isHidden = false;
      };
      return newItem
    });
    setItems(newItemList);
  }

 const onClickDone = id => { 
  const newItemList = items.map(item =>{
    const newItem = {...item};
    
    if (item.id===id){
      newItem.isDone = !item.isDone;
      if(filter !== 'all'){
        newItem.isHidden = true;
      };
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

 const onClickAdd = (value) => {
      let isThisTaskVisible = false;

      if (filter === 'done') {
      isThisTaskVisible = true
      };
        const newItems = [
          ...items,
          {
            value,
            isDone: false,
            id: birthId + 1,
            isHidden: isThisTaskVisible,
          }
        ];
        setItems(newItems);
        setCount((count) => count+1);
        setbirthId((birthId) => birthId+1);
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
              <InputItem items={items} onClickAdd={onClickAdd} count={count}/>
            </div>
            <Footer count={count}/>
          </div>
          <div className={styles.icons}>
            <IconButton onClick={()=> taskAll()}>
              <DehazeIcon />
            </IconButton>
            <IconButton onClick={()=> taskComplete()}>
              <CheckIcon /> 
            </IconButton>
            <IconButton onClick={()=> taskNotComplete()}>
              <ClearIcon />
            </IconButton>  
          </div>
      </div>);
};



export default Todo;