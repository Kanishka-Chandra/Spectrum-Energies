import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="flex w-full flex-col items-center justify-center gap-10 bg-gradient-to-r from-sky-600 to-green-500 px-1 py-20 text-white max-md:scroll-mt-16 md:gap-20"
    >
      <h2
        data-aos="fade-up"
        className="cursor-default px-14 text-left text-3xl font-bold md:px-16 md:text-center md:text-5xl"
      >
        We Offer End-to-End Solution
      </h2>
      <div
        data-aos="fade-down"
        className="w-full px-4 pb-4 max-md:bg-black/10 md:px-16"
      >
        <img
          className="h-full w-full object-cover"
          src="/services.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Services;
