import React from "react";

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="flex w-full items-center justify-center bg-gray-200 py-16 max-md:scroll-mt-16"
    >
      <div className="grid w-full cursor-default grid-cols-1 gap-y-14 p-10 md:grid-cols-2">
        <div
          data-aos="fade-right"
          className="flex max-w-lg flex-col gap-14 self-start text-pretty text-black"
        >
          <h2 className="text-4xl font-bold md:text-5xl">Why choose us</h2>
          <h3 className="text-2xl font-semibold md:text-3xl">
            With more than 10 decades of cumulative team experience, we
            guarantee trust and quality.
          </h3>
          <p className="text-lg">
            Spectrum is at the forefront as facilitator of renewable energy,
            specializing in whole spectrum of solar and wind energy. We
            facilitate customized, top-notch economically viable solutions,
            emphasizing sustainability to lower carbon footprints, prioritizing
            innovation for efficient and cutting-edge energy options, ensuring
            timely execution, continuous customer support and maintenance
            post-installation.
          </p>
        </div>
        <div data-aos="fade-left" className="flex w-full items-center">
          <img
            className="w-full object-cover md:h-[450px]"
            src="/why_us.webp"
            alt="People envisioning a new future"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
