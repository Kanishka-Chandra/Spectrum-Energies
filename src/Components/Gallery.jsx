import React from "react";

const Images = [
  {
    src: "/gallery_1.webp",
    caption: "Wind Solutions",
    AOS: "fade-right",
  },
  {
    src: "/gallery_2.webp",
    caption: "Solar Solutions",
    AOS: "fade-left",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="flex w-full flex-col justify-center bg-green-500 bg-gradient-to-t from-sky-600 to-green-500 py-16 max-md:scroll-mt-16"
    >
      <h2
        data-aos="fade-down"
        className="cursor-default text-center text-4xl font-bold text-white md:text-5xl"
      >
        We bring together
      </h2>
      <div className="grid h-full w-full grid-cols-1 place-items-center gap-12 p-12 max-md:mt-5 md:grid-cols-2 md:gap-28">
        {Images.map((image, index) => (
          <Image
            src={image.src}
            caption={image.caption}
            key={index}
            dataAOS={image.AOS}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

const Image = ({ src, caption, dataAOS }) => {
  return (
    <div data-aos={dataAOS} className="relative aspect-square w-full md:w-96">
      <img
        className="h-full w-full rounded object-cover"
        src={src}
        alt={caption}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="cursor-default select-none rounded-md bg-slate-500/20 px-5 py-2 text-center text-3xl font-medium text-white shadow-lg backdrop-blur-sm md:text-4xl">
          {caption}
        </p>
      </div>
    </div>
  );
};
