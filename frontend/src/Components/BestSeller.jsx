import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Context'
import Title from './Title';
import Productitem from "./Productitem";

const BestSeller = () => {

const {products} = useContext(ShopContext)

const[bestSeller , setBestSeller] = useState([]);


useEffect(()=>{
      const bestProduct = products.filter((item) => item.bestseller);
      setBestSeller(bestProduct.slice(0,5))
},[products])



  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
       
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {bestSeller.map((item) => (
          <Productitem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller
