import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/Context";
import Title from "./Title";
import Productitem from "./Productitem";


const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text1={"LATEST"} text2={"Collection"} />
       
      </div>

      {/* render products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {latestProducts.map((item) => (
          <Productitem
            key={item._id} 
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
