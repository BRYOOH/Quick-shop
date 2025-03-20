import React, { createContext, useEffect, useState } from "react";
import { AddToCart, AllProducts, GetCart, NewCollection, PopularInWomen, RemoveFromCart } from "../../API";
import { toast } from "react-toastify";

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
const [getProducts, setGetProducts] = useState([]);
const[newCollections, setNewCollections]= useState([]);
const [getPopular, setGetPopular] = useState([]);

    const allProducts = async(data)=>{
        const response = await AllProducts(data);
        if(response && response.data){
        console.log("All products fetched successifully");
        setGetProducts(response.data);
        return response.data;
        }else{
        toast.error("An error occured while accessing the products")
        }
    }
    
    const popularCollections=async(data)=>{
        const response = await PopularInWomen(data);
        if(response && response.data){
        toast.success("Popular in women fetched");
        setGetPopular(response.data);
        return response.data;
        }else{
        toast.error("No data was found");
        }
    }

    const GetNewCollections= async(data)=>{
        const response = await NewCollection(data);
        if(response && response.data){
        toast.success("New collections fetched");
        setNewCollections(response.data);
        }
    }

    const fetchCart = async()=>{
        try {
            const token = localStorage.getItem("auth-token");
            if(!token){
                toast.warn('User is not authenticated');
                return null;
            }
            const response = await GetCart(token);
            console.log("GetCartData",response);
            if(response){
                console.log("CartData was fetched successifully");
                setCartItem(response);
                return response;
            }
        } catch (error) {
            toast.error("There was an error loading the cart" + error);
        }
    };

    useEffect(()=>{
         popularCollections();
         GetNewCollections();
         allProducts();
         fetchCart() ;
    },[]);
    
    const addToCart =async(itemId) =>{

        try {
            const token = localStorage.getItem("auth-token");
            if (!token) {
                toast.warn('User is not authenticated');
                return null;
            }
            const response = await AddToCart(token,itemId);
            if(response){
                    toast.success("Item has been added");
                    console.log("Response",response);
                    fetchCart();
                }
                return response; 
                
            }
         catch (error) {
            alert(error);
        }
    }

    const removeFromCart = async(itemId) =>{
       try {
        const token = localStorage.getItem('auth-token');
        if(!token){
            toast.error("User is not authenticated ");
            return null;
        }

        const response = await RemoveFromCart(token,itemId);
        if(response ){
            toast.success("Item was removed from cart");
            console.log('Response message', response);
            fetchCart();
        }
        return response;
       } catch (error) {
            alert(error);
       }
    }

    const sumCartItems = () =>{
       
        let totalPrice = 0;

       for(const item in cartItems){
        if(cartItems[item]>0){
            let itemsInfo = getProducts.find((e)=>e.id===Number(item));
            console.log("CartItemInfo", itemsInfo);
            totalPrice = (itemsInfo.new_price * cartItems[item]) + totalPrice;
        }
       }
       const finalPrice = parseFloat(totalPrice.toFixed(2));
       return finalPrice;

       
    }

    const cartIncre = () =>{
        let cartNo= 0;

        for(const item in cartItems){
            if(cartItems[item]>0){
                cartNo= cartItems[item] + cartNo
            }
        }
        return cartNo;
    }

    const contextValue = {cartItems,cartIncre,removeFromCart,addToCart,sumCartItems,allProducts,GetNewCollections,popularCollections,getPopular,newCollections,getProducts};

    return(
        <ClothingContext.Provider value={contextValue}>
            {props.children}
        </ClothingContext.Provider>
        
    )
}

export default ClothingContextProvider;