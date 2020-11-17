import "./App.css";
import InputComponent from "../InputComponent/InputComponent";
import Button from "../Button/Button";
import Todo from '../Todo/Todo';
import Done from '../Done/Done';

function App() {
  return (
    <div className="App">
      <div>
      <InputComponent />
      <Button color={'success'}>Guardar</Button>
      </div>
      <div className="TodoDoneContainer">
        <Todo />
        <Done />
      </div>
    </div>
  );
}

export default App;
