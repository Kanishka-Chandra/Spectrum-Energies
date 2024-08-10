import React from "react";

const Images = [
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29sYXIlMjBwYW5uZWx8ZW58MHx8MHx8fDA%3D",
    caption: "Solar Solutions",
  },
  {
    src: "https://images.unsplash.com/photo-1495021125225-d472d864992a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbmQlMjBtaWxsfGVufDB8fDB8fHww",
    caption: "Wind Solutions",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="flex w-full flex-col justify-center bg-green-500 py-16 max-md:scroll-mt-16"
    >
      <h2 className="cursor-default text-center text-5xl font-bold text-white">
        We bring together
      </h2>
      <div className="grid h-full w-full grid-cols-1 place-items-center gap-12 p-12 max-md:mt-5 md:grid-cols-2 md:gap-28">
        {Images.map((image, index) => (
          <Image src={image.src} caption={image.caption} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;

const Image = ({ src, caption }) => {
  return (
    <div className="relative aspect-square w-full md:w-96">
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
