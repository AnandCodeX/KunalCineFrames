import React, { useEffect, useState } from "react";

const Main = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVideoLoaded(true);
  }, []);

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      {isVideoLoaded && (
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://www.youtube.com/embed/veQqIrrc5tI?autoplay=1&mute=1&loop=1&playlist=veQqIrrc5tI&controls=0&showinfo=0&autohide=1&modestbranding=1&fs=0"
          title="YouTube video player"
          
          frameBorder="0"
          allow="autoplay; loop; fullscreen"
          allowFullScreen
        ></iframe>
      )}
      <div className="relative z-10 text-center text-white p-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          An inspiring collection of photos
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Taken by 3 great photographers from Amsterdam, The Netherlands.
        </p>
        <div className="flex justify-center gap-5">
          <a
            href="/featured"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
          >
            Discover Featured Photos
          </a>
          <a
            href="/photographers"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition duration-300"
          >
            Meet Photographers
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
    </div>
  );
};

export default Main;
