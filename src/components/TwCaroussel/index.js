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
import TwMenu from "../TwMenu";

const TwCaroussel = ({ items }) => {
  const intl = useIntl();

  const mItem = [items[0]];

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

      <TwMenu items={items} />

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
              Un espace privilégié d'apprentissage
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
              Un centre de créativité et d'innovation
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
