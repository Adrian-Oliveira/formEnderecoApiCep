export interface FormState {
  numero: string;
  cep: string;
  complemento: string;
  estado: string;
  localidade: string;
  bairro:string
  logradouro: string;
}


export interface ReadOnlyStatus{
  estado: boolean,
  localidade: boolean,
  bairro: boolean,
  logradouro: boolean  
}
