import * as actionTypes from '../actions/actionTypes'

initialState = {
  orders: [],
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      }
      return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder)
      }
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      }
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      }
    default: return state
  }