import React, { createContext, useState } from 'react'
import axios from 'axios'

export const DragonsListContext = createContext()

function DragonsListProvider( { children } ) {
  const [ dragons, setDragons ] = useState( { data: [] } )
  const [ newId, setNewId ] = useState(0)
  const [ loading, setLoading ] = useState( true )
  const [ error, setError ] = useState( false )

  async function fetchData() {
    setLoading( true )
    setError()

    const response = await axios.get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon`)
    
    const lastIndex = response.data[response.data.length - 1].id
    const newIdNumber = parseInt(lastIndex) + 1
    setNewId( newIdNumber )

    const sortedArray = response.data.sort( (a, b) => {
      const textA = a.name.toUpperCase()
      const textB = b.name.toUpperCase()
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
    })

    setDragons( sortedArray )
    setLoading( false )
  }
  

  let store = {
    dragons: {
      get: dragons, set: () => fetchData()
    },
    newId: {
      get: newId
    },
    loading: {
      get: loading
    },
    error: {
      get: error
    }
  }

  return (
    <DragonsListContext.Provider value={ store }>
      { children }
    </DragonsListContext.Provider>
  )
}

export default DragonsListProvider
