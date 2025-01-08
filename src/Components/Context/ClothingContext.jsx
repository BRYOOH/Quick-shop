import { createContext, useState } from "react";
import { allProducts } from "../data/allProducts";
import { AddToCart } from "../../API";

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
    
    const addToCart =async() =>{
        try {
            const token = localStorage.getItem("auth-token");
            if (!token) {
                throw new Error('User is not authenticated');
            }
            const response = await AddToCart(token);
            if(response && response.data){
                    alert("Item has been added");
                    console.log(response);
                }
                return response; 
            }
         catch (error) {
            alert(error.response.data.message);
        }
        
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
       }
       const finalPrice = parseFloat(totalPrice.toFixed(2));
       return finalPrice;

       
    }

    const cartIncre = () =>{
        let cartNo= 0;

        for(const item in cartItems){
            if(cartItems[item]>0){
                cartNo= cartItems[[item]] + cartNo
            }
        }
        return cartNo;
    }

    const contextValue = {cartItems,cartIncre,removeFromCart,addToCart,sumCartItems};

    return(
        <ClothingContext.Provider value={contextValue}>
            {props.children}
        </ClothingContext.Provider>
    )
}

export default ClothingContextProvider;