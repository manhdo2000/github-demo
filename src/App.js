import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import InputFieldComponent from "./components/input-field/inputField"
import ButtonComponent from './components/button-field/buttonField';


function App() {
  return (
    <div className="App">
      <h1>To do list</h1>
      <FirstComponent />
      Email: <InputFieldComponent />
      <br />
      Password: <InputFieldComponent />
      <br />
      <ButtonComponent />
    </div>
  );
}

class FirstComponent extends Component {
  render() {
    return (
      <div>Component</div>
    )
  }
}





export default App;
