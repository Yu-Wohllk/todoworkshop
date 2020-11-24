import React, { useState } from "react";
import "./App.css";
import InputComponent from "../InputComponent/InputComponent";
import Button from "../Button/Button";
import TodoContainer from "../TodoContainer/TasksContainer";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeTodoTextHandler = (e) => {
    setTodoText(e.target.value);
  };

  const onClickTodoHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      label: todoText,
      status: "todo",
    };

    const todosArr = [...todos, newTodo];
    console.log(todosArr);
    setTodos([...todos, newTodo]);
    setTodoText("");
  };

  const todoList = todos.filter((todo) => todo.status === "todo");
  const doneList = todos.filter((todo) => todo.status === "done");

  return (
    <div className="App">
      <div>
        <form>
          <InputComponent onChange={onChangeTodoTextHandler} value={todoText} />
          <Button onClick={onClickTodoHandler}>Agregar</Button>
        </form>
      </div>
      <div className="TodoDoneContainer">
        <TodoContainer taskList={todoList}>Todos</TodoContainer>
        <TodoContainer taskList={doneList}>Done</TodoContainer>
      </div>
    </div>
  );
}

export default App;
