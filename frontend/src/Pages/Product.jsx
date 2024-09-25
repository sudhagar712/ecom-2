import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/Context";
import Rating from "../Components/Rating";
import { Link } from "react-router-dom";
import RelatedProducts from "../Components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState();

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2  pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[23%] sm:w-[500px] sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[500px]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product info */}

        <div className="flex-1">
          <h1 className="font-extrabold sm:text-3xl text-2xl  mt-2">
            {productData.name}
          </h1>
          <div className="mt-5">
            <Rating value={productData.rating} />
          </div>
          <p className="mt-5 text-3xl font-bold">
            Cost:&nbsp;
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="font-medium text-xl">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={` border-2 bg-gray-200 text-black font-light p-3 px-5  ${
                    item === size ? "border-cyan-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="font-bold">Size:{size}</p>
          </div>
        
            <button
              onClick={() => addToCart(productData._id,size)}

              className="bg-black text-white px-8 py-3 text-sm  active:bg-gray-700"
            >
              ADD TO CART
            </button>
      

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Orginal Products.</p>
            <p>Cash on delivery is available on the product.</p>
            <p>Easy return and exchange policy within 7days.</p>
          </div>
        </div>
      </div>
      {/* Description & Review section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            A ecommerce Website Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia unde deserunt, fuga earum nobis rerum
            corporis perspiciatis voluptas voluptates. Nostrum, non ex dicta
            distinctio expedita quaerat commodi. A, libero ut.
          </p>
          <p>
            A ecommerce typically Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dicta magni voluptate nisi saepe ex quisquam
            corporis corrupti dolore tenetur, delectus, quibusdam aliquid
            praesentium odit iure vero modi dolorem consequatur? Quis?
          </p>
        </div>
      </div>
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
