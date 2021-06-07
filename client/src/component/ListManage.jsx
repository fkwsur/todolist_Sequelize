import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ListManage = (e) => {

  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(""); //수정된 값 저장소 

  const List = async (e) => {
    await axios.get('/list')
      .then((res) => {
        console.log(res.data);
        setList(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    List();
  }, [])

  const onChange = (e) => {
    setUpdate(e.target.value);
  }


  const onUpdate = async (idx) => {
    await axios.post('/update', {
      idx: idx,
      content: update
    })
      .then((res) => {
        console.log('res');
        alert('수정이 완료되었습니다.');
        window.location.reload();
      }).catch((err) => {
        console.log(err);
      })
  }

  const onDelete = async (idx) => {
    await axios.post('/delete', {
      idx: idx
    })
      .then((res) => {
        console.log('res');
        alert('삭제가 완료되었습니다.');
        window.location.reload();
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      {list.map(k => (
        <ListFormat
          onUpdate={onUpdate}
          onDelete={onDelete}
          onChange={onChange}
          idx={k.idx}
          content={k.content}
          updateContent={k.content}
          updateValue={() => setUpdate(e.target.value)}
        />
      ))}
    </>
  )
}

export const ListFormat = (props) => {
  const [updating, isUpdating] = useState(false);

  return (
    <>
      <p>{props.idx}</p>
      {updating === false ?
        <>
          <h3>{props.content}</h3>
          <button onClick={() => isUpdating(true)}>수정하기</button>
          <button onClick={() => props.onDelete(props.idx)}>삭제하기</button>
        </>
        :
        <>
          <textarea type="text" name="update" onChange={props.onChange} required>{props.updateContent}</textarea>
          <button onClick={() => props.onUpdate(props.idx)}>수정완료</button>
          <button onClick={() => isUpdating(false)}>취소</button>
        </>
      }
    </>
  )
}