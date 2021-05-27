import React, {ChangeEvent} from "react";

type TextInputProps = {
    id: string;
    value: string | number;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    inputType?: string;
}

const TextInput = ({id, value, onChange, label, inputType = 'text'}: TextInputProps) => (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <input type={inputType} className="form-control" id={id} value={value} onChange={onChange}/>
    </div>
);

export default TextInput;