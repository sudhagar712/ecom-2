import React from "react";
import {assets} from "../assets/Images/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-2">
      {/* Policy Item */}
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5"
          alt="Exchange Policy Icon"
        />
        <p className="text-sm font-medium">Easy Exchange Policy</p>
        <p className="text-gray-400">we Offer hassle free exchange policy</p>
      </div>

      <div>
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-5"
          alt="Exchange Policy Icon"
        />
        <p className="text-sm font-medium">7 Days Return Policy</p>
        <p className="text-gray-400">we provide 7days free return policy</p>
      </div>

      <div>
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-5"
          alt="Exchange Policy Icon"
        />
        <p className="text-sm font-medium">Best customer Support</p>
        <p className="text-gray-400">we Provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
