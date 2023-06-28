import logo from './logo.svg';
import './App.css';
import Form from "./Form";

function App() {
  return (
    <div className="App">
       {/* <div className="logo">
            <img src={require("./images/logo.png") } className="aero" alt="logo" />
        </div>*/}
        <div className="container">
            <Form />
            <div className="side"></div>
        </div>
    </div>
  );
}

export default App;
