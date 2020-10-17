import React from 'react';
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
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
<div className={styles.wrap}>
  <h1>Важные дела</h1>
  <InputItem />
  <ItemList items={items}/>
  <Footer count={3}/>
</div>);

export default App;