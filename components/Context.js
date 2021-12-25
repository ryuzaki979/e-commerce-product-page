import React, {useState,useContext,useMemo} from "react";

const Context = React.createContext()

// const ContextProvider = ({children}) => {
    
// const {CartState,setCartState} = useState(null)
// const value = useMemo(()=> ({CartState,setCartState}),[CartState,setCartState])
// function updateCartData (total,price) {
//     console.log(total,price)
//     data.cartItem = total
//     data.itemPrice = price
//    console.log(CartState)
// }
//     return <Context.Provider value = {value}>
//         {children}
//     </Context.Provider>
// }

// export const useGlobalContext = () =>{
//     return useContext(Context)
// }

export {Context}