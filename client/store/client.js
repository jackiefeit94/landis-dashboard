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
const updateClient = clients => ({type: UPDATE_CLIENT, clients})
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

export const putClient = (id, updatedInfo) => {
  return async dispatch => {
    const {data} = await axios.put(`/api/clients/${id}`, updatedInfo)
    return dispatch(updateClient(data))
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
    case UPDATE_CLIENT:
      return [...action.clients]
    case ADD_CLIENT:
      return [...state, action.client]
    case REMOVE_CLIENT:
      return [...action.clients]
    default:
      return state
  }
}
