import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <select  {...props.input} onChange={props.onChange} className='form-control'
          
                 readOnly={props.readOnly} type='select' >
                 <option value="">Selecione</option>
                {props.list.map(ds => ( 
            <option key={ds._id} value={ds._id}> {ds.descricao}
                 </option>))}
                 </select >
       
        </div>
    </Grid>
)