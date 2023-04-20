import * as React from "react";
import * as style from "./Menu.module.scss";
import T from "prop-types";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import logo from "../../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { ROUTES } from "../../../common/constants";
import MenuItem from "../MenuItem";

const Menu = ({ activeRoute, items, whiteMenu }) => {
  const intl = useIntl();
  const mItem = [items[0]];
  console.log("CAROUSEL DATA");
  console.log(mItem);

  const [isOpen, toggle] = useState(false);

  useEffect(() => {
    const subMenu = document.getElementById("subMenu");
    isOpen === true
      ? (subMenu.style.visibility = "visible")
      : (subMenu.style.visibility = "hidden");
  }, [isOpen]);

  const getSubMenu = (val) => {
    toggle(val);
  };

  const navStyle = {
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: "3",
    width: "100%",
    height: "75px",
    borderBlockEndColor: "#0d9488",
    borderBlockEndWidth: "2px",
  };

  const whiteNavStyle = {
    width: "100%",
    height: "75px",
    borderBlockEndColor: "#0d9488",
    borderBlockEndWidth: "2px",
  };
  const activeitemClass =
    "bg-teal-600 hover:bg-teal-600 hover:text-white rounded-md px-9 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white active:bg-teal-600 focus:outline-none focus:bg-teal-600";
  const defaultItemClass =
    "hover:text-teal-400 px-9 py-2 flex items-center text-xs uppercase font-bold leading-snug active:bg-teal-600 focus:outline-none focus:bg-teal-600 focus:text-white h-[60px]";
  const whiteItemClass =
    "text-teal-600 px-9 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black active:bg-teal-600 focus:outline-none focus:bg-teal-600 focus:text-white h-[60px]";
  const defalutIconClass =
    "hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 mx-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75";
  const whiteIconClass =
    "hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 mx-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75";

  return (
    <nav
      class="lg:block xs:hidden relative flex flex-wrap items-center justify-between px-38 py-3 "
      style={whiteMenu ? whiteNavStyle : navStyle}
    >
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href={ROUTES.INDEX}
          >
            <img class="hidden h-12 w-auto lg:block" src={logo} alt="Elite" />
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
            <MenuItem
              url={ROUTES.INDEX}
              text={"Acceuil"}
              isActive={activeRoute ? ROUTES.INDEX === activeRoute : true}
              itemClass={whiteMenu ? whiteItemClass : defaultItemClass}
            />

            <li class="nav-item" data-te-dropdown-ref>
              <a
                class={
                  (whiteMenu
                    ? "text-teal-600"
                    : "hover:text-teal-600 text-white") +
                  " px-9 py-2 flex items-center text-xs uppercase font-bold leading-snug h-[60px]" +
                  (ROUTES.ACADEMY === activeRoute
                    ? " border-b-[5px] border-teal-600 text-teal-800"
                    : "")
                }
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
                class={
                  "absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden border-none bg-clip-padding text-left shadow-lg [&[data-te-dropdown-show]]:block " +
                  (whiteMenu ? "bg-white" : "")
                }
                id="subMenu"
                aria-labelledby="dropdownMenuButton1"
                onMouseLeave={() => getSubMenu(false)}
                data-te-dropdown-menu-ref
              >
                {items.map((item, i) => (
                  <li>
                    <a
                      class={
                        "block w-full whitespace-nowrap bg-transparent py-4 px-4 text-sm font-normal hover:bg-teal-800 hover:text-white active:text-teal-600 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 " +
                        (whiteMenu ? "text-black" : "text-white")
                      }
                      href={`/courses/${item.slug}`}
                      data-te-dropdown-item-ref
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <MenuItem
              url={ROUTES.ABOUT}
              text={"A propos"}
              isActive={ROUTES.ABOUT === activeRoute}
              itemClass={whiteMenu ? whiteItemClass : defaultItemClass}
            />
            <MenuItem
              url={ROUTES.INDEX + "#contact_section"}
              text={"Contacts"}
              itemClass={whiteMenu ? whiteItemClass : defaultItemClass}
            />
          </ul>

          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <a
                class={whiteMenu ? whiteIconClass : defalutIconClass}
                href="https://www.facebook.com/elitescd/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class={
                    whiteMenu
                      ? "h-6 text-teal-600 hover:text-white"
                      : "h-6 text-white"
                  }
                >
                  <path
                    fill="currentColor"
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a
                class={whiteMenu ? whiteIconClass : defalutIconClass}
                href="https://www.linkedin.com/company/academie-des-elites/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class={
                    whiteMenu
                      ? "h-6 text-teal-600 hover:text-white"
                      : "h-6 text-white"
                  }
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  />
                </svg>
              </a>
            </li>

            <li class="nav-item">
              <a
                class={whiteMenu ? whiteIconClass : defalutIconClass}
                href="https://twitter.com/AcademieElites?s=09"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class={
                    whiteMenu
                      ? "h-6 text-teal-600 hover:text-white"
                      : "h-6 text-white"
                  }
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  activeRoute: T.string,
  whiteMenu: T.bool,
};

export default Menu;
