import "./App.css";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function App() {
  return (
    <div className="App">
      <InputComponent />
      <ButtonComponent color={'red'}/>
    </div>
  );
}

export default App;
