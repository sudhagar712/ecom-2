import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/Context";
import { assets } from "../assets/Images/assets";
import Title from "../Components/Title";
import Productitem from "../Components/Productitem";


const Collections = () => {
  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [sortType, setSortType] = useState("relavent");

  // Category..........
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    console.log(category);
  }, [category]);

  // Sub Category..........
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    console.log(subCategory);
  }, [subCategory]);

  const applyFilter = () => {
    let productsCopy = products.slice();

   
    if(showSearch && search ) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }





    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProduct(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, showSearch , search]);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  // sorted Function ..............

  const sortProduct = () => {
    let fpCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex  flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Option */}
      <div className="min-w-60 ">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTER
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        <div
          className={`border-2 border-cyan-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">CATEGORIES</p>

          <div className="flex flex-col gap-2  text-sm font-light text-gray-700">
            <label className="flex gap-3">
              <input
                type="checkbox"
                className="accent-cyan-300 w-6 h-6 "
                onChange={toggleCategory}
                value={"Men"}
              />
              <p>Men</p>
            </label>
            <label className="flex gap-3">
              <input
                type="checkbox"
                className="accent-cyan-300 w-6 h-6"
                onChange={toggleCategory}
                value={"Women"}
              />
              <p>Women</p>
            </label>
            <label className="flex gap-3">
              <input
                type="checkbox"
                className="accent-cyan-300 w-6 h-6 "
                onChange={toggleCategory}
                value={"Kids"}
              />
              <p>Kids</p>
            </label>
          </div>
        </div>

        <div
          className={`border-2 border-cyan-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">TYPE</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-3">
              <input
                type="checkbox"
                className="accent-cyan-300 w-6 h-6 "
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              <p>Topwear</p>
            </label>
            <label className="flex gap-3">
              <input
                type="checkbox"
                className="accent-cyan-300 w-6 h-6"
                value={"BottomWear"}
                onChange={toggleSubCategory}
              />
              <p>BottomWear</p>
            </label>
            <label className="flex gap-3">
              <input
                type="checkbox"
                className="accent-cyan-300 w-6 h-6 "
                value={"WinterWear"}
                onChange={toggleSubCategory}
              />
              <p>WinterWear</p>
            </label>
          </div>
        </div>
      </div>

      {/* Right side  */}

      <div className="flex-1 mt-5  ">
        <div className="flex  justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort  */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="text-sm border border-cyan-400 outline-none p-3 "
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: LOW-HIGH</option>
            <option value="high-low">Sort by:HIGH-LOW</option>
          </select>
        </div>
        {/* Map products */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6">
          {filterProduct.map((item, index) => (
            <Productitem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Collections;
