import React from "react";

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="flex w-full items-center justify-center bg-green-500 py-16 max-md:scroll-mt-16"
    >
      <div className="grid w-full cursor-default grid-cols-1 gap-y-14 p-10 md:grid-cols-2">
        <div className="flex max-w-lg flex-col gap-14 self-start text-pretty text-white">
          <h2 className="text-5xl font-bold">Why choose us</h2>
          <h3 className="text-3xl font-semibold">
            With 40 years of experience, we guarantee trust and quality.
          </h3>
          <p className="text-lg">
            Spectrum is a renewable energy leader with expertise in solar and
            wind installations. We offer tailored, high-quality solutions, focus
            on sustainability to reduce carbon footprints, prioritize innovation
            for advanced and cost-effective energy solutions, and provide
            ongoing customer support and maintenance beyond installation.
          </p>
        </div>
        <div className="flex w-full items-center">
          <img
            className="h-[450px] w-full object-cover"
            src="https://images.unsplash.com/photo-1608806667067-66ebd8b169e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjB3b3JrZXJzfGVufDB8fDB8fHww"
            alt="Image showing working with solar panels"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
