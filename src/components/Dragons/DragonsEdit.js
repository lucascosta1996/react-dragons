import React from 'react';
import { useModal } from "react-modal-hook"
import DragonsForm from './DragonsForm'
import Modal from '../Modal/Modal'
import styled from 'styled-components'

const EditWrapper = styled.button`
  background: #47B1FF;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  list-style: none;
  margin: 10px;
  padding: 10px;

  :hover {
    background: #4175E8; 
  }
`

function DragonsEdit( { item } ) {
  const [showModal, hideModal] = useModal( () => (
    <React.Fragment>
      <Modal
        hideModal={ hideModal }
      >
        <h2>
          { `Edit ${item.name}` }
        </h2>
        <DragonsForm
          formType='edit'
          item={ item }
        />
      </Modal>
      </React.Fragment>
  ))

  return (
    <EditWrapper
      onClick={ showModal }
    >
      Edit
    </EditWrapper>
  )
}

export default DragonsEdit
