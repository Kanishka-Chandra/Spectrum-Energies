import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center justify-center py-16 max-md:scroll-mt-16"
    >
      <div className="grid h-full w-full grid-cols-1 place-items-center gap-y-10 md:grid-cols-2">
        <div className="p-4">
          <h2
            data-aos="fade-up"
            className="max-w-md cursor-default text-pretty text-5xl font-bold"
          >
            Harnessing the Power of{" "}
            <span className="text-green-500">Nature</span>
          </h2>
          <div
            data-aos="fade-right"
            className="mt-8 h-auto w-full md:w-[450px]"
          >
            <img
              className="h-full w-full object-contain"
              src="https://plus.unsplash.com/premium_photo-1679917152317-170f1613fbfe?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image showing solar panel and a wind mills"
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="max-w-lg cursor-default text-pretty p-4"
        >
          <h3 className="text-4xl font-semibold">
            Committed to offering innovative and effective energy solutions.
          </h3>
          <p className="mt-8">
            Spectrum specializes in solar and wind installations, offering
            innovative energy solutions for homes, businesses, and communities
            to promote sustainability and energy independence. Our expert team
            combines technology and expertise to reduce carbon footprints.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
