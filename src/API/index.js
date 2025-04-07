import axios from "axios";

const API = axios.create({
    baseURL:"https://quickshop-backend-2vgd.onrender.com",
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});


export const UserLogin = async(data)=> await API.post('/login',data);

export const UserSignUp = async(data)=>await API.post('/signup',data);

export const AddToCart = async(token,itemId)=>{
    if (!token) {
        console.error("Authorization token missing");
        return { errors: "Authorization token is required" };
    }

    try {
       const response = await API.post('/addtocart',{itemId:itemId},{
            headers:{ 
            Accept: 'application/json',
            Authorization:token, 
           'Content-Type' : 'application/json',
        }});
        return response.data;
    } catch (error) {
        console.error("There was an error adding to the cart" + error);
        return null;
    } 
};

export const RemoveFromCart = async(token,itemId)=>{
    if (!token) {
        console.error("Authorization token missing");
        return { errors: "Authorization token is required" };
    }
    try {
        const response = await API.post('/removefromcart',{itemId:itemId},{
            headers:{
               Accept:'application/json',
               Authorization:token,
               'Content-Type' :'application/json',
           }});
           return response.data;
    } catch (error) {
        console.error("Cannot reomove the product from cart " + error);
        return null;
    }
   
};

export const GetCart= async(token)=>{
    const response = await API.get('/getCart',{
        headers:{
            Accept: 'application/json',
            Authorization:token,
            'Content-Type': 'application/json',
        }
    });
    return response.data;
};

export const AllProducts = async(data)=>{
   const response = await API.get('/allProducts',data);
   return response;
};
export const NewCollection = async(data)=>{
    const response = await API.get('/newcollection',data);
    return response;
};
export const PopularInWomen = async(data)=>{
    const response = await API.get('/popularinwomen',data);
    return response;
};
export const StkPush = async(data)=>{
    const response = await API.post('/stkpush',data);
    return response;
}
