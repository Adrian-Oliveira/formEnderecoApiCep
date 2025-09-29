import React from 'react';

interface EditableInputProps {
  label: string;
  fieldName: keyof FormState; // Uses the field name from the FormState interface
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isReadOnly: boolean;
}


const EditableInput = ()=>{

    return <></>
}


export { EditableInput}