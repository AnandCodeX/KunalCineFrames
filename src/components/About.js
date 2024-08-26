import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="bg-cover bg-center py-10 px-4 sm:py-16 sm:px-6 lg:px-8 m-5 sm:m-8 lg:m-14  mt-10 sm:mt-16 lg:mt-20 mb-10 sm:mb-16 lg:mb-20"
      style={{ backgroundImage: "url('about.jpeg')" }}
    >
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          A little bit about me
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="bg-white text-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg max-w-full sm:max-w-2xl lg:max-w-3xl mx-auto">
          <blockquote className="italic text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            "Welcome to KunalCineFrames, where every frame tells a story. As the
            visionary behind the lens, Kunal brings a unique perspective to the
            world of photography and cinematography. With an unwavering passion
            for capturing the essence of every moment, KunalCineFrames is a
            testament to artistry, precision, and creativity."
          </blockquote>

          <h3 className="font-semibold text-lg sm:text-xl mb-4">
            Having filmed love stories for years, I bring expertise and passion
            to making your wedding memories unforgettable.
          </h3>
          <p className="text-sm sm:text-base mb-4">
            At KunalCineFrames, we specialize in crafting visual narratives that
            transcend the ordinary. From weddings and events to editorial shoots
            and cinematic storytelling, our services are tailored to transform
            your moments into timeless memories. With an acute attention to
            detail and an innate ability to capture the emotion in every frame,
            Kunal ensures that each photograph and filmstrip is a work of art.
          </p>
          <p className="text-sm sm:text-base mb-4">
            Our commitment extends beyond the click of a shutter or the roll of
            a camera. We pride ourselves on providing a personalized and
            seamless experience, working closely with clients to understand
            their vision and deliver results that exceed expectations. Whether
            you're seeking the magic of a wedding day, the allure of a fashion
            shoot, or the impact of a corporate event, KunalCineFrames is
            dedicated to making your visual dreams a stunning reality.
          </p>

          <p className="text-sm sm:text-base">
            Join us on this visual journey where every frame is a masterpiece,
            and every story is told with unparalleled artistry. Your moments
            deserve to be captured by KunalCineFrames – where excellence meets
            emotion, and the art of storytelling comes to life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
