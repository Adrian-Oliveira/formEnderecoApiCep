import React from 'react';
import type {FormState} from '../../core/types'
import './editableInput.css'
// Define the shape of the form state (all fields that can be edited)
interface EditableInputProps {
  id: keyof FormState;
  placeHolder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isReadOnly?: boolean;
  isRequired?: boolean;
}


const EditableInput = ({
  id,
  placeHolder = '',
  value,
  onChange,
  isReadOnly = false,
  isRequired = true
}:EditableInputProps)=>{

    return (
      <input 
        className='editableInput'
        id={id}
        type="text" 
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        readOnly={isReadOnly}
        required = {isRequired}
        />
    )
}


export { EditableInput}