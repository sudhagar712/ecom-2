import React from "react";

const Newsletter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center mt-10">
      <p className="text-2xl font-medium text-gray-800">
        Subscrible Now & get 20% off
      </p>
      <p className="text-gray-400  mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
        repudiandae mollitia alias id repellat quod aperiam officiis sed,
        voluptas nihil vel nostrum autem aspernatur. Nulla error sunt dolores
        accusantium repellat.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input className="w-full sm:flex-1  outline-none" type="email" placeholder="Enter your EmailAddress" />
        <button
          type="submit "
          className="bg-black text-white text-xs px-10 py-4 font-bold shadow-2xl "
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
