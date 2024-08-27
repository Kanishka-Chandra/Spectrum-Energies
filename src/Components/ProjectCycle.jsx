import React from "react";

const ProjectCycle = ({
  id,
  heading,
  subHeading,
  paragraph,
  image,
  imageAlt,
}) => {
  return (
    <section
      id={id}
      className="flex w-full items-center justify-center bg-gradient-to-b from-sky-600 to-green-500 py-16 text-white max-md:scroll-mt-16"
    >
      <div className="flex w-full cursor-default flex-col gap-y-14 p-10">
        <div
          data-aos="fade-right"
          className="flex max-w-lg flex-col gap-14 self-start text-pretty"
        >
          <h2 className="text-4xl font-bold md:text-5xl">{heading}</h2>
        </div>

        <div className="grid w-full grid-cols-1 place-content-center gap-4 md:grid-cols-3">
          <div
            data-aos="fade-right"
            className="flex flex-col items-start justify-evenly"
          >
            <h3 className="gap text-2xl font-semibold md:text-3xl">
              {subHeading}
            </h3>
            <p className="mt-8 text-lg">{paragraph}</p>
          </div>
          <img
            data-aos="fade-left"
            className="w-full object-cover md:col-span-2 md:h-[450px]"
            src={image}
            alt={imageAlt || ""}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectCycle;
