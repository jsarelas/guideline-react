import React from 'react';

const FormTextArea = (props) => (
    <div className="form-textarea">
        <textarea name={props.name} placeholder={props.placeholder} onChange={response => props.input.onChange(response)}>
        </textarea>
        <div className="text-help">{props.meta.touched && props.meta.error}</div>
    </div>
);

export default FormTextArea;
