import React from 'react';
import './App.css';
import {TodoList} from './component/TodoList.jsx'
import {ListManage} from './component/ListManage.jsx'

const  App = () => {
  return (
    <div className="App">
      Todo List
      <TodoList />
      <ListManage />
    </div>
  );
}

export default App;
