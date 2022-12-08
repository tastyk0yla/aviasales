const initialState = {
  checkboxes: {
    All: true,
    WithoutTransfer: true,
    OneTransfer: true,
    TwoTransfer: true,
    ThreeTransfer: true,
  },
  sortedBy: 'cheapest',
  tickets: [],
  error: null,
  isError: false,
  isFetching: false,
  totalTicketsOnPage: 5,
}
const reducer = (state = initialState, action) => {
  const { type, payload } = action
  let { checkboxes } = state
  switch (type) {
    case 'TOGGLE_CHECK':
      if (payload === 'All') {
        return state.checkboxes.All
          ? {
              ...state,
              checkboxes: {
                All: false,
                WithoutTransfer: false,
                OneTransfer: false,
                TwoTransfer: false,
                ThreeTransfer: false,
              },
            }
          : {
              ...state,
              checkboxes: {
                All: true,
                WithoutTransfer: true,
                OneTransfer: true,
                TwoTransfer: true,
                ThreeTransfer: true,
              },
            }
      }
      if (checkboxes.All && checkboxes[payload]) {
        return { ...state, checkboxes: { ...checkboxes, All: false, [payload]: !checkboxes[payload] } }
      }
      if (!checkboxes[payload]) {
        if (
          Object.entries(checkboxes).reduce((acc, item) => {
            if (item[0] !== 'All' && item[0] !== payload) {
              if (item[1]) return ++acc
            }
            return acc
          }, 0) === 3
        )
          return {
            ...state,
            checkboxes: {
              All: true,
              WithoutTransfer: true,
              OneTransfer: true,
              TwoTransfer: true,
              ThreeTransfer: true,
            },
          }
      }
      return { ...state, checkboxes: { ...checkboxes, [payload]: !checkboxes[payload] } }
    case 'TOGGLE_SORT':
      return { ...state, sortedBy: payload }
    case 'TOGGLE_FETCH':
      return payload === 'Start' ? { ...state, isFetching: true } : { ...state, isFetching: false, isError: false }
    case 'PUSH_TICKETS':
      return { ...state, tickets: payload }
    case 'FETCH_ERROR':
      return { ...state, isError: true, error: payload }
    case 'INCREASE_TICKETS':
      return { ...state, totalTicketsOnPage: state.totalTicketsOnPage + 5 }
    default:
      return state
  }
}

export default reducer
