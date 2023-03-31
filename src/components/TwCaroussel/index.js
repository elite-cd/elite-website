import * as React from "react";
import * as style from "./caroussel.scss";
import * as te from 'tw-elements';
import T from "prop-types";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import img1 from  "../../assets/images/formation-professionnelle.jpeg"
import img2 from  "../../assets/images/pexels-julia-m-cameron-4144144.jpg"
import icon1 from  "../../assets/images/Twitter_100px.png"
import icon2 from  "../../assets/images/LinkedIn_100px.png"
import icon3 from  "../../assets/images/Facebook_100px.png"
import logo from  "../../assets/images/logo.png"
import { useEffect, useState } from "react";

const TwCaroussel = ({ items }) => {
    const mItem = [items[0]];

    const [isOpen, toggle] = useState(false);

    useEffect(() => {
        const subMenu = document.getElementById("subMenu");
        isOpen === true ? (subMenu.style.visibility = "visible"): (subMenu.style.visibility = "hidden");
      }, [isOpen]);

    const getSubMenu = (val) => {
        toggle(val)
    }

    
  return (
      <div
          id="carouselExampleCaptions"
          class="relative"
          data-te-carousel-init
          data-te-carousel-slide>
          <div
              class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-te-carousel-indicators>
              <button
                  type="button"
                  data-te-target="#carouselExampleCaptions"
                  data-te-slide-to="0"
                  data-te-carousel-active
                  class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-current="true"
                  aria-label="Slide 1"></button>
              <button
                  type="button"
                  data-te-target="#carouselExampleCaptions"
                  data-te-slide-to="1"
                  class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 2"></button>
              <button
                  type="button"
                  data-te-target="#carouselExampleCaptions"
                  data-te-slide-to="2"
                  class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-label="Slide 3"></button>
          </div>
          <div
              class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
           
              <div
                  class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-active
                  data-te-carousel-item
                  style={{ backfaceVisibility: "hidden", position: "relative", zIndex: "1" }}>


                  <nav class="relative flex flex-wrap items-center justify-between px-9 py-2 mb-2"
                        style={{ backgroundColor: "transparent", position: "absolute", zIndex: "3", width: "100%", height : "60px", borderBlockEndColor: "#0d9488", borderBlockEndWidth: "2px" }}>
                      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                          <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                              <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                                  <img class="block h-8 w-auto lg:hidden" src={logo} alt="Your Company" />
                                  <img class="hidden h-8 w-auto lg:block" src={logo} alt="Your Company" /> 
                              </a>
                              <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                                  <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                                  <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                                  <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                              </button>
                          </div>
                          <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
                              <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                  <li class="nav-item">
                                      <a    class=" bg-teal-600 hover:bg-teal-600 
                                                    hover:text-white rounded-md px-5 py-2 
                                                    flex items-center text-xs uppercase 
                                                    font-bold leading-snug text-white
                                                    active:bg-teal-600 focus:outline-none focus:bg-teal-600" 
                                            href="#pablo"
                                            aria-current="page">
                                          Acceuil
                                      </a>

                                  </li>
                                  <li class="nav-item" data-te-dropdown-ref>
                                      <a class="    hover:text-teal-600 px-5 py-2 
                                                    flex items-center text-xs uppercase 
                                                    font-bold leading-snug text-white" 
                                         href="#formations"
                                         id="dropdownMenuButton1"
                                         data-te-dropdown-toggle-ref
                                         aria-expanded="false"
                                         data-te-ripple-init
                                         onMouseOver={() => getSubMenu(true) }
                                         data-te-ripple-color="light">
                                          Formations

                                          <span class="ml-2 w-2">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 20 20"
                                                  fill="currentColor"
                                                  class="h-5 w-5">
                                                  <path
                                                      fill-rule="evenodd"
                                                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                      clip-rule="evenodd" />
                                              </svg>
                                          </span>
                                      </a>
                                      <ul
                                          class="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden border-none bg-white bg-clip-padding text-left shadow-lg dark:bg-white [&[data-te-dropdown-show]]:block"
                                          id="subMenu"
                                          aria-labelledby="dropdownMenuButton1"
                                          onMouseLeave={() => getSubMenu(false) }
                                          data-te-dropdown-menu-ref>
                                          <li>
                                              <a
                                                  class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal hover:bg-neutral-100 active:text-teal-600 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-black dark:hover:bg-teal-600 dark:hover:text-white"
                                                  href="#"
                                                  data-te-dropdown-item-ref
                                              >Base de la programmation
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal hover:bg-neutral-100 active:text-teal-600 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-black dark:hover:bg-teal-600 dark:hover:text-white"
                                                  href="#"
                                                  data-te-dropdown-item-ref
                                              >Alphabetisation numérique</a>
                                          </li>
                                          <li>
                                              <a
                                                  class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal hover:bg-neutral-100 active:text-teal-600 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-black dark:hover:bg-teal-600 dark:hover:text-white"
                                                  href="#"
                                                  data-te-dropdown-item-ref
                                              >Programme  d'immersion en entreprise</a>
                                          </li>
                                      </ul>
                                  </li>
                                  <li class="nav-item">
                                      <a    class=" hover:bg-teal-600 hover:text-white 
                                                    rounded-md px-5 py-2 flex items-center 
                                                    text-xs uppercase font-bold leading-snug text-white
                                                    active:bg-teal-600 focus:outline-none focus:bg-teal-600" 
                                            href="#pablo">
                                          A propos
                                      </a>
                                  </li>

                                  <li class="nav-item">
                                      <a class="hover:bg-teal-600 hover:text-white 
                                                rounded-md px-5 py-2 flex items-center 
                                                text-xs uppercase font-bold leading-snug text-white
                                                active:bg-teal-600 focus:outline-none focus:bg-teal-600" 
                                                href="#pablo">
                                          Contacts
                                      </a>
                                  </li>

                              </ul>

                              <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                 
                                  <li class="nav-item">
                                      <a class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        <img class="h-5 w-5 rounded-full" src={icon3} alt="" />
                                      </a>

                                  </li>
                                  <li class="nav-item">
                                      <a class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                      <img class="h-5 w-5 rounded-full" src={icon2} alt="" />
                                      </a>
                                  </li>

                                  <li class="nav-item">
                                      <a class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                      <img class="h-5 w-5 rounded-full" src={icon1} alt="" />
                                      </a>
                                  </li>

                              </ul>
                          </div>
                      </div>
                  </nav>
                    <img
                      src={ img1 }
                      class= "block w-full brightness-25"
                      style={{ zIndex: "999", height: "550px" }}
                      alt="..." />
                  <div
                      class="absolute inset-x-[15%] bottom-5 hidden py-9 text-center text-white md:block my-28">
                      <h1 class="text-xl" style={{  fontSize: "35px" }}>Choisis d'être le meilleur !</h1>
                      <br/><br/>
                      <p>
                        <div class="flex justify-center space-x-2">
                        <button
                        style={{  borderRadius: "20px", fontWeight: "600", textTransform: "initial", height: "45px"  }}
                        type="button"
                        class="hover:border-yellow-400 hover:ring-yellow-400 hover:ring-2 inline-block bg-warning px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-black hover:yellow-400">
                        Démarrez votre formation
                        </button>
                        </div>
                      </p>
                  </div>
              </div>
           
              <div
                  class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  style={{ backfaceVisibility: "hidden", position: "relative", zIndex: "1" }}>
                
                  <nav class="relative flex flex-wrap items-center justify-between px-9 py-4 mb-3"
                        style={{ backgroundColor: "transparent", position: "absolute", zIndex: "3", width: "100%", borderBlockEndColor: "#0d9488", borderBlockEndWidth: "2px" }}>
                      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                          <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                              <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                                  <img class="block h-8 w-auto lg:hidden" src={logo} alt="Your Company" />
                                  <img class="hidden h-8 w-auto lg:block" src={logo} alt="Your Company" /> 
                              </a>
                              <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                                  <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                                  <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                                  <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                              </button>
                          </div>
                          <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
                              <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                  <li class="nav-item">
                                      <a    class="bg-teal-600 text-white rounded-md px-5 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
                                            href="#pablo"
                                            aria-current="page">
                                          Acceuil
                                      </a>

                                  </li>
                                  <li class="nav-item">
                                      <a class="hover:bg-teal-600 hover:text-white rounded-md px-5 hover:ml-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white" href="#pablo">
                                          Formations
                                      </a>

                                  </li>
                                  <li class="nav-item">
                                      <a class="hover:bg-teal-600 hover:text-white rounded-md px-5 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white" href="#pablo">
                                          A propos
                                      </a>
                                  </li>

                                  <li class="nav-item">
                                      <a class="hover:bg-teal-600 hover:text-white rounded-md px-5 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white" href="#pablo">
                                          Contacts
                                      </a>
                                  </li>

                              </ul>

                              <ul class="flex flex-col lg:flex-row list-none ml-auto">
                                 
                                  <li class="nav-item">
                                      <a class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                        <img class="h-5 w-5 rounded-full" src={icon3} alt="" />
                                      </a>

                                  </li>
                                  <li class="nav-item">
                                      <a class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                      <img class="h-5 w-5 rounded-full" src={icon2} alt="" />
                                      </a>
                                  </li>

                                  <li class="nav-item">
                                      <a class="hover:bg-teal-600 hover:text-white rounded-md px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                      <img class="h-5 w-5 rounded-full" src={icon1} alt="" />
                                      </a>
                                  </li>

                              </ul>
                          </div>
                      </div>
                  </nav>

                  <img
                      src={ img2 }
                      class= "block w-full brightness-25"
                      style={{ zIndex: "999", height: "550px" }}
                      alt="..." />

                  <div
                      class="absolute inset-x-[15%] bottom-5 hidden py-9 text-center text-white md:block my-28">
                      <h1 class="text-xl" style={{  fontSize: "35px" }}>Choisis d'être le meilleur !</h1>
                      <br/><br/>
                      <p>
                        <div class="flex justify-center space-x-2">
                        <button
                        style={{  borderRadius: "30px", fontWeight: "600", textTransform: "initial", color: "black", height: "45px"  }}
                        type="button"
                        class="inline-block bg-warning px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#046059] transition duration-150 ease-in-out hover:bg-yellow-500">
                        Démarrez votre formation
                        </button>
                        </div>
                      </p>
                  </div>

              </div>
          </div>
          <button
              class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="prev">
              <span class="inline-block h-8 w-8">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6">
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
              </span>
              <span
                  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Previous</span>
          </button>
          <button
              class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="next">
              <span class="inline-block h-8 w-8">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6">
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
              </span>
              <span
                  class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Next </span>
          </button>
      </div>

  )        
};

TwCaroussel.propTypes = {
  items: T.array,
};

export default TwCaroussel;
