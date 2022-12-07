import api from './api'
export const toggleCheck = (check) => ({ type: 'TOGGLE_CHECK', payload: check })
export const toggleSort = (sort) => ({ type: 'TOGGLE_SORT', payload: sort })
export const toggleFetching = () => ({ type: 'TOGGLE_FETCH' })
export const getTickets = async () => {
  const tickets = await api.getTickets()
  return tickets
}
