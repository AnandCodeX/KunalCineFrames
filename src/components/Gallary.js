import React from "react";
import "./Gallery.css";
const Gallary = () => {
  const photos = [
    {
      title: "Young girl listening to music",
      imageUrl: "Banner.jpg",
    },
    {
      title: "Mysterious man looking over a lake",
      imageUrl: "Banner.jpg",
    },
    { title: "Asian Woman Reading a Book", imageUrl: "Banner.jpg" },
    { title: "A man with his best friend", imageUrl: "Banner.jpg" },
    {
      title: "Entering a new adventure",
      imageUrl: "Banner.jpg",
      author: "Sarah Fischer",
    },
    { title: "Mirror Reflection of rock", imageUrl: "Banner.jpg" },
    { title: "Rainbow at a Waterfall", imageUrl: "Banner.jpg" },
    { title: "Woman sleeping under window", imageUrl: "Banner.jpg" },
    { title: "Sunset behind mountains", imageUrl: "Banner.jpg" },
  ];

  return (
    <div className="gallery" id="Gallery">
      {photos.map((photo, index) => (
        <div
          className="gallery-item"
          key={index}
          style={{ backgroundImage: `url(${photo.imageUrl})` }}
        >
          <div className="overlay">
            <h3>{photo.title}</h3>
            {photo.author && <p>by {photo.author}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallary;
