import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CLIENTS = 'GET_CLIENTS'
const ADD_CLENT = 'ADD_CLIENT'
const UPDATE_CLIENT = 'UPDATE_CLIENT'
const REMOVE_CLIENT = 'REMOVE_CLIENT'

/**
 * INITIAL STATE
 */
const clients = []

/**
 * ACTION CREATORS
 */
export const getClients = clients => ({type: 'GET_CLIENTS', clients})
const addClient = client => ({type: ADD_CLIENT, client})
const updateClient = client => ({type: UPDATE_CLIENT, client})
const removeClient = () => ({type: REMOVE_CLIENT})

/**
 * THUNK CREATORS
 */

export const fetchClients = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/clients')
    console.log('got the data!')
    return dispatch(getClients(data))
  }
}

/**
 * REDUCER
 */
export default function(state = clients, action) {
  switch (action.type) {
    case GET_CLIENTS:
      return [...action.clients]
    // case REMOVE_CLIENT:
    //   return clients
    default:
      return state
  }
}
