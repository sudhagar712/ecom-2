import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-[40px] text-sm border-2 p-7">
        <div>
          <Link to="/">
            <h1 className="text-3xl font-bold">MSR_FASHION</h1>
          </Link>
          <p className="w-full md:w-2/3 text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            inventore saepe excepturi quo similique explicabo! Cum libero
            deleniti excepturi qui dicta voluptatem. 
          
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul>
            <li>Home</li>
            <li>All Collection</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul>
            <li>+91-9943863916</li>
            <li>sudhagarmsr712@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <hr />
        <p className=" py-5 text-sm">
          CopyRights 2024@ sudhagarmsr712@gmail.com - All Right Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
