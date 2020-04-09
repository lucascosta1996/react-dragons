import React from 'react'
import styled from 'styled-components'
import { colors } from '../../utils/StyleGuide'

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  bottom: 0;
  left: 0;
  margin: 0 auto;
  opacity: 1;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.3s;
  z-index: 2;
`

const ModalCard = styled.div`
  background: #ffffff;
  border-radius: 5px;
  color: ${colors.gray200};
  font-family: 'Nunito', sans-serif;
  left: 50%;
  padding: 2em;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  width: 400px;

  h2 {
    padding-bottom: 30px;
  }

  @media( max-width: 520px ) {
    width: 80%;
  }
`

const CloseModal = styled.span`
  color: #aaa;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 50px;
  position: absolute;
  right: 0;
  text-align: center;
  text-decoration: none;
  top: 0;
  width: 50px;

  :hover {
    color: #000;
  }
`

function Modal( { children, hideModal, idModal } ) {
  return(
    <div>
      <ModalBackground />
        <ModalCard id={ idModal } aria-modal aria-hidden tabIndex={-1} role="dialog">
          <CloseModal
            type="button"
            aria-label="Close"
            data-dismiss="modal"
            onClick={ hideModal }
          >
            X
          </CloseModal>
            { children }
      </ModalCard>
    </div>
  )
}

export default Modal