import React from "react";

const Testimonals = [
  {
    message:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    name: "Hannah, 47",
  },
  {
    message:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    name: "Trey, 22",
  },
  {
    message:
      "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    name: "Morgan, 33",
  },
];

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-sky-600 to-green-500 p-16 text-white max-md:scroll-mt-16"
    >
      <h2
        data-aos="fade-down"
        className="cursor-default text-left text-4xl font-bold md:text-center md:text-5xl"
      >
        What we've done for our clients
      </h2>

      <div className="mt-14 grid w-full grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {Testimonals.map((Testimonal, index) => (
          <TestimonalCards
            key={index}
            message={Testimonal.message}
            name={Testimonal.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;

const TestimonalCards = ({ message, name }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="size-24 text-white">
        <QuoteMark />
      </div>
      <p className="text-pretty text-base">{message}</p>
      <h3 className="text-xl font-semibold">{name}</h3>
    </div>
  );
};

const QuoteMark = () => {
  return (
    <svg
      className="h-full w-full rotate-180 scale-125"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth=".4"
      stroke="currentColor"
    >
      <path
        d="M9.42503 3.44136C10.0561 3.23654 10.7837 3.2402 11.3792 3.54623C12.7532 4.25224 13.3477 6.07191 12.7946 8C12.5465 8.8649 12.1102 9.70472 11.1861 10.5524C10.262 11.4 8.98034 11.9 8.38571 11.9C8.17269 11.9 8 11.7321 8 11.525C8 11.3179 8.17644 11.15 8.38571 11.15C9.06497 11.15 9.67189 10.7804 10.3906 10.236C10.9406 9.8193 11.3701 9.28633 11.608 8.82191C12.0628 7.93367 12.0782 6.68174 11.3433 6.34901C10.9904 6.73455 10.5295 6.95946 9.97725 6.95946C8.7773 6.95946 8.0701 5.99412 8.10051 5.12009C8.12957 4.28474 8.66032 3.68954 9.42503 3.44136ZM3.42503 3.44136C4.05614 3.23654 4.78366 3.2402 5.37923 3.54623C6.7532 4.25224 7.34766 6.07191 6.79462 8C6.54654 8.8649 6.11019 9.70472 5.1861 10.5524C4.26201 11.4 2.98034 11.9 2.38571 11.9C2.17269 11.9 2 11.7321 2 11.525C2 11.3179 2.17644 11.15 2.38571 11.15C3.06497 11.15 3.67189 10.7804 4.39058 10.236C4.94065 9.8193 5.37014 9.28633 5.60797 8.82191C6.06282 7.93367 6.07821 6.68174 5.3433 6.34901C4.99037 6.73455 4.52948 6.95946 3.97725 6.95946C2.7773 6.95946 2.0701 5.99412 2.10051 5.12009C2.12957 4.28474 2.66032 3.68954 3.42503 3.44136Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
