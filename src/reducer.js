const initialState = {
  checkboxes: {
    All: false,
    WithoutTransfer: false,
    OneTransfer: false,
    TwoTransfer: false,
    ThreeTransfer: false,
  },
  sortedBy: 'cheapest',
}
const reducer = (state = initialState, action) => {
  let { checkboxes, sortedBy } = state
  switch (action.type) {
    case 'TOGGLE CHECK':
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
        return { checkboxes: { ...checkboxes, All: false, [action.payload]: !checkboxes[action.payload] }, sortedBy }
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
      return { checkboxes: { ...checkboxes, [action.payload]: !checkboxes[action.payload] }, sortedBy }
    case 'TOGGLE SORT':
      return { checkboxes, sortedBy: action.payload }
    default:
      return state
  }
}

export default reducer
