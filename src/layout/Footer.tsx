import { Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  IoMdFlower,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMdMail,
} from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row justify-between py-6 px-12 items-baseline text-center bg-eerie_black text-pearl_bush">
      <div className="flex justify-start self-center basis-1/3">
        <span className="text-xs lg:text-base">
          ©{new Date().getFullYear()} Marcello Calvo
        </span>
      </div>
      <div className="flex justify-center self-center basis-1/3">
        <Link to={"/"}>
          <IoMdFlower className="text-3xl" />
        </Link>
      </div>
      <div className="flex flex-row self-center justify-end gap-x-5 basis-1/3 text-pearl_bush">
        <a className="hidden lg:flex" href="mailto:mchellocz@gmail.com">
          mchellocz@gmail.com
        </a>
        <a
          className="lg:hidden"
          href="mailto:mchellocz@gmail.com"
          target="_blank"
        >
          <IoMdMail className="text-2xl" />
        </a>
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
