import React from 'react';
import type {FormState} from '../../core/types'
// Define the shape of the form state (all fields that can be edited)
interface EditableInputProps {
  id: keyof FormState;
  placeHolder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isReadOnly?: boolean;
}


const EditableInput = ({
  id,
  placeHolder = '',
  value,
  onChange,
  isReadOnly = false
}:EditableInputProps)=>{

    return (
      <input 
        id={id}
        type="text" 
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        readOnly={isReadOnly}
        />
    )
}


export { EditableInput}