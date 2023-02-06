import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between pt-6 px-12 items-baseline w-full">
      <div>
        <a
          href="/home"
          className="text-2xl font-black no-underline text-eerie_black"
        >
          MARCELLO CALVO
        </a>
      </div>
      <div className="flex flex-row justify-evenly gap-x-12">
        <a
          href="/about"
          className="text-xl font-black no-underline text-eerie_black hover:text-ochre_orange"
        >
          About
        </a>
        <a
          href="/work"
          className="text-xl font-black no-underline text-eerie_black hover:text-ochre_orange"
        >
          Work
        </a>
        <a
          href="/contact"
          className="text-xl font-black no-underline text-eerie_black hover:text-ochre_orange"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
