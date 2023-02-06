import React from "react";
import { IoMdFlower, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between py-6 px-12 items-baseline text-center bg-eerie_black text-pearl_bush">
      <div className="flex justify-start basis-1/3">
        <span>© 2023 Marcello Calvo</span>
      </div>
      <div className="flex justify-center self-center basis-1/3">
        <a href="/home">
          <IoMdFlower className="text-3xl" />
        </a>
      </div>
      <div className="flex flex-row justify-end gap-x-5 basis-1/3">
        <a href="mailto:mchellocz@gmail.com">mchellocz@gmail.com</a>
        <a href="https://www.linkedin.com/in/mchellocz/" target="_blank">
          <IoLogoLinkedin className="text-2xl" />
        </a>
        <a href="https://github.com/LemurGeek" target="_blank">
          <IoLogoGithub className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
