import React from "react";
import lemur from "../assets/img/lemur.png";

const About: React.FC = () => {
  return (
    <section className="flex flex-col flex-grow my-28 lg:my-36 px-8 lg:px-64">
      <div className="flex justify-center">
        <img
          src={lemur}
          alt=""
          className="absolute top-32 lg:top-36 left-40 md:left-[23rem] lg:left-[47.5%] rounded-full w-32 lg:w-64 h-auto"
        />
        <h1 className="relative text-5xl lg:text-9xl text-rock_blue mb-12 lg:mb-24">
          <span className="absolute -left-6 lg:static">ABOUT</span>{" "}
          <span className="ml-56 lg:ml-32">ME</span>
        </h1>
      </div>
      <div className="lg:text-2xl font-light my-5">
        <p>
          Hey, I’m <span className="font-normal">Marcello</span>. A{" "}
          <span className="font-normal">full stack software developer</span>{" "}
          based in Costa Rica, with knowledge on web accessibility, web design,
          agile methodologies, development frameworks, used to work in a team,
          responsible, versatile, fast learner with a fascination for interface
          design and user experience, currently interested in creative coding.
        </p>
        <p className="pt-7">
          When I’m not coding, you can find me playing videogames, watching
          movies, building mechanical keebs, and doing pixel art.
        </p>
      </div>
      <div className="lg:text-2xl font-light my-7">
        <h2 className="font-normal italic text-5xl">Skills</h2>
        <p className="py-10">
          A lot of my profesional projects were made in Angular 5+, and API REST
          services with Node and Loopback 3 as framework, nevertheless I’m
          always open to learn new technologies and knowledge to improve my
          skills.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="text-lg lg:text-xl font-light px-10 py-1 border-ochre_orange border-2 rounded-full hover:bg-ochre_orange hover:text-pearl_bush">
          Resume/CV
        </button>
      </div>
    </section>
  );
};

export default About;
