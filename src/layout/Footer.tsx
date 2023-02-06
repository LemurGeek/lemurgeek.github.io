import {
  IoMdFlower,
  IoLogoLinkedin,
  IoLogoGithub,
  IoMdMail,
} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between py-6 px-12 items-baseline text-center bg-eerie_black text-pearl_bush">
      <div className="flex justify-start basis-1/3">
        <span className="text-xs lg:text-base">© 2023 Marcello Calvo</span>
      </div>
      <div className="flex justify-center self-center basis-1/3">
        <a href="/home">
          <IoMdFlower className="text-3xl" />
        </a>
      </div>
      <div className="flex flex-row justify-end gap-x-5 basis-1/3">
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
