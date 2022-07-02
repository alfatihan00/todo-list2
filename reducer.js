import React from 'react'

const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'REMOVE':
            return {
                ...state,
                cart:state.cart.filter((cartItem)=>cartItem.id !== payload)
            }    
        
        case 'CLEAR_ALL':
            return {
                ...state,
                cart:[]
            }

        case 'INCREASE':
            let TempCart = []
            TempCart = state.cart.map((cartItem)=> {
                if (cartItem.id === payload){
                    return {
                        ...cartItem,
                        amount:cartItem.amount+1
                    }
                }
                return cartItem
            })
            return {...state, cart:TempCart}


        case 'DECREASE':
            let TempCart2 = []

            
            TempCart2 = state.cart.map((cartItem)=> {
                if (cartItem.id === payload){
                    return {
                        ...cartItem,
                        amount:cartItem.amount-1
                    }
                }
                return cartItem
            }).filter((cartItem2) => cartItem2.amount !== 0)

            return {...state, cart:TempCart2}

        
        case 'GET_TOTALS':
            let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
          
                cartTotal.total+= cartItem.price*cartItem.amount
                cartTotal.amount += cartItem.amount
                console.log(cartTotal.total)
                return cartTotal
            },{
                total:0,
                amount:0
            })

            total = parseFloat(total.toFixed(2))
            return {...state, amount, total}

    
        default:
            break;
    }
    
}

export default reducer