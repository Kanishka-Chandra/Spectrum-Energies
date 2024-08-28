import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-10 flex justify-center md:top-5">
          <img
            src="/logo.svg"
            alt="Spectrum Energies Logo"
            className="object-cover"
            width={300}
            height={300}
          />
        </div>
        <video
          src="/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-20 flex h-full items-center justify-center">
        <h1
          data-aos="fade-up"
          className="cursor-default select-none text-balance p-4 text-center text-5xl font-medium text-white md:text-7xl md:font-semibold"
        >
          Unlock the Strength of Collaboration
        </h1>
      </div>
    </section>
  );
};

export default Hero;
