import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:4000",
});

export const UserLogin = async(data)=> API.post('/login',data);
export const UserSignUp = async(data)=>API.post('/signup',data);
export const AddToCart = async(token)=>{
    API.post('/addtocart',{headers:{Authorization:token}})
};
export const RemoveFromCart = async(token)=>{
    API.post('/removefromcart',{headers:{Authorization:token}})
};
export const GetCart= async(token)=>{
    API.get('/getCart',{headers:{Authorization:token}})
};

export const AddProduct = async(data)=>{API.post('/addproduct',data)};
export const RemoveProduct = async(id)=>{
    API.delete(`/removecart/:${id}`)
}
export const allProduct = async(data)=>{API.get('/allProducts',data)};
export const newCollections = async(data)=>{API.get('/newcollections',data)};
export const popularInWomen = async(data)=>{API.get('/popularinwomen',data)};