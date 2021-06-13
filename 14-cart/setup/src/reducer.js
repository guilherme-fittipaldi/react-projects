const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "DECREASE" || action.type === "INCREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          if(action.type==="DECREASE"){
            return { ...cartItem, amount: cartItem.amount - 1 }
          }
          else if (action.type ==="INCREASE") return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if(action.type === "GET_TOTALS"){
    let {total, amount} = state.cart.reduce((cartTotal, cartItem)=>{
       const {price, amount} = cartItem
       cartTotal.amount += amount 
       const itemTotal = amount * price;
       cartTotal.total += itemTotal;
       return cartTotal
    },{
      total:0, amount:0
    })
    total = parseFloat(total.toFixed(2))
    return {...state, total, amount}
  }
  if(action.type === 'LOADING'){
    return {...state, loading: true}
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart:action.payload, loading: false};
  }
  throw new Error('no matching action')
};

export default reducer;
