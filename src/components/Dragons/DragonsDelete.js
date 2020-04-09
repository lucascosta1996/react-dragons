import React, { useContext } from 'react'
import styled from 'styled-components'
import { useModal } from "react-modal-hook"
import Modal from '../Modal/Modal'
import { deleteDragon } from '../../utils/dragonsAPI'
import { DragonsListContext } from '../../context/DragonsListContext'

const DeleteWrapper = styled.button`
  background: #E82C4A;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  list-style: none;
  padding: 10px;

  :hover {
    background: #FF513C; 
  }
`

function DragonsDelete( { item } ) {
  const context = useContext( DragonsListContext )

  const [showModal, hideModal] = useModal(() => (
    <React.Fragment>
      <Modal
        hideModal={ hideModal }
      >
        <h2>
          { `Are you sure you want to delete ${item.name}?` }
        </h2>
        <DeleteWrapper onClick={ () => { deleteDragonAPI(); hideModal(); } }>
          Confirm
        </DeleteWrapper>
      </Modal>
      </React.Fragment>
  ))

  async function callback() {
    await context.dragons.set()
  }

  const deleteDragonAPI = () => {
    deleteDragon( item, callback )
  }

  return (
    <DeleteWrapper
      onClick={ showModal }
    >
      Delete
    </DeleteWrapper>
  )
}

export default DragonsDelete
