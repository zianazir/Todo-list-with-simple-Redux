import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./Actions/Index";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [editNewTodo, seteditNewTodo] = useState({id : " " , data : " "});

  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <div className="container m-5">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Todo
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text "
                value={editNewTodo.data}
                onChange={(e) =>{ seteditNewTodo({data : e.target.value , id : editNewTodo.id})}}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-sm btn-success" data-bs-dismiss="modal" onClick={(e)=>{
                e.preventDefault()
                  dispatch(editTodo(editNewTodo ))
                  // console.log(editNewTodo)
              }}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <form className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Add a Todo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ maxWidth: "55rem" }}
            required
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTodo(inputData));
            setInputData("");
          }}
        >
          ADD TODO
        </button>
      </form>
          <div className="row">
      {list.map((elem) => {
        return (
          <div className="col-md-4">
          <div className="card m-3 " key={elem.id} style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{elem.data}</h5>
              <button
                className="btn btn-sm btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteTodo(elem.id));
                }}
              >
                Done
              </button>
              <button
                type="button"
                className="btn btn-sm btn-warning mx-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal" 
                onClick={()=>seteditNewTodo(elem)}
              >
                Edit
              </button>
            </div>
          </div>
          </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default App;
