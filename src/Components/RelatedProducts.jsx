import React from 'react'
import Item from './Item';
import { allProducts } from './data/allProducts';


const RelatedProducts = (props) => {

  const {product} = props;
  console.log(product);
  
  

  return (
    <div className='h-fit flex-wrap flex md:block'>
      <div className='flex flex-col flex-wrap items-center'>
       <h2 className='text-[40px] font-bold uppercase'>Related products</h2>
      <hr className='w-[150px] h-[5px] text-bold'/>
      </div>
     
      <div className='xl:grid xl:grid-cols-4 flex justify-center flex-wrap'>
        {allProducts.map((item,i)=>{
           if(product.category === item.category){
            return <Item key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            category={item.category}
            />
           }
          
        })}
      </div>
    </div>
  )
}

export default RelatedProducts