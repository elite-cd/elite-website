import { useIntl } from "gatsby-plugin-intl";
import T from "prop-types";
import * as React from "react";
import { ROUTES } from "../../common/constants";
import Logo from "../Logo";
import DropdownItem from "./DropdownItem";
import * as style from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import { Link } from "gatsby";

import icon1 from "../../assets/images/Twitter_100px.png";
import icon2 from "../../assets/images/LinkedIn_100px.png";
import icon3 from "../../assets/images/Facebook_100px.png";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";

const Menu = ({ activeRoute, courses }) => {
  const intl = useIntl();
  const ACADEMY_COURSES =
    courses &&
    courses.map((course) => {
      return { text: course.title, url: `/courses/${course.slug}` };
    });
    const [isOpen, toggle] = useState(false);
  const [isOpen2, toggle2] = useState(false);

  useEffect(() => {
    const subMenu = document.getElementById("subMenu");
    isOpen === true
      ? (subMenu.style.visibility = "visible")
      : (subMenu.style.visibility = "hidden");
  }, [isOpen]);

  useEffect(() => {
    const subMenu2 = document.getElementById("subMenu2");
    isOpen2 === true
      ? (subMenu2.style.visibility = "visible")
      : (subMenu2.style.visibility = "hidden");
  }, [isOpen2]);

  const getSubMenu = (val) => {
    toggle(val);
  };

  const getSubMenu2 = (val) => {
    toggle2(val);
  };

  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <Link to={ ROUTES.INDEX }>
          <Logo className={style.logo} />
        </Link>
        
        <ul className={style["navlinks"]}>
          <input
            className={style.checkbox}
            type="checkbox"
            id="checkbox_toggle"
          />

          <label htmlFor="checkbox_toggle" className={style.hamburger}>
            &#9776;
          </label>

          <div className={style.menu}>
          <nav
            class="lg:block xs:hidden relative flex flex-wrap items-center justify-between px-20 py-1 mb-2"
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              zIndex: "3",
              width: "100%",
              height: "80px",
              borderBlockEndColor: "#0d9488",
              borderBlockEndWidth: "2px",
            }}
          >
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <a
                  class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href={ROUTES.INDEX}
                >
                  <img
                    class="hidden h-12 w-auto lg:block"
                    src={logo}
                    alt="Elite"
                  />
                </a>
                <button
                  class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                >
                  <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                  <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
              </div>
              <div class="lg:flex flex-grow items-center " id="centerMenu">
                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                  <li class="nav-item">
                    <a
                      class=" bg-teal-600 hover:bg-teal-600 
                                                    hover:text-white rounded-md px-9 py-2 
                                                    flex items-center text-xs uppercase 
                                                    font-bold leading-snug text-white
                                                    active:bg-teal-600 focus:outline-none focus:bg-teal-600"
                      href={ROUTES.INDEX}
                      aria-current="page"
                    >
                      Acceuil
                    </a>
                  </li>
                  <li class="nav-item" data-te-dropdown-ref>
                    <a
                      class="    hover:text-teal-600 px-9 py-2 
                                                    flex items-center text-xs uppercase 
                                                    font-bold leading-snug text-white"
                      href="#formations"
                      id="dropdownMenuButton1"
                      data-te-dropdown-toggle-ref
                      aria-expanded="false"
                      data-te-ripple-init
                      onMouseOver={() => getSubMenu(true)}
                      data-te-ripple-color="light"
                    >
                      Formations
                      <span class="ml-2 w-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="h-5 w-5"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                    <ul
                      class="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden border-none bg-white bg-clip-padding text-left shadow-lg dark:bg-white [&[data-te-dropdown-show]]:block"
                      id="subMenu"
                      aria-labelledby="dropdownMenuButton1"
                      onMouseLeave={() => getSubMenu(false)}
                      data-te-dropdown-menu-ref
                    >
                      {courses.map((item, i) => (
                        <li>
                          <a
                            class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal hover:bg-neutral-100 active:text-teal-600 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-black dark:hover:bg-teal-600 dark:hover:text-white"
                            href={`/courses/${item.slug}`}
                            data-te-dropdown-item-ref
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class=" hover:bg-teal-600 hover:text-white 
                                                    rounded-md px-9 py-2 flex items-center 
                                                    text-xs uppercase font-bold leading-snug text-white
                                                    active:bg-teal-600 focus:outline-none focus:bg-teal-600"
                      href={ROUTES.ABOUT}
                    >
                      A propos
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="hover:bg-teal-600 hover:text-white 
                                                rounded-md px-9 py-2 flex items-center 
                                                text-xs uppercase font-bold leading-snug text-white
                                                active:bg-teal-600 focus:outline-none focus:bg-teal-600"
                      href={ROUTES.CONTACT}
                    >
                      Contacts
                    </a>
                  </li>
                </ul>

                <ul class="flex flex-col lg:flex-row list-none ml-auto">
                  <li class="nav-item">
                    <a
                      class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://www.facebook.com/elitescd/"
                    >
                      <img class="h-5 w-5 rounded-full" src={icon3} alt="" />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://www.linkedin.com/company/academie-des-elites/"
                    >
                      <img class="h-5 w-5 rounded-full" src={icon2} alt="" />
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://twitter.com/AcademieElites?s=09"
                    >
                      <img class="h-5 w-5 rounded-full" src={icon1} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          </div>
        </ul>
      </nav>
    </div>
  );
};

Menu.propTypes = {
  activeRoute: T.string,
};

export default Menu;
