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
<<<<<<< HEAD
      <ButtonComponent type={'success'}/>
=======
      <ButtonComponent color={'red'}/>
      </div>
      <div className="TodoDoneContainer">
        <Todo />
        <Done />
      </div>
>>>>>>> 2a8a28ccfc4e744da18f6ce9ef43436131c78070
    </div>
  );
}

export default App;
