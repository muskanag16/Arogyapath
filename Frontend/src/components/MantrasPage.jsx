import React from "react";

const mantras = [
  {
    title: "Gayatri Mantra",
    image: "/images/gayatri.jpg",
    audio: "/audios/gayatri.mp3",
  },
  {
    title: "Mahamrityunjaya Mantra",
    image: "/images/mahadev.jpg",
    audio: "/audios/mahamrityunjaya.mp3",
  },
  {
    title: "Ganesh Mantra",
    image: "/images/ganesh.jpg",
    audio: "/audios/ganesh.mp3",
  },
  {
    title: "Saraswati Vandana",
    image: "/images/saraswati.jpg",
    audio: "/audios/saraswati.mp3",
  },
  {
    title: "Durga Mantra",
    image: "/images/durga3.jpg",
    audio: "/audios/durga.mp3",
  },
  {
    title: "Lakshmi Mantra",
    image: "/images/lakshmi.jpg",
    audio: "/audios/lakshmi.mp3",
  },
  {
    title: "Hanuman Mantra",
    image: "/images/hanuman2.jpg",
    audio: "/audios/hanuman-mantra.mp3",
  },
  {
    title: "Krishna Mantra",
    image: "/images/krishna3.jpg",
    audio: "/audios/krishna-mantra.mp3",
  },
  {
    title: "Shiva Mantra",
    image: "/images/shiva2.jpg",
    audio: "/audios/shiva-mantra.mp3",
  },
  {
    title: "Buddha Mantra",
    image: "/images/buddha.jpg",
    audio: "/audios/buddha.mp3",
  },
  {
    title: "Navgrah Mantra",
    image: "/images/navgrah.jpg",
    audio: "/audios/navgrah.mp3",
  },
];

const MantrasPage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Mantras Collection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mantras.map((mantra, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <img
              src={mantra.image}
              alt={mantra.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{mantra.title}</h3>
            <audio controls className="w-full">
              <source src={mantra.audio} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MantrasPage;
