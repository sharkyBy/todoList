import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="container">
        <ul className="todoList">
          <li className="todoListTitle">TODO LIST</li>
          <li className="todoListItem">
            <p>Task 1</p>
            <div className="button">
              <button id="done"> Done</button>
              <button id="delete">Delete</button>
            </div>
          </li>
        </ul>
        <button id="add" type="button">Add</button>
      </div>
    </div>
  );
}

export default App;
