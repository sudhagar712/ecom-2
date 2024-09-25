import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/Images/assets";
import Newsletter from "../Components/Newsletter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.hero_img4}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-300">
          <p>
            MSR_FASHION was bornOut of a passion for innovation and a desire to
            revolution, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia asperiores velit eligendi. Eum molestiae blanditiis enim dolore. Quisquam consectetur quidem et vel eius, quaerat doloribus modi omnis quasi nisi doloremque?
            Animi autem inventore nulla ipsa? Excepturi, eius assumenda temporibus quaerat quibusdam veniam quia cupiditate dignissimos inventore reiciendis dicta nisi iure molestias eligendi autem eos vero ipsa, impedit cumque expedita dolores.
            Error itaque obcaecati, inventore cum similique iure! Libero maxime reiciendis at placeat quo architecto dolore rerum, quaerat sint! Pariatur id tempore sequi, quasi nesciunt nihil. Atque odit consequuntur inventore. Dicta!
          </p>
          <p>
            Since Our inception, we've worked tirelessly to curate a diverse
            Selection
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our Mission at MSR_FASHION is to empower customer with choice,
            convenience, and Confidence. We're decided to provided to seasmsely
            Shopping experience that exceeds expection from browser and ordering
            to delivering and beyond.
          </p>
        </div>
      </div>

      <div className="text-2xl  pt-8 border-t">
        <Title text1={"WHYCHOOSE"} text2={"US"} />
      </div>

      <div className="flex group flex-col md:flex-row text-sm mb-20 gap-2 cursor-pointer">
        <div className="border group-hover:bg-cyan-200 group-hover:text-white  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            excepturi quam obcaecati, debitis atque aliquid itaque fugiat dolor,
            odit quo ipsa praesentium quidem. At commodi aliquam ut atque
            voluptatum sunt!
          </p>
        </div>

        <div className="border group-hover:bg-cyan-400 group-hover:text-white  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenince:</b>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            excepturi quam obcaecati, debitis atque aliquid itaque fugiat dolor,
            odit quo ipsa praesentium quidem. At commodi aliquam ut atque
            voluptatum sunt!
          </p>
        </div>

        <div className="border group-hover:bg-cyan-200 group-hover:text-white  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            excepturi quam obcaecati, debitis atque aliquid itaque fugiat dolor,
            odit quo ipsa praesentium quidem. At commodi aliquam ut atque
            voluptatum sunt!
          </p>
        </div>
      </div>


      <Newsletter/>
    </div>
  );
};

export default About;
