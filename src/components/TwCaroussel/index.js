import * as React from "react";
import * as style from "./caroussel.scss";
import T from "prop-types";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import img1 from "../../assets/images/formation-professionnelle.jpeg";
import img2 from "../../assets/images/pexels-mart-production-7550542.jpg";
import img3 from "../../assets/images/pexels-cottonbro-studio-7014766.jpg";
import icon1 from "../../assets/images/Twitter_100px.png";
import icon2 from "../../assets/images/LinkedIn_100px.png";
import icon3 from "../../assets/images/Facebook_100px.png";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { ROUTES } from "../../common/constants";

const TwCaroussel = ({ items }) => {
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

  return (
    <div
      id="carouselExampleCaptions"
      class={"relative " + style.container}
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div
        class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="0"
          data-te-carousel-active
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="1"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide-to="2"
          class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
      </div>

      <nav
        class="lg:block xs:hidden relative flex flex-wrap items-center justify-between px-38 py-3 mb-2"
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
              <StaticImage
                class="hidden h-12 w-auto lg:block"
                src={"../../assets/images/logo.png"}
                alt={"Elite"}
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
                  {items.map((item, i) => (
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
                  href={ROUTES.INDEX + "#contact_section"}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="h-6 text-white"
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
                  class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.linkedin.com/company/academie-des-elites/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="h-6 text-white"
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
                  class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://twitter.com/AcademieElites?s=09"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="h-6 text-white"
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

      <nav
        class="lg:hidden xs:block relative flex w-full flex-wrap items-center justify-between py-3 text-white shadow-lg lg:flex-wrap lg:justify-start"
        data-te-navbar-ref
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          zIndex: "3",
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
              class="block border-0 bg-transparent py-2 px-7 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
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
                  class="h-10 w-10"
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
                    class="flex p-0 text-white hover:text-teal-400 focus:text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
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
                      {items.map((item, i) => (
                        <li class="p-2 hover:bg-teal-600" data-te-nav-item-ref>
                          <a
                            class="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
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
                    class="p-0 text-white hover:text-teal-400 focus:text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
                    href={ROUTES.ABOUT}
                    data-te-nav-link-ref
                  >
                    {intl.formatMessage({ id: "menu-item.label.about" })}
                  </a>
                </li>

                <li class="p-2" data-te-nav-item-ref>
                  <a
                    class="p-0 text-white hover:text-teal-400 focus:text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
                    href={ROUTES.CONTACT + "#contact_section"}
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

      <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-active
          data-te-carousel-item
          style={{
            backfaceVisibility: "hidden",
            position: "relative",
            zIndex: "1",
          }}
        >
          <img
            src={img2}
            id="img1"
            class="block w-full brightness-25"
            alt="..."
          />
          <div class="absolute inset-x-[15%] bottom-5 py-9 text-center text-white md:block my-28 centerContent">
            <h1 class="text-xl" id="centerText">
              Choisis d'être le meilleur !
            </h1>
            <br />
            <br />
            <p>
              <div class="flex justify-center space-x-2">
                <a
                  id="centerBtn"
                  href={ROUTES.SIGNUP}
                  class="hover:border-black-400 hover:ring-black-400 hover:ring-2 inline-block bg-warning px-7 pt-4 pb-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-black hover:yellow-400"
                >
                  Démarrez votre formation
                </a>
              </div>
            </p>
          </div>
        </div>

        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style={{
            backfaceVisibility: "hidden",
            position: "relative",
            zIndex: "1",
          }}
        >
          <img
            src={img1}
            id="img1"
            class="block w-full brightness-25"
            alt="..."
          />

          <div class="absolute inset-x-[15%] bottom-5 py-9 text-center text-white md:block my-28 centerContent">
            <h1 class="text-xl" id="centerText">
              Choisis d'être le meilleur !
            </h1>
            <br />
            <br />
            <p>
              <div class="flex justify-center space-x-2">
                <a
                  id="centerBtn"
                  href={ROUTES.SIGNUP}
                  class="hover:border-black-400 hover:ring-black-400 hover:ring-2 inline-block bg-warning px-7 pt-4 pb-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-black hover:yellow-400"
                >
                  Démarrez votre formation
                </a>
              </div>
            </p>
          </div>
        </div>

        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          style={{
            backfaceVisibility: "hidden",
            position: "relative",
            zIndex: "1",
          }}
        >
          <img
            src={img3}
            id="img1"
            class="block w-full brightness-25"
            alt="..."
          />

          <div class="absolute inset-x-[15%] bottom-5 py-9 text-center text-white md:block my-28 centerContent">
            <h1 class="text-xl" id="centerText">
              Choisis d'être le meilleur !
            </h1>
            <br />
            <br />
            <p>
              <div class="flex justify-center space-x-2">
                <a
                  id="centerBtn"
                  href={ROUTES.SIGNUP}
                  class="hover:border-black-400 hover:ring-black-400 hover:ring-2 inline-block bg-warning px-7 pt-4 pb-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-black hover:yellow-400"
                >
                  Démarrez votre formation
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
      <button
        class="absolute top-0 bottom-0 left-0 z-[1] flex w-[7%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="prev"
      >
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        class="absolute top-0 bottom-0 right-0 z-[1] flex w-[7%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-te-target="#carouselExampleCaptions"
        data-te-slide="next"
      >
        <span class="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next{" "}
        </span>
      </button>
    </div>
  );
};

TwCaroussel.propTypes = {
  items: T.array,
};

export default TwCaroussel;
