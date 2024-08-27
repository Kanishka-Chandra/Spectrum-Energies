import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="grid w-full grid-cols-1 max-md:scroll-mt-16"
    >
      <div className="relative h-96 w-full">
        <div className="absolute inset-x-0 top-6 flex justify-center">
          <img
            src="/logo.svg"
            alt="Spectrum Energies Logo"
            className="object-cover"
            width={250}
            height={250}
          />
        </div>
        <img
          className="h-full w-full object-cover"
          src="/footer.webp"
          alt="Solar and wind solutions"
        />
      </div>
      <div className="grid grid-cols-1 place-items-center gap-8 bg-gradient-to-r from-sky-600 to-green-500 p-8 text-white md:grid-cols-2 md:flex-row md:p-16">
        <h2
          data-aos="fade-right"
          className="w-full cursor-default select-none self-center text-5xl font-bold md:text-7xl"
        >
          For Business enquiries
        </h2>
        <div
          data-aos="fade-left"
          className="grid h-full w-full cursor-default grid-cols-1 place-content-center gap-4 text-base font-medium md:grid-cols-2 md:text-lg"
        >
          <p className="self-center">Mumbai, India</p>
          <div className="flex flex-col justify-center no-underline">
            <a href="mailto:business@spectrum.com" className="mt-2 md:mt-3">
              business@spectrum.com
            </a>
            <a href="www.spectrum.com">www.spectrum.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
