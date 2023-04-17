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
                        href={ROUTES.INDEX + "#contact_section"}
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-7 text-teal-800">
                                      <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg>

                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                        class="hover:bg-teal-600 hover:text-black rounded-md px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                        href="https://www.linkedin.com/company/academie-des-elites/"
                        >                        
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-7 text-teal-800">
                            <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a
                        class="hover:bg-teal-600 hover:text-black rounded-md px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                        href="https://twitter.com/AcademieElites?s=09"
                        >
                                
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-7 text-teal-800">
                            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                            
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
                            href={ROUTES.INDEX}
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
                            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto bg-neutral-100"
                            id="navbarSupportedContent5"
                            data-te-collapse-item
                            style={{ marginLeft: "1rem" }}
                        >
                            <ul
                            class="list-style-none ml-auto flex flex-col pl-0 lg:flex-row"
                            data-te-navbar-nav-ref
                            >
                            {courses.map((item, i) => (
                                <li
                                class="p-2 hover:bg-teal-600"
                                data-te-nav-item-ref
                                >
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
                            href={ROUTES.ABOUT}
                            data-te-nav-link-ref
                        >
                            {intl.formatMessage({ id: "menu-item.label.about" })}
                        </a>
                        </li>

                        <li class="p-2" data-te-nav-item-ref>
                        <a
                            class="p-0 text-black hover:text-teal-400 focus:text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
                            href={ROUTES.INDEX + "#contact_section"}
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
