import React from "react";

const Offerings = [
  {
    title: "Book Your Next Event",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque itaque corporis, hic reiciendis cupiditate. Praesentium, accusamus distinctio, laudantium unde enim id dicta nostrum aut itaque quibusdam repellendus, quam officiis eum nisi corrupti error officia iste blanditiis modi omnis velit in? Nulla dolor fugit eos incidunt praesentium natus tempora quisquam!",
    buttonText: "Book Now",
    handleClick: () => console.log("Book Now Clicked"),
  },
  {
    title: "Book Your Next Event",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque itaque corporis, hic reiciendis cupiditate. Praesentium, accusamus distinctio, laudantium unde enim id dicta nostrum aut itaque quibusdam repellendus, quam officiis eum nisi corrupti error officia iste blanditiis modi omnis velit in? Nulla dolor fugit eos incidunt praesentium natus tempora quisquam!",
    buttonText: "Book Now",
    handleClick: () => console.log("Book Now Clicked"),
  },
  {
    title: "Book Your Next Event",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque itaque corporis, hic reiciendis cupiditate. Praesentium, accusamus distinctio, laudantium unde enim id dicta nostrum aut itaque quibusdam repellendus, quam officiis eum nisi corrupti error officia iste blanditiis modi omnis velit in? Nulla dolor fugit eos incidunt praesentium natus tempora quisquam!",
    buttonText: "Book Now",
    handleClick: () => console.log("Book Now Clicked"),
  },
  {
    title: "Book Your Next Event",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eaque itaque corporis, hic reiciendis cupiditate. Praesentium, accusamus distinctio, laudantium unde enim id dicta nostrum aut itaque quibusdam repellendus, quam officiis eum nisi corrupti error officia iste blanditiis modi omnis velit in? Nulla dolor fugit eos incidunt praesentium natus tempora quisquam!",
    buttonText: "Book Now",
    handleClick: () => console.log("Book Now Clicked"),
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="flex w-full flex-col items-center justify-center p-16 max-md:scroll-mt-16"
    >
      <h2 className="cursor-default text-center text-5xl font-bold">
        A few of the things we offer
      </h2>
      <div className="mt-20 grid w-full grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
        {Offerings.map((offering, index) => (
          <OfferingCards
            key={index}
            title={offering.title}
            text={offering.text}
            buttonText={offering.buttonText}
            handleClick={offering.handleClick}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;

const OfferingCards = ({ title, text, buttonText, handleClick }) => {
  return (
    <div className="flex flex-col gap-7">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-pretty text-base">{text}</p>
      <button
        onClick={handleClick}
        className="w-full rounded-full bg-green-500 py-2 transition-colors hover:bg-green-700"
      >
        <span className="font-medium text-white">{buttonText}</span>
      </button>
    </div>
  );
};
