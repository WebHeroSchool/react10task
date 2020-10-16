import React from 'react';
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import "./App.css";

const items = [
  {
    value:"Закончить реакт"
  },

  {
    value:"Похудеть"
  },

  {
    value:"Пройти Witcher 3"
  }
]
const App = () => (
<div className= "wrap">
  <h1>Важные дела</h1>
  <InputItem />
  <ItemList items={items}/>
  <Footer count={3}/>
</div>);

export default App;