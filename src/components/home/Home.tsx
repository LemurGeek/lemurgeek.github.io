import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl text-rock_blue">HELLO THERE</h1>
        <h2 className="text-3xl font-thin my-5">
          I’m Marcello Calvo a Software Developer
        </h2>
        <button className="text-xl font-thin px-10 py-1 border-ochre_orange border-2 rounded-full hover:bg-ochre_orange hover:text-pearl_bush">
          See more
        </button>
      </div>
    </main>
  );
};

export default Home;
