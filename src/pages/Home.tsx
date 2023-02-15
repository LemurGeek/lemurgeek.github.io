import React from "react";
import { useNavigate } from "react-router";

import CoralSketch from "../utils/p5/CoralSketch";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/about");
  };

  return (
    <main className="flex flex-col flex-grow justify-center h-[calc(100vh-56px)]">
      <div className="text-center relative z-10">
        <h1 className="text-5xl lg:text-9xl text-rock_blue text-border">
          HELLO THERE
        </h1>
        <div className="bg-pearl_bush/80 lg:bg-pearl_bush/75 max-w-fit m-auto rounded-xl px-4 my-10">
          <h2 className="text-xl lg:text-3xl font-light">
            I’m Marcello Calvo a Software Developer
          </h2>
        </div>
        <button
          onClick={buttonHandler}
          className="text-lg lg:text-xl bg-pearl_bush/80 lg:bg-pearl_bush/75 font-light px-10 py-1 border-ochre_orange border-2 rounded-full hover:bg-ochre_orange hover:text-pearl_bush"
        >
          See more
        </button>
      </div>
      <CoralSketch></CoralSketch>
    </main>
  );
};
export default Home;
