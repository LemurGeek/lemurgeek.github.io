import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between py-6 px-12 items-baseline text-center bg-eerie_black text-pearl_bush">
      <div className="font-thin">© 2022 Marcello Calvo</div>
      <div>i</div>
      <div className="flex flex-row justify-end gap-x-5">
        <a href="mailto:mchellocz@gmail.com">mchellocz@gmail.com</a>
        <a href="http://">IN</a>
        <a href="http://">GIT</a>
      </div>
    </footer>
  );
};

export default Footer;
