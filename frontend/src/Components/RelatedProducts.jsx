import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from '../Context/Context'
import Title from "./Title";
import Productitem from "./Productitem";

const RelatedProducts = ({category,subCategory}) => {
    const { products } = useContext(ShopContext);
    const [related,setRelated]= useState([]);


    useEffect(()=>{

        if(products.length > 0) {
            let productCopy = products.slice();

            productCopy = productCopy.filter((item)=> category === item.category );
            productCopy = productCopy.filter((item) => subCategory === item.subCategory );

             setRelated(productCopy.slice(0, 5));
        }

       

    },[products])


  return (
    <div className="my-10">

        <div className="text-center text-3xl py-2 ">
        <Title text1={"Related"} text2={"Products"}/>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-4">
            {
            related.map((item, index) => (
                <Productitem  key={index} id={item._id} name={item.name} price={item.price} image={item.image} rating={item.rating} />

                
            ))
            }
        </div>
      
    </div>
  )
}

export default RelatedProducts
