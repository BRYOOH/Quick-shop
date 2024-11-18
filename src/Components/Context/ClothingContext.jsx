import { createContext, useState } from "react";
import { allProducts } from "../data/allProducts";

export const ClothingContext = createContext(null);

let getCartDefault = () =>{

    let cart = {};

    for(let index= 0; index < 300+1; index++){
        cart[index] = 0;
    }

    return cart;
}

const ClothingContextProvider = (props) => {

    const [cartItems,setCartItem] = useState(getCartDefault());

    const addToCart = (productId) =>{
        setCartItem((prev)=>({...prev,[productId]:prev[productId]+1}))    
    }

    const removeFromCart = (productId) =>{
        setCartItem((prev)=>({...prev,[productId]:prev[productId]-1}))
    }

    const sumCartItems = () =>{
       
        let totalPrice = 0;

       for(const item in cartItems){
        if(cartItems[item]>0){
            let itemsInfo = allProducts.find((e)=>e.id===item);
            totalPrice = (itemsInfo.newPrice * cartItems[item]) + totalPrice;
        }
        console.log(totalPrice);
       }
       return totalPrice;

       
    }

    const contextValue = {cartItems,removeFromCart,addToCart,sumCartItems};

    return(
        <ClothingContext.Provider value={contextValue}>
            {props.children}
        </ClothingContext.Provider>
    )
}

export default ClothingContextProvider;