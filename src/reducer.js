const initialState = {
  checkboxes: {
    All: false,
    WithoutTransfer: false,
    OneTransfer: false,
    TwoTransfer: false,
    ThreeTransfer: false,
  },
  sortedBy: 'cheapest',
  tickets: [],
  isFetching: false,
}
const reducer = (state = initialState, action) => {
  let { checkboxes } = state
  switch (action.type) {
    case 'TOGGLE_CHECK':
      if (action.payload === 'All') {
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
      if (checkboxes.All && checkboxes[action.payload]) {
        return { ...state, checkboxes: { ...checkboxes, All: false, [action.payload]: !checkboxes[action.payload] } }
      }
      if (!checkboxes[action.payload]) {
        if (
          Object.entries(checkboxes).reduce((acc, item) => {
            if (item[0] !== 'All' && item[0] !== action.payload) {
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
      return { ...state, checkboxes: { ...checkboxes, [action.payload]: !checkboxes[action.payload] } }
    case 'TOGGLE_SORT':
      return { ...state, sortedBy: action.payload }
    case 'TOGGLE_FETCH':
      return { ...state, isFetching: !state.isFetching }
    default:
      return state
  }
}

export default reducer
