import * as React from "react";
import * as style from "./menu.scss";
import T from "prop-types";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import img1 from "../../assets/images/formation-professionnelle.jpeg";
import img2 from "../../assets/images/pexels-mart-production-7550542.jpg";
import icon1 from "../../assets/images/Twitter_100px_black.png";
import icon2 from "../../assets/images/LinkedIn_100px_black.png";
import icon3 from "../../assets/images/Facebook_100px_black.png";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { ROUTES } from "../../common/constants";

const TwMenu = ({ courses }) => {
  const intl = useIntl();

  const [isOpen, toggle] = useState(false);
  const [isOpen2, toggle2] = useState(false);

  useEffect(() => {
    const subMenu = document.getElementById("subMenu");
    isOpen === true
      ? (subMenu.style.visibility = "visible")
      : (subMenu.style.visibility = "hidden");
  }, [isOpen]);

  const getSubMenu = (val) => {
    toggle(val);
  };

  return (
    <div
      class="relative float-left w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      style={{
        backfaceVisibility: "hidden",
        position: "relative",
      }}
    >
      <nav
        class="lg:block xs:hidden flex flex-wrap items-center justify-between px-14 py-3"
        style={{
          width: "100%",
          height: "80px",
          borderBlockEndColor: "#0d9488",
          borderBlockEndWidth: "2px",
        }}
      >
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
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
              <li class="nav-item">
                <a
                  class="text-white bg-teal-600 hover:bg-teal-600 
                                                        hover:text-black rounded-md px-9 py-2 
                                                        flex items-center text-xs uppercase 
                                                        font-bold leading-snug text-black
                                                        active:bg-teal-600 focus:outline-none focus:bg-teal-600"
                  href={ROUTES.INDEX}
                  aria-current="page"
                >
                  Acceuil
                </a>
              </li>
              <li class="nav-item" data-te-dropdown-ref>
                <a
                  class="text-teal-600 hover:text-teal-600 px-9 py-2 
                                                        flex items-center text-xs uppercase 
                                                        font-bold leading-snug text-black"
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
                        class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal hover:bg-neutral-100 active:text-teal-600 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-black dark:hover:bg-teal-600 dark:hover:text-black"
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
                  class="text-teal-600 hover:bg-teal-600 hover:text-white 
                                                        rounded-md px-9 py-2 flex items-center 
                                                        text-xs uppercase font-bold leading-snug text-black
                                                        active:bg-teal-600 focus:outline-none focus:bg-teal-600"
                  href={ROUTES.ABOUT}
                >
                  A propos
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="text-teal-600 hover:bg-teal-600 hover:text-white
                                                    rounded-md px-9 py-2 flex items-center 
                                                    text-xs uppercase font-bold leading-snug text-black
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
                  class="hover:bg-teal-600 hover:text-black rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="https://www.facebook.com/elitescd/"
                >
                  <img class="h-8 w-8 rounded-full" src={icon3} alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="hover:bg-teal-600 hover:text-black rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="https://www.linkedin.com/company/academie-des-elites/"
                >
                  <img class="h-8 w-8 rounded-full" src={icon2} alt="" />
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="hover:bg-teal-600 hover:text-black rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="https://twitter.com/AcademieElites?s=09"
                >
                  <img class="h-8 w-8 rounded-full" src={icon1} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav
        class="sticky top-0 lg:hidden xs:block relative flex w-full flex-wrap items-center justify-between py-3 text-black shadow-lg lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
        style={{
          borderBlockEndColor: "#0d9488",
          borderBlockEndWidth: "2px",
        }}
      >
        <div class="absoulte flex w-full flex-wrap items-center justify-between px-6">
          <a href={ROUTES.INDEX}>
            <img
              class="block h-14 w-auto lg:hidden py-2"
              src={logo}
              alt="Elite"
            />
          </a>

          <div class="absoulte items-center">
            <button
              class="block border-0 bg-transparent py-2 px-7 text-black hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
              type="button"
              data-te-collapse-init
              data-te-target="#navbarSupportedContent4"
              aria-controls="navbarSupportedContent4"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-10 w-10 text-black"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div class="absoulte flex w-full flex-wrap items-center justify-between px-6">
            <div
              class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContent4"
              data-te-collapse-item
              style={{ marginLeft: "5rem" }}
            >
              <ul
                class="list-style-none ml-auto flex flex-col pl-0 lg:flex-row"
                data-te-navbar-nav-ref
              >
                <li class="p-2" data-te-nav-item-ref>
                  <a
                    class="text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
                    href="#"
                    data-te-nav-link-ref
                  >
                    <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                      {intl.formatMessage({ id: "menu-item.label.home" })}
                    </span>
                  </a>
                </li>
                <li class="p-2" data-te-nav-item-ref>
                  <a
                    class="flex p-0 text-black hover:text-teal-400 focus:text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
                    href="#"
                    data-te-collapse-init
                    data-te-target="#navbarSupportedContent5"
                    aria-controls="navbarSupportedContent5"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    {intl.formatMessage({ id: "menu-item.label.academy" })}

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

                  <div
                    class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto bg-neutral-700"
                    id="navbarSupportedContent5"
                    data-te-collapse-item
                    style={{ marginLeft: "1rem" }}
                  >
                    <ul
                      class="list-style-none ml-auto flex flex-col pl-0 lg:flex-row"
                      data-te-navbar-nav-ref
                    >
                      {courses.map((item, i) => (
                        <li class="p-2 hover:bg-teal-600" data-te-nav-item-ref>
                          <a
                            class="text-black disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
                            href={`/courses/${item.slug}`}
                            data-te-nav-link-ref
                            style={{ textAlign: "justify" }}
                          >
                            <span>{item.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li class="p-2" data-te-nav-item-ref>
                  <a
                    class="p-0 text-black hover:text-teal-400 focus:text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
                    href="#"
                    data-te-nav-link-ref
                  >
                    {intl.formatMessage({ id: "menu-item.label.about" })}
                  </a>
                </li>

                <li class="p-2" data-te-nav-item-ref>
                  <a
                    class="p-0 text-black hover:text-teal-400 focus:text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
                    href="#"
                    data-te-nav-link-ref
                  >
                    {intl.formatMessage({ id: "menu-item.label.contacts" })}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

TwMenu.propTypes = {
  courses: T.array,
};

export default TwMenu;
