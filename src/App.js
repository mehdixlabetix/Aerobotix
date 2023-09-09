import "./App.css";
import Form from "./Components/Form";
import { Routes, Route, Link, Location, useLocation } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import CLOUDS from "vanta/src/vanta.clouds";
import { useEffect } from "react";
import theme from "./Components/Theme";
import {v} from "./Components/Form";
function App() {
  useEffect(() => {
    CLOUDS({
      el: "#app",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      skyColor: 0x2f7b98,
      sunColor: 0xa71515,
      sunlightColor: 0xa20000,
      speed: 0.7,
    });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <div id="app" className="vanta">
        <div className="container">
          <AnimatedRoutes />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
