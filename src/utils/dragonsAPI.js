import axios from 'axios'

const API_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/'

export const editDragon = async ( dragon, callback ) => {
  await axios.put(`${API_URL}${dragon.id}`, dragon)
  .then( res => {
    alert( `${dragon.name} updated succesfully!` )
  } )
  .catch( err => {
    alert( `Error while editing ${dragon.name} :/` )
  } )

  callback()
}

export const createDragon = async ( dragon, callback ) => {
  await axios.post(`${API_URL}`, dragon)
  .then( res => {
    alert( `${dragon.name} created succesfully!` )
  })
  .catch( err => {
    alert( `Error while creating ${dragon.name} :/` )
  } )

  callback()
}

export const deleteDragon = async ( dragon, callback ) => {
  await axios.delete(`${API_URL}${dragon.id}`)
  .then( res => {
    alert( `${dragon.name} deleted succesfully` )
  })
  .catch( err => {
    alert( `Error while trying to delete ${dragon.name}. Try again later.` )
  } )

  callback()
}
