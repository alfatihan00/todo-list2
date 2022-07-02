import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  cart:cartItems,
  loading:false,
  amount:0,
  total:0
}

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)


  const remove = (id) => dispatch({type:'REMOVE', payload:id})

  const clearAll = () => dispatch({type:'CLEAR_ALL'})

  const Increase = (id) => dispatch({type:'INCREASE', payload:id})

  const Decrease = (id) => dispatch({type:'DECREASE', payload:id})

  useEffect(() => {
    dispatch({type:'GET_TOTALS'})
    }, [state.cart])
  
  return (
      <AppContext.Provider
      value={{
          ...state,
          remove,
          clearAll,
          Increase,
          Decrease
        }}
        >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }