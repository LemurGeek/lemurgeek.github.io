import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router";

import CoralSketch from "../utils/p5/CoralSketch";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/about");
  };

  const titleItem = useRef<HTMLHeadingElement | null>(null);
  const subtitleItem = useRef<HTMLDivElement | null>(null);
  const buttonItem = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      titleItem.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        ease: "back.out(1.7)",
        duration: 1.5,
      }
    );

    gsap.fromTo(
      subtitleItem.current,
      { opacity: 0, x: -150 },
      { opacity: 1, delay: 1, x: 0, ease: "circ.out", duration: 2 }
    );

    gsap.fromTo(
      buttonItem.current,
      { opacity: 0, y: 300 },
      { opacity: 1, delay: 2, y: 0, ease: "expo.out", duration: 2 }
    );
  }, []);

  return (
    <main className="flex flex-col flex-grow justify-center h-[calc(100vh-56px)]">
      <div className="text-center relative z-10">
        <h1
          ref={titleItem}
          className="text-7xl lg:text-9xl text-rock_blue text-border"
        >
          HELLO THERE
        </h1>
        <div
          ref={subtitleItem}
          className="bg-pearl_bush/90 lg:bg-pearl_bush/80 max-w-fit m-auto rounded-xl px-4 my-10"
        >
          <h2 className="text-xl lg:text-3xl font-light">
            I’m Marcello Calvo a Software Developer
          </h2>
        </div>
        <button
          ref={buttonItem}
          onClick={buttonHandler}
          className="text-lg lg:text-xl bg-pearl_bush/90 lg:bg-pearl_bush/80 font-light px-10 py-1 border-ochre_orange border-2 rounded-full hover:bg-ochre_orange hover:text-pearl_bush"
        >
          See more
        </button>
      </div>
      <CoralSketch></CoralSketch>
    </main>
  );
};
export default Home;
