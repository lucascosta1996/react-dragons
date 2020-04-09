import React, { useEffect, useRef, useContext } from 'react'
import useForm from '../../hooks/useForm'
import styled from 'styled-components'
import { colors } from '../../utils/StyleGuide'
import { getDateAndHour } from '../../utils/helpers'
import { createDragon, editDragon } from '../../utils/dragonsAPI'
import { DragonsListContext } from '../../context/DragonsListContext'

const FormWrapper = styled.form`
  font-family: 'Nunito', sans-serif;

  div input {
    border: 1px solid #bbb;
    border-radius: 20px;
    box-sizing: border-box;
    color: ${colors.gray200};
    display: inline-block;
    font-weight: 400;
    margin: 10px 0 20px;
    outline: none;
    padding: 15px 10px;
    transition: 0.2s ease all;
    width: 100%;
  }

  .button {
    background: ${colors.purple};
    border-radius: 20px;
    border: none;
    clear: right;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    margin-top: 20px;
    padding: 15px 50px;
    transition: 0.2s ease all;
    width: auto;
  }
`

function DragonsForm( { formType, item, newId } ) {
  const { values, handleChange, handleSubmit, setValues } = useForm( apiRequest )
  const isCancelled = useRef(false)
  const context = useContext( DragonsListContext )
  
  function apiRequest() {
    const creationDate = getDateAndHour()
    const idRequest = formType === 'edit' ? item.id : `${newId}`

    const dragonRequest = {
      id: idRequest,
      createdAt: creationDate,
      name: values.name,
      type: values.type,
      histories: []
    }

    async function callback() {
      await context.dragons.set()
    }

    if ( formType === 'edit' ) {
      editDragon( dragonRequest, callback )
    } else if ( formType === 'create' ) {
      createDragon( dragonRequest, callback )
    }
  }

  useEffect(() => {
    if (!isCancelled.current) {
      setValues( item )
    }
    return () => {
      isCancelled.current = true;
    };
  }, [])

  return (
    <FormWrapper onSubmit={ handleSubmit }>
      <div>
        <label className="label">Name</label>
        <input id="name-dragon" className="input" type="text" name="name" value={ !values.name ? item.name : values.name } required onChange={ handleChange } />
      </div>
      <div>
        <label className="label">Type</label>
        <input id="type-dragon" className="input" type="text" name="type" value={ !values.type ? item.type : values.type } required onChange={ handleChange } />
      </div>
      <button id={ formType === 'edit' ? 'edit-dragon-button' : 'add-dragon-button' } type="submit" className="button">{ formType === 'edit' ? 'Update' : 'Add' }</button>
    </FormWrapper>
  )
}

export default DragonsForm
