import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Header from './Header';
function DisplayList(props) {
  const
    [items, updateItems] = useState([{}]),
    [checked, updateCheck] = useState(false);

  const { id, title } = useParams();
  const fetchList = async () => {
    await axios.get(`https://todo2021-db.herokuapp.com/api/todoList/${id}`).then(res => {
      updateItems(JSON.parse(res.data[0].items))
    }).catch(error => console.log(error))

  }
  const history = useHistory();

  useEffect(() => {
    fetchList()
  }, []);



  // const controllCheck = (e) => {
  //   console.log(e.target.value)

  //   if (!checked) {
  //     updateCheck(true)
  //   }
  //   else {
  //     updateCheck(false)
  //   }

  // }

  const mapValues = () => {
    return items.map((value, key) => {
      return (
        <div key={key} className="item-check">
          <label className={checked ? 'check-line' : ''} htmlFor={`item-${key}`}>{value.item}</label>
          <input id={`item-${key}`} type="checkbox" /**onChange={controllCheck}*/ name="checkmark" />
        </div>
      )
    })
  }

  const removeList = () => {
    let data = { data: { id: id } }
    axios.delete('https://todo2021-db.herokuapp.com/api/lists', data).then(
      alert("list deleted!")
    ).catch(error => console.log(error))
    history.push('/');
  }

  return (
    <>
      <Header />
      <div className="items">
        <h1 className="title">{title}</h1>
        {mapValues()}
        <button onClick={removeList} className="btn remove-list">Delete list</button>
      </div>
    </>
  );
}

export default DisplayList;