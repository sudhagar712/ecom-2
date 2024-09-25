import React from 'react'
import Title from '../Components/Title';
import { assets } from '../assets/Images/assets';

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500 text-center">No:23 5th cross Kavikuil nagar Chinneanpet newSaram, Puducherry-605013</p>
          <p className="text-gray-500">Phone: +91-9943863916 <br />Email: sudhagarmsr712@gmail.com</p>
          <p className="text-gray-500 font-semibold text-xl">Careers at forever</p>
          <p className='text-gray-500'>learn More about our teams and Job Openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
      </div>
    </div>
  );
}

export default Contact
