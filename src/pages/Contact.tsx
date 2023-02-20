import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Contact: React.FC = () => {
  const titleItem = useRef<HTMLHeadingElement | null>(null);
  const subTitleItem = useRef<HTMLHeadingElement | null>(null);
  const socialMedialItem = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      titleItem.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        ease: "back.out(1.7)",
        duration: 1,
      }
    );

    gsap.fromTo(
      subTitleItem.current,
      { opacity: -3 },
      {
        opacity: 1,
        ease: "slow",
        duration: 2,
      }
    );

    gsap.fromTo(
      socialMedialItem.current,
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        ease: "back.out(1.7)",
        duration: 1,
      }
    );
  }, []);

  return (
    <section className="flex flex-col flex-grow justify-center my-28 lg:my-36">
      <div className="text-center">
        <h1 ref={titleItem} className="text-5xl lg:text-9xl text-rock_blue">
          CONTACT
        </h1>
        <h2
          ref={subTitleItem}
          className="text-xl lg:text-3xl font-light italic my-10"
        >
          Interested in working together? Do not hesitate to contact me
        </h2>
        <div
          ref={socialMedialItem}
          className="flex flex-col text-xl lg:text-3xl font-light gap-y-6 my-20"
        >
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

export default Contact;
