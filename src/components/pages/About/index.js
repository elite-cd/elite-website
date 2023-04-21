import React from "react";
import { ROUTES } from "../../../common/constants";
import Page from "../../PageTemplate";
import * as style from "./About.module.scss";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import contactImg from "../../../assets/images/iStock-1201798767-1 black.jpg";
import contactImg2 from "../../../assets/images/Rectangle 56.png";
import contactImg3 from "../../../assets/images/question_mark.png";
import { useState, useEffect } from "react";

import img1 from "../../../assets/images/to-learn-gb120f4a96_1920.jpg";
import img2 from "../../../assets/images/education-g0a1924b6c_1920.png";
import img3 from "../../../assets/images/coding-g486fa6d97_1280.png";
import img4 from "../../../assets/images/graduate-g37719b1cc_1280.png";
import img5 from "../../../assets/images/man-g5ae25b970_1920.jpg";
import img6 from "../../../assets/images/education-gef2a32113_1280.png";

import team1 from "../../../assets/images/1605394670888.jpg";
import team2 from "../../../assets/images/322279599_1240337903547695_2004677918904243901_n.jpg";
import team3 from "../../../assets/images/team3.jpg";
import "animate.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import {
  faEnvelope,
  faLocationPin,
  faPhone,
  faFacebook,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativePath: { eq: "acad01.png" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          id
        }
      }
    }
  `);
  const aboutImg = data.allFile.nodes[0].childImageSharp;

  const OverlayTitles = [
    "Mentors de niveau international",
    "Coach Qualifiés et pratiquants",
    "Lab Creative",
    "Methode Harkness",
    "Environnement Professionnel et Sérieux",
    "Certificat",
  ];

  const OverlayCountry = ["", "", "Canada", "USA", "", ""];

  const [carouselNext, swipeCarouselNext] = useState(false);
  const [carouselPrev, swipeCarouselPrev] = useState(false);

  const twElement = {
    te: null,
  };

  useEffect(async () => {
    twElement.te = await import("tw-elements");

    setTimeout(() => {
      const myCarousel = new twElement.te.Carousel(
        document.getElementById("carouselExampleIndicators")
      );
      myCarousel.cycle();
    }, 500);
  }, []);

  useEffect(() => {
    if (carouselNext === true) {
      const myCarousel = new twElement.te.Carousel(
        document.getElementById("carouselExampleIndicators")
      );
      myCarousel.next();
    }
  }, [carouselNext]);

  useEffect(() => {
    if (carouselPrev === true) {
      const myCarousel = new twElement.te.Carousel(
        document.getElementById("carouselExampleIndicators")
      );
      myCarousel.prev();
    }
  }, [carouselPrev]);

  const swipeNextCarousel = () => {
    swipeCarouselNext(true);
  };

  const swipePrevCarousel = () => {
    swipeCarouselPrev(true);
  };

  const renderPage = () => {
    return (
      <div className={style.container}>
        <div className={style.parent}>
          <StaticImage
            src={"../../../assets/images/iStock-1201798767-1 black.jpg"}
            alt={"Image 1"}
            style={{
              height: "100%",
              width: "100%",
            }}
          />

          <div className={style.inner}>
            <StaticImage
              src={"../../../assets/images/Rectangle 56.png"}
              alt={"Image 2"}
              style={{
                height: "100%",
                width: "100%",
                opacity: "70%",
              }}
            />

            <div className={style.inner}>
              <img src={contactImg3} className={style.question} />

              <div className={style.contact_content}>
                <div className={style.who}>Qui sommes-nous</div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.container__preface}>
          <h1>A PROPOS DE NOUS</h1>

          <p>
            Pourquoi est-il difficile pour nous qui sommes formés au Congo ou en
            Afrique de competir avec ceux formés ailleurs ? C’est la question
            qu’Aristote, lauréat aux Examens d’Etat 2010 en République
            Democratique du Congo s’est posée à son arrivée d’abord en Inde
            ensuite au Canada pour poursuivre ses études universitaires. C’est
            le constat que font plusieurs autres congolais et africains
            lorsqu’ils arrivent pour travailler au niveau international.
          </p>
          <p>
            Après des années d’études en Inde, Canada, États-Unis et Brésil,
            Aristote et ses associés ont réalisé que le problème n’était pas
            nécessairement ce qui était enseigné mais la manière dont
            l’enseignement est dispensé.
          </p>
          <p class="mt-5">
            Alors que dans les pays avancés, on apprend aux étudiants à exercer
            leur esprit critique et créatif, chez nous, on nous apprend plutôt à
            répéter, des fois sans comprendre, ce qui est enseigné.
          </p>
          <p class="mt-2">
            C’est dans cette optique qu'ils ont décidé de lancer l’Académie des
            élites qui est un espace privilégié d'apprentissage, de
            connectivité, d'innovation, de créativité et de partage des
            connaissances et de professionnalisme aux normes internationales.
            Elle s’est donnée pour missions de former les meilleurs
            informaticiens, développeurs et programmeurs du pays, afin de
            devenir des professionnels qualifiés dans leurs domaines respectifs
            et de ramener l’expertise internationale en RDC.
          </p>
        </div>

        <h1 class={style.valueTitle}>
          <b>Nos valeurs</b>
        </h1>
        <section className={style.about__container}>
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <div class="grid grid-cols-2 gap-14 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 min-sm:grid-cols-2 flex justify-between">
              <div
                class={
                  "bg-teal-700 flex flex-col rounded-lg shadow-xl md:max-w-xl md:flex-row " +
                  style.values
                }
              >
                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img1}
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-start p-6 w-2/3 max-xs:h-full">
                  <h5 class="mb-2 text-xl font-bold text-white text-center font-normal">
                    {OverlayTitles[0]}
                  </h5>
                  <p class="mb-4 text-base text-yellow-200 max-xs:hidden">
                    {OverlayCountry[0]}
                  </p>
                </div>
              </div>

              <div
                class={
                  "flex flex-col rounded-lg shadow-xl bg-teal-700 md:max-w-xl md:flex-row " +
                  style.values
                }
              >
                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img2}
                    alt=""
                  />
                </div>

                <div class="flex flex-col justify-start p-6 w-2/3">
                  <h5 class="mb-2 text-xl font-bold text-white text-center">
                    {OverlayTitles[1]}
                  </h5>
                  <p class="mb-4 text-base text-yellow-200 text-center">
                    {OverlayCountry[1]}
                  </p>
                </div>
              </div>

              <div
                class={
                  "flex flex-col rounded-lg shadow-xl bg-teal-700 md:max-w-xl md:flex-row " +
                  style.values
                }
              >
                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img3}
                    alt=""
                  />
                </div>

                <div class="flex flex-col justify-start p-6 w-2/3">
                  <h5 class="mb-2 text-xl font-bold text-white text-center">
                    {OverlayTitles[2]}
                  </h5>
                  <p class="mb-4 text-base text-yellow-200 text-center">
                    {OverlayCountry[2]}
                  </p>
                </div>
              </div>

              <div
                class={
                  "flex flex-col rounded-lg shadow-xl bg-teal-700 md:max-w-xl md:flex-row " +
                  style.values
                }
              >
                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img4}
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-start p-6 w-2/3">
                  <h5 class="mb-2 text-xl font-bold text-white text-center">
                    {OverlayTitles[3]}
                  </h5>
                  <p class="mb-4 text-base text-yellow-200 text-center">
                    {OverlayCountry[3]}
                  </p>
                </div>
              </div>

              <div
                class={
                  "flex flex-col rounded-lg shadow-xl bg-teal-700 md:max-w-xl md:flex-row " +
                  style.values
                }
              >
                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img5}
                    alt=""
                  />
                </div>

                <div class="flex flex-col justify-start p-6 w-2/3">
                  <h5 class="mb-2 text-xl font-bold text-white text-center">
                    {OverlayTitles[4]}
                  </h5>
                  <p class="mb-4 text-base text-neutral-300 text-center">
                    {OverlayCountry[4]}
                  </p>
                </div>
              </div>

              <div
                class={
                  "flex flex-col rounded-lg bg-white shadow-xl dark:bg-teal-700 md:max-w-xl md:flex-row " +
                  style.values
                }
              >
                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img6}
                    alt=""
                  />
                </div>
                <div class="flex flex-col justify-start p-6 w-2/3">
                  <h5 class="mb-2 text-xl font-bold text-neutral-800 dark:text-neutral-50">
                    {OverlayTitles[5]}
                  </h5>
                  <p class="mb-4 text-base text-neutral-300 text-center">
                    {OverlayCountry[5]}
                  </p>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </section>

        <h1 class={style.valueTitle} style={{ paddingBottom: "2.5rem" }}>
          <b>Notre équipe</b>
        </h1>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <section className={style.about__container}>
            <div
              class="grid grid-cols-3 gap-7 md:grid-cols-3 xs:grid-cols-1 flex justify-center"
              style={{ width: "90%", marginBottom: "50px" }}
            >
              <div
                class={
                  "relative block max-w-sm rounded-lg text-center " +
                  style.courseCard
                }
              >
                <div class="text-center mt-3">
                  <img
                    src={team1}
                    class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                    alt="Avatar"
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">
                    Aristoste Diasonama (Didia)
                  </h5>
                  <p class="text-neutral-500 dark:text-neutral-400">
                    <div class="flex space-x-4 mt-6 justify-center">
                      <a href="https://www.facebook.com/elitescd/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                          />
                        </svg>
                      </a>

                      <a href="https://www.instagram.com/invites/contact/?i=1m43wzwkzzm13&utm_content=qh7802h">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      <a href="https://twitter.com/AcademieElites?s=09">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                      </a>
                    </div>
                  </p>
                </div>
              </div>

              <div
                class={
                  "relative block max-w-sm rounded-lg text-center " +
                  style.courseCard
                }
              >
                <div class="text-center mt-3">
                  <img
                    src={team2}
                    class="mx-auto mb-4 w-40 h-40 rounded-full bg-gray-200"
                    alt="Avatar"
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">
                    Nadia Nkuba
                  </h5>
                  <p class="text-neutral-500 dark:text-neutral-400">
                    <div class="flex space-x-4 mt-6 justify-center">
                      <a href="https://www.facebook.com/elitescd/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                          />
                        </svg>
                      </a>

                      <a href="https://www.instagram.com/invites/contact/?i=1m43wzwkzzm13&utm_content=qh7802h">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      <a href="https://twitter.com/AcademieElites?s=09">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                      </a>
                    </div>
                  </p>
                </div>
              </div>

              <div
                class={
                  "relative block max-w-sm rounded-lg text-center " +
                  style.courseCard
                }
              >
                <div class="text-center mt-3">
                  <img
                    src={team3}
                    class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                    alt="Avatar"
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">
                    Josias Nteme
                  </h5>
                  <p class="text-neutral-500 dark:text-neutral-400">
                    <div class="flex space-x-4 mt-6 justify-center">
                      <a href="https://www.facebook.com/elitescd/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                          />
                        </svg>
                      </a>

                      <a href="https://www.instagram.com/invites/contact/?i=1m43wzwkzzm13&utm_content=qh7802h">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      <a href="https://twitter.com/AcademieElites?s=09">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                        >
                          <path
                            fill="currentColor"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimationOnScroll>
      </div>
    );
  };
  return <Page activeRoute={ROUTES.ABOUT}>{renderPage}</Page>;
};

export default About;
