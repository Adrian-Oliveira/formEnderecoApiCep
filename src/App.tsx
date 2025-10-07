import { useState, useEffect, useCallback } from "react";
import "./App.css";
import type { FormState, ReadOnlyStatus } from "./core/types";
import EditableInput from "./components/EditableInput";
// Define the shape of the form state (all fields that can be edited)

const INITIAL_FORM_STATE: FormState = {
  numero: '',
  cep: '',
  complemento: '',
  estado: '',
  localidade: '',
  bairro: '',
  logradouro: ''  
  
};

const INITIAL_READ_ONLY_STATUS:ReadOnlyStatus = {
  estado: false,
  localidade: false,
  bairro: false,
  logradouro: false 
}

const fetchData = async (cep:string) => {
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


function App() {
  const [cep, setCep] = useState<string>()
  const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
  const [readOnlyStatus, setReadOnlyStatus] = useState<ReadOnlyStatus>(INITIAL_READ_ONLY_STATUS)


  useEffect(()=>{
    

  }, [cep])

  const handleCepChange = async (e:React.ChangeEvent<HTMLInputElement>)=>{
    const cep = e.target.value.replace(/\D/g,'');
    setFormState(prev=> ({...prev, cep}))
    setReadOnlyStatus(INITIAL_READ_ONLY_STATUS)
    console.log(e.target.value)
    if (cep.length === 8){
      setCep(cep)
    }
  } 
  const handleInputChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=>{
    const {id, value} = e.target
    console.log(id, value)
    setFormState(prev => ({
      ...prev,
      [id as keyof FormState]: value
    }))
    console.log(formState)
  },[]);  
  
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
        
        <EditableInput
          id="estado"
          placeHolder="Estado"
          value={formState.estado}
          onChange={handleInputChange}
          isReadOnly={readOnlyStatus.estado}

        />

        <EditableInput
          id="localidade"
          placeHolder="Cidade/Localidade"
          value={formState.localidade}
          onChange={handleInputChange}
          isReadOnly={readOnlyStatus.localidade}

        />

        <EditableInput
          id="bairro"
          placeHolder="Bairro"
          value={formState.bairro}
          onChange={handleInputChange}
          isReadOnly={readOnlyStatus.bairro}

        />
        <EditableInput
          id="logradouro"
          placeHolder="Logradouro"
          value={formState. logradouro}
          onChange={handleInputChange}
          isReadOnly={readOnlyStatus.logradouro}

        />
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
