import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  return (
    <>
      <form action="" className="endereco">
        <input type="text" className="inputText" id="cep" />
        <input type="text" className="inputText" id="pais"/>
        <input type="text" className="inputText" id="estado"/>
        <input type="text" className="inputText" id="cidade"/>
        <input type="text" className="inputText" id="bairo"/>
        <input type="text" className="inputText" id="rua"/>
        <input type="text" className="inputText" id="número"/>
        <input type="text" className="inputText" id="complemento"/>
      </form>
    </>
  );
}

export default App;
