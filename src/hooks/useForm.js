import { useState } from 'react'

const useForm = ( callback ) => {

  const [ values, setValues ] = useState( {
    email: '',
    password: ''
  } )

  const handleSubmit = ( event ) => {
    if ( event ) event.preventDefault()
    callback()
  }

  const handleChange = ( event ) => {
    event.persist()
    setValues( values => ( { ...values, [ event.target.name ]: event.target.value } ) )
  };

  return {
    handleChange,
    handleSubmit,
    setValues,
    values,
  }
};

export default useForm
