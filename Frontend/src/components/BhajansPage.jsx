import React from "react";

const bhajans = [
  {
    title: "Shree Ram Jai Ram",
    image: "/images/ram-bhajan.png",
    audio: "/audio/Shri-Ram.mp3",
  },
  {
    title: "Hanuman Chalisa",
    image: "/images/hanuman.png",
    audio: "/audio/Hanuman-Chalisa.mp3",
  },
  {
    title: "Om Jai Jagdish",
    image: "/images/jagdish.jpg",
    audio: "/audio/Om-Jai-Jagdish-Hare.mp3",
  },
  {
    title: "Shiv Tandav Stotram",
    image: "/images/shiva.jpg",
    audio: "/audios/shiv-tandav.mp3",
  },
  {
    title: "Mere To Giridhar Gopal",
    image: "/images/krishna.jpg",
    audio: "/audios/giridhar.mp3",
  },
  {
    title: "Jai Ambe Gauri",
    image: "/images/durga.jpg",
    audio: "/audios/ambe-gauri.mp3",
  },
  {
    title: "Vaishnav Jan To",
    image: "/images/mahatma.jpg",
    audio: "/audios/vaishnav.mp3",
  },
  {
    title: "Radhe Radhe Barsane Wali Radhe",
    image: "/images/radhe.jpg",
    audio: "/audios/radhe.mp3",
  },
  {
    title: "Shree Krishna Govind Hare Murari",
    image: "/images/krishna2.jpg",
    audio: "/audios/govind.mp3",
  },
  {
    title: "Om Namah Shivaya",
    image: "/images/shiv.jpg",
    audio: "/audios/om-namah.mp3",
  },
  {
    title: "Durga Chalisa",
    image: "/images/durga2.jpg",
    audio: "/audios/durga-chalisa.mp3",
  },
];

const BhajansPage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Bhajans Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bhajans.map((bhajan, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <img
              src={bhajan.image}
              alt={bhajan.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{bhajan.title}</h3>
            <audio controls className="w-full">
              <source src={bhajan.audio} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BhajansPage;
