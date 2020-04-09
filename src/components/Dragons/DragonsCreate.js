import React from 'react';
import { useModal } from "react-modal-hook"
import styled from 'styled-components'
import DragonsForm from './DragonsForm'
import Modal from '../Modal/Modal'
import { colors } from '../../utils/StyleGuide' 

const AddWrapper = styled.button`
  background-color: ${colors.purple};
  border: none;
  border-radius: 50%;
  cursor: pointer;  
  color: #fff;
  font-family: 'Nunito', sans-serif;
  font-size: 40px;
  list-style: none;
  height: 70px;
  width: 70px;
  position: fixed;
  bottom: 20px;
  right: 20px;
`

function DragonsCreate( { newId, item } ) {
  const [showModal, hideModal] = useModal( () => (
    <React.Fragment>
      <Modal
        hideModal={ hideModal }
        idModal="add-dragon-modal"
      >
        <h2>
          { `Add dragon` }
        </h2>
        <DragonsForm
          formType='create'
          item={ item }
          newId={ newId }
          hideModal={ hideModal }
        />
      </Modal>
    </React.Fragment>
  ))

  return (
    <AddWrapper
      onClick={ showModal }
      id="add-dragon"
    >
      +
    </AddWrapper>
  )
}

export default DragonsCreate
