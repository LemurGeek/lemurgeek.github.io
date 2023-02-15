import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="flex flex-row justify-between pt-6 px-6 lg:px-12 items-baseline w-full z-20">
      <div>
        <NavLink
          to={"/"}
          className="lg:text-2xl font-black no-underline text-eerie_black"
        >
          MARCELLO CALVO
        </NavLink>
      </div>
      <div className="DESKTOP-MENU hidden lg:flex flex-row justify-evenly lg:gap-x-12">
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "lg:text-xl font-black no-underline text-ochre_orange "
              : "lg:text-xl font-black no-underline text-eerie_black hover:text-ochre_orange"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/work"}
          className={({ isActive }) =>
            isActive
              ? "lg:text-xl font-black no-underline text-ochre_orange "
              : "lg:text-xl font-black no-underline text-eerie_black hover:text-ochre_orange"
          }
        >
          Work
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "lg:text-xl font-black no-underline text-ochre_orange "
              : "lg:text-xl font-black no-underline text-eerie_black hover:text-ochre_orange"
          }
        >
          Contact
        </NavLink>
      </div>

      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-1 w-7 rounded-full bg-eerie_black"></span>
          <span className="block h-1 w-8 rounded-full bg-eerie_black"></span>
          <span className="block h-1 w-5 rounded-full bg-eerie_black"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-4 py-4"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-12 w-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-black no-underline text-ochre_orange"
                    : "text-xl font-black no-underline text-eerie_black hover:text-ochre_orange"
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-black no-underline text-ochre_orange"
                    : "text-xl font-black no-underline text-eerie_black hover:text-ochre_orange"
                }
                to={"/work"}
              >
                Work
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-black no-underline text-ochre_orange"
                    : "text-xl font-black no-underline text-eerie_black hover:text-ochre_orange"
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
