import React from 'react'
import formWrapper from './FormWrapper'

function DynamicForm(props) {
  const field1Name = props.field1[0].toUpperCase() + props.field1.slice(1).toLowerCase();
  const field2Name = props.field2[0].toUpperCase() + props.field2.slice(1).toLowerCase();
  return (
    <div>
        {field1Name}: <input type='text' name={props.field1} onChange={props.handleChange} value={props.value.field1} />
        <br/><br/>

        {field2Name}: <input type='text' name={props.field2} onChange={props.handleChange} value={props.value.field2} />
        <br/><br/>
    </div>
  )
}

export default formWrapper(DynamicForm)