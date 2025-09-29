import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [cep, setCep] = useState<string>()

  useEffect(()=>{
    const fetchData = async () => {
      try{
        console.log(cep)
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const result = await response.json();
        console.log(result)
        
      }
      catch(e){
        console.log(e)
      }
    }
    fetchData();

  }, [cep])

  const handleCepChange = (e)=>{
    const value = e.target.value
    console.log(e.target.value)
    if (value.length === 8){
      setCep(value)
    }
  } 

  return (
    <>
      <form action="" className="endereco">
        <input 
          type="text" 
          className="inputText" 
          id="cep" 
          onChange={handleCepChange}
          placeholder="cep"
          maxLength={8}/>
        <input 
          type="text" 
          className="inputText" 
          id="estado"
          placeholder="Estado"
          />
        <input 
          type="text" 
          className="inputText" 
          id="cidade"
          placeholder="cidade"
          />
        <input 
          type="text" 
          className="inputText" 
          id="bairo"
          placeholder="bairro"/>
        <input 
          type="text" 
          className="inputText" 
          id="rua"
          placeholder="logradouro"/>
        <input 
          type="text" 
          className="inputText" 
          id="número"
          placeholder="número"/>
        <input 
          type="text" 
          className="inputText" 
          id="complemento"
          placeholder="complemento"/>
      </form>
    </>
  );
}

export default App;
