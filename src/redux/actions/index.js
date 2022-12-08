import aviasalesApi from '../../services'

const api = new aviasalesApi()

export const toggleCheck = (check) => ({ type: 'TOGGLE_CHECK', payload: check })
export const toggleSort = (sort) => ({ type: 'TOGGLE_SORT', payload: sort })
export const toggleFetching = (status) => ({ type: 'TOGGLE_FETCH', payload: status })
export const pushTickets = (tickets) => ({ type: 'PUSH_TICKETS', payload: tickets })
export const handleFetchError = (err) => ({ type: 'FETCH_ERROR', payload: err })
export const increaseTotalTicketsOnPage = () => ({ type: 'INCREASE_TICKETS' })

const sortTickets = (ticketsArray) => {
  const cheapest = [...ticketsArray].sort((a, b) => a.price - b.price)
  const fastest = [...ticketsArray].sort((a, b) => {
    const firstTicket = a.segments[0].duration + a.segments[1].duration
    const secondTicket = b.segments[0].duration + b.segments[1].duration
    return firstTicket - secondTicket
  })
  return { cheapest, fastest }
}
const flattenArray = (array) => {
  const result = []
  const flat = (array) => {
    array.forEach((item) => {
      if (Array.isArray(item)) return flat(item)
      result.push(item)
    })
  }
  flat(array)
  return result
}

export const getTickets = (bunchOrAll) => (dispatch) => {
  let getTickets = null
  bunchOrAll === 'All' ? (getTickets = api.getAllTickets) : (getTickets = api.getFirstBunchOfTickets)

  dispatch(toggleFetching('Start'))

  api.getSearchId().then((response) => {
    const { searchId } = response

    getTickets(searchId).then((tickets) => {
      const result = sortTickets(flattenArray(tickets))

      dispatch(pushTickets(result))
      bunchOrAll === 'All' ? dispatch(toggleFetching('End')) : null
    })
  })
}
