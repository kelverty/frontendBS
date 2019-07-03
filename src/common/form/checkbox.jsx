import React from 'react'

export default props => (


    <div className='form-group'>
        <label htmlFor={props.name}><input {...props.input} 
             placeholder={props.placeholder}
             readOnly={props.readOnly} type={props.type} /> {props.label}</label>
        
    </div>


    
)