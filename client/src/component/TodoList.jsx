import React, { useState } from 'react';
import axios from 'axios';

export const TodoList = () => {
  const [todo, setTodo] = useState("");

  const onChange = (e) => {
    setTodo(e.target.value);
  }

  const onSubmit = async (e) => {
    console.log('?')
    e.preventDefault()
    await axios.post('/create', {
      content: todo
    }).then((res) => {
      console.log('?')
      alert('전송성공');
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={todo} name="todo" onChange={onChange} required />
      <button type="submit">추가하기</button>
    </form>
  )
}