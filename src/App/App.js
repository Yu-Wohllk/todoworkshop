import "./App.css";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Todo from '../Todo/Todo';
import Done from '../Done/Done';

function App() {
  return (
    <div className="App">
      <div>
      <InputComponent />
      <ButtonComponent color={'success'}/>
      </div>
      <div className="TodoDoneContainer">
        <Todo />
        <Done />
      </div>
    </div>
  );
}

export default App;
