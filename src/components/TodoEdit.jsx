import React, { useState } from "react";
import '../App.css';

const TodoEdit = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectIndex, setSelectIndex] = useState();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const AddItem = () => {
    if (isEdit) {
      setTodo(
        todo.map((item, i) => {
          return i === selectIndex ? input : item;
        })
      );
      setIsEdit(false);
    } else {
      setTodo((oldData) => [...oldData, input]);
      setInput("");
      console.log(todo);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleDelete = (id) => {
    setTodo((oldData) => oldData.filter((element, index) => index !== id));
    setInput("");
    console.log(`deleted`, id);
  };

  const handleEdit = (itm, id) => {
    setInput(itm);
    setIsEdit(true);
    setSelectIndex(id);
  };
  return (
    <> <h3>TODO LIST</h3>
    <div className="mainDiv">
   
    <form onSubmit={handleSubmit} className="input_form mx-auto" >
        <input
          type="text"
          id="inputData"
          placeholder="enter here"
          onChange={handleChange}
          value={input}
        />
        <button onClick={AddItem} className='btn btn-secondary'>Add Data</button>
      </form>
      </div>
      <hr />
      <div className="listDiv">
        {todo.map((item, i) => {
          return (
            <div key={i} className='list'>
              {item}
              <button className="btn btn-danger ms-2"
                onClick={() => {
                  handleDelete(i);
                }}
              >
                Delete
              </button>
              <button className="btn btn-info ms-2"
                onClick={() => {
                  handleEdit(item, i);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    
    </>
  );
};

export default TodoEdit;
