const Work = () => {
  return (
    <section className="flex flex-col flex-grow my-28 lg:my-36">
      <div className="text-center">
        <h1 className="text-5xl lg:text-9xl text-rock_blue">WORK</h1>
        <h2 className="text-xl lg:text-3xl font-light italic my-10">
          Interested in working together? Do not hesitate to contact me
        </h2>
        <div className="flex flex-col text-xl lg:text-3xl font-light gap-y-6 my-20">
          <div>
            <span>Email: </span>
            <a
              className="underline underline-offset-4 decoration-1 hover:decoration-ochre_orange hover:decoration-2"
              href="mailto:mchellocz@gmail.com"
            >
              mchellocz@gmail.com
            </a>
          </div>
          <div>
            <span>Social Media: </span>
            <a
              className="underline underline-offset-4 decoration-1 hover:decoration-ochre_orange hover:decoration-2"
              href="https://www.linkedin.com/in/mchellocz/"
              target="_blank"
            >
              LinkedIn
            </a>
            <span> / </span>
            <a
              className="underline underline-offset-4 decoration-1 hover:decoration-ochre_orange hover:decoration-2"
              href="https://github.com/LemurGeek"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
