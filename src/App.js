import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import {Routes, Route, Link, Location, useLocation} from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <div className="App">
       {/* <div className="logo">
            <img src={require("./images/logo.png") } className="aero" alt="logo" />
        </div>*/}
        <div className="container">
            <AnimatedRoutes />
        </div>
    </div>
  );
}

export default App;
