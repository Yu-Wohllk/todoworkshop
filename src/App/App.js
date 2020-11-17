import "./App.css";
import InputComponent from "../InputComponent/InputComponent";
import Button from "../Button/Button";
import Todo from "../Todo/Todo";
import Done from "../Done/Done";

function App() {
  const todos = [
    {
      id: 1,
      status: "todo",
      label: "Comprar Lechuga",
    },
    {
      id: 2,
      status: "todo",
      label: "Comprar Tomates",
    },
    {
      id: 3,
      status: "done",
      label: "Estudiar Front",
    },
    {
      id: 4,
      status: "done",
      label: "Estudiar Android",
    },
    {
      id: 5,
      status: "done",
      label: "Ir a Trotar",
    },
  ];

  const todoList = todos.filter((todo) => todo.status === 'todo');
  const doneList = todos.filter((todo) => todo.status === 'done');

  return (
    <div className="App">
      <div>
        <InputComponent />
        <Button>Press me</Button>
      </div>
      <div className="TodoDoneContainer">
        <Todo />
        <Done doneList={doneList} />
      </div>
    </div>
  );
}

export default App;
