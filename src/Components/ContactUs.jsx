import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="grid w-full grid-cols-1 max-md:scroll-mt-16"
    >
      <div className="relative h-96 w-full">
        <div className="absolute inset-x-0 top-6 flex justify-center">
          <img src="/logo.png" alt="" className="object-cover" />
        </div>
        <img
          className="h-full w-full object-fill"
          src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 place-items-center gap-8 bg-green-500 p-8 text-white md:grid-cols-2 md:flex-row md:p-16">
        <h2 className="w-full cursor-default select-none self-center text-5xl font-bold md:text-7xl">
          Book a consultation
        </h2>
        <div className="grid w-full cursor-default grid-cols-1 place-content-center gap-4 text-base font-medium md:grid-cols-2 md:text-lg">
          <p className="">
            123 Anywhere St.
            <br />
            Any City, ST 12345
            <br />
            Country
          </p>
          <div className="flex flex-col justify-center no-underline">
            <a href="tel:+1234567890">Telephone: (123) 456-7890</a>
            <a href="tel:+1234567890">Mobile: (123) 456-7890</a>
            <a href="mailto:hello@reallygreatsite.com" className="mt-2 md:mt-3">
              hello@reallygreatsite.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
