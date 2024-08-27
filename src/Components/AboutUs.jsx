import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex w-full items-center justify-center bg-gradient-to-r from-sky-600 to-green-500 py-16 max-md:scroll-mt-16"
    >
      <div className="grid h-full w-full grid-cols-1 place-items-center gap-y-10 md:grid-cols-2">
        <div className="p-4">
          <h2
            data-aos="fade-up"
            className="max-w-md cursor-default text-pretty text-4xl font-bold text-black md:text-5xl"
          >
            Harnessing the Power of <span className="text-white">Nature</span>
          </h2>
          <div
            data-aos="fade-right"
            className="mt-8 h-auto w-full md:w-[450px]"
          >
            <img
              className="h-full w-full object-contain"
              src="/about_us.webp"
              alt="Image showing solar panel"
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="max-w-md cursor-default text-pretty p-4 text-white"
        >
          <h3 className="text-2xl font-semibold md:text-3xl">
            Committed to offering innovative, economically viable and effective
            energy solutions.
          </h3>
          <p className="mt-8">
            Spectrum encourages collaboration among stakeholders for innovation,
            community building, and shared goals. Diverse perspectives enhance
            problem-solving, identify opportunities, and support adaptability
            for sustainable success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
