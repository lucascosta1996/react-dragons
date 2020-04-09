import React, { useState, useEffect, useRef, useContext, Fragment } from 'react'
import DragonsEdit from  './DragonsEdit'
import DragonsCreate from './DragonsCreate'
import Header from '../../layout/Header'
import { ModalProvider } from "react-modal-hook"
import axios from 'axios'
import styled from 'styled-components'
import DragonsDelete from './DragonsDelete'
import { colors } from '../../utils/StyleGuide'
import { DragonsListContext } from '../../context/DragonsListContext' 

const List = styled.ul`
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 auto;
  max-width: 1010px;
  padding-left: 0;
  padding-top: 40px;

  @media ( max-width: 520px ) {
    align-items: center;
    flex-direction: center;
    max-width: 90%;
  }
`

const ListItemContent = styled.div`
  align-items: flex-start;
  background-color: ${colors.gray100};
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 40px;
  width: 400px;

  @media( max-width: 520px ) {
    padding: 20px 10px;
    width: 100%;
  }

  .infos {
    align-items: flex-start;
    display: flex;
    flex-direction: column;

    .title {
      font-family: 'Nunito', sans-serif;
      font-weight: 600;
    }

    .type {
      color: #696969;
      font-family: 'Nunito', sans-serif;
    }

    .date {
      color: #696969;
      font-family: 'Nunito', sans-serif;
      font-size: 12px;
      font-weight: 400;
    }
  }
`

function DragonsList() {
  const isCancelled = useRef(false)
  const context = useContext( DragonsListContext )
  
  useEffect( () => {
    if (!isCancelled.current) {
    }
    context.dragons.set()
    return () => {
      isCancelled.current = true;
    };
  }, [] )

  if ( context.loading.get ) return null

  const defaultItem = {
    name: '',
    type: ''
  }

  return (
    <ModalProvider>
      <Header />
        <List>
          <DragonsListContext.Consumer>
            {
              (context) => {
                  const dragons = context.dragons.get
                  
                  return (
                    <Fragment>
                      {
                        dragons.map( ( item, index ) => (
                          <li key={ `${item.name}${index}` }>
                            <ListItemContent>
                              <div className='infos'>
                                <span className='title'>{ item.name }</span>
                                <span className='type'>{ item.type }</span>
                                <span className='date'>{ item.createdAt }</span>
                              </div>
                              <div>
                                <DragonsEdit
                                  item={ item }
                                />
                                <DragonsDelete
                                  item={ item }
                                />
                              </div>
                            </ListItemContent>
                          </li>
                        ) )
                      }
                    </Fragment>
                  )
              }
            }
          </DragonsListContext.Consumer>
      </List>
      {
        <DragonsListContext.Consumer>
          {
            ( context ) => {
              const newId = context.newId.get
              return (
                newId && (
                  <DragonsCreate
                    newId={ newId }
                    item={ defaultItem }
                  />
                )
              )
            }
          }
        </DragonsListContext.Consumer>
      }
    </ModalProvider>
  )
}

export default DragonsList
