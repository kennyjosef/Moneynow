import React from 'react'
import { ErrorMessage, useField } from 'formik'
import classes from './NewPassword.module.css'
const TextField = ({label, ...props}) => {
    const [field, meta]= useField(props)
    console.log(field, meta)
  return (
    <div>
        <label htmlFor={field.name}>{label}</label>
      <input 
      className={`form-control shadow-none ${meta.touched&& meta.error && "is-invalid"}`}
      autoComplete='off'
      {...field}{...props} />
      <p className={classes.error}>
      <ErrorMessage name={field.name}/>
      </p>
    </div>
  )
}

export default TextField
