import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_CLIENTS = 'GET_CLIENTS'
const ADD_CLIENT = 'ADD_CLIENT'
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
const removeClient = clients => ({type: REMOVE_CLIENT, clients})

/**
 * THUNK CREATORS
 */

export const fetchClients = () => {
  return async dispatch => {
    const {data} = await axios.get('/api/clients')
    return dispatch(getClients(data))
  }
}

export const postClient = client => {
  return async dispatch => {
    const {data} = await axios.post(`/api/clients`, client)
    return dispatch(addClient(data))
  }
}

export const deleteClient = id => {
  return async dispatch => {
    const {data} = await axios.delete(`/api/clients/${id}`)
    return dispatch(removeClient(data))
  }
}

/**
 * REDUCER
 */
export default function(state = clients, action) {
  switch (action.type) {
    case GET_CLIENTS:
      return [...action.clients]
    case REMOVE_CLIENT:
      return [...action.clients]
    case ADD_CLIENT:
      return [...state, action.client]
    default:
      return state
  }
}
