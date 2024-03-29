import "../styles/App.css";
import { Header } from "./Header";
import React from "react";
import { ListItem } from "./ListItem";
import { Form } from "./Form";

function App() {
  // create hooks
  let [inputValue, setInputValue] = React.useState("");
  let [items, setItems] = React.useState([]);

  // variable for handle input

  // handle change in input
  function handleOnChange(e) {
    inputValue = e.target.value;
    setInputValue(inputValue);
  }

  // handle adding task
  function handleTaskAdd(e) {
    e.preventDefault();
    setItems((prev) => {
      return [...prev, inputValue];
    });
    console.log(items);
    setInputValue("");
  }

  // ti delete done elements from list
  function deleteEl(id) {
    setItems((prev) => prev.filter((el, index) => index !== id));
  }

  return (
    <div className="container">
      <Header title="To-Do List" />
      <Form value={inputValue} checkChange={handleOnChange} checkClicking={handleTaskAdd} />
      <ul className="list">
        {items.map((el, i) => (
          <ListItem key={i} value={el} id={i} checkDeletion={deleteEl} />
        ))}
      </ul>
    </div>
  );
}

export default App;
