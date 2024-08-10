import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-28 flex justify-center md:top-10">
          <img src="/logo.png" alt="" className="object-cover" />
        </div>
        <video
          src="https://assets.mixkit.co/videos/46502/46502-720.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-20 flex h-full items-center justify-center">
        <h1 className="max-w-2xl cursor-default select-none p-4 text-center text-5xl font-medium text-white md:text-6xl md:font-semibold">
          Empowering with future energy today
        </h1>
      </div>
    </section>
  );
};

export default Hero;
