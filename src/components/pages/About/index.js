import React from "react";
import { ROUTES } from "../../../common/constants";
import Page from "../../PageTemplate";
import * as style from "./About.module.scss";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import contactImg from "../../../assets/images/pexels-fauxels-31843981-black.png"
import contactImg2 from "../../../assets/images/Rectangle 56.png"
import contactImg3 from "../../../assets/images/question_mark.png"
import { useState, useEffect } from "react";
import * as te from "tw-elements";

import contactIcon1 from "../../../assets/images/Marker_100px.png"
import contactIcon2 from "../../../assets/images/WhatsApp_100px.png"
import contactIcon3 from "../../../assets/images/Message Filled_100px.png"

import img1 from "../../../assets/images/to-learn-gb120f4a96_1920.jpg"
import img2 from "../../../assets/images/education-g0a1924b6c_1920.png"
import img3 from "../../../assets/images/coding-g486fa6d97_1280.png"
import img4 from "../../../assets/images/graduate-g37719b1cc_1280.png"
import img5 from "../../../assets/images/man-g5ae25b970_1920.jpg"
import img6 from "../../../assets/images/education-gef2a32113_1280.png"

import team1 from "../../../assets/images/1605394670888.jpg"
import team2 from "../../../assets/images/team2.jpeg"
import team3 from "../../../assets/images/team3.jpg"

import {
  faEnvelope,
  faLocationPin,
  faPhone,
  faFacebook
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const data = useStaticQuery(graphql
    `
  query MyQuery {
    allFile(filter: {relativePath: {eq: "acad01.png"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
        id
      }
    }
  }
`)
  const aboutImg = data.allFile.nodes[0].childImageSharp;

  const OverlayTitles = [
    "Mentors de niveau international",
    "Coach Qualifiés et pratiquants",
    "Lab Creative",
    "Methode Harkness",
    "Environnement Professionnel et Sérieux",
    "Certificat"
  ];

  const OverlayContents = [
    "Les programmes offerts sont soigneusement préparés par des mentors congolais qui ont bénéficié d’une éducation internationale au Canada et aux USA. et évoluent dans des entreprises de renom dans le domaine de la technologie telles que Microsoft (USA) et Rhetorik (Canada).",
    "Contrairement à l'enseignement traditionnel, nous disposons de coachs au détriment des enseignements. Ce modèle permet aux apprenants de développer une indépendance afin d'être orienté dans leur apprentissage. Ces coaches sont des professionnels de formation et de pratique dans le domaine de l’informatique.",
    "Notre salle d’apprentissage est un véritable laboratoire de créativité,innovation, collaboration,productivité en groupe dans le but de favoriser l’autonomie et l’intelligence collective.",
    "Notre pédagogie se base sur l'échange des connaissances. Un système apprentissage autonome qui consiste à engager une discussion dans laquelle les apprenants participent et construisent le cours ensemble avec le coach (professeur) qui oriente les sujets.",
    "Nos programmes sont dispensés dans un local où se situe une entreprise de renom dans la technologie qui dispose des clients internationaux. Cet emplacement permet aux apprenants de s’adapter au milieu professionnel et aussi d'avoir des connaissances en plus de ce qu’ils apprendront.",
    "A la fin de votre formation, vous aurez un certificat reconnu oú que vous alliez qui atteste vos compétences et connaissances.",
  ];

  const OverlayCountry = [
    "",
    "",
    "Canada",
    "USA",
    "",
    ""
  ]

  const [carouselNext, swipeCarouselNext] = useState(false);
  const [carouselPrev, swipeCarouselPrev] = useState(false);

  useEffect(() => {
    if(carouselNext === true) {
      const myCarousel = new te.Carousel(document.getElementById("carouselExampleIndicators"));
      myCarousel.next();
    }          
}, [carouselNext]);

useEffect(() => { 
  if(carouselPrev === true) {
    const myCarousel = new te.Carousel(document.getElementById("carouselExampleIndicators"));
    myCarousel.prev();
  }         
}, [carouselPrev]);

  const swipeNextCarousel = () => {
    swipeCarouselNext(true)
  }

  const swipePrevCarousel = () => {
    swipeCarouselPrev(true)
  }

  const renderPage = () => {
    return (
      <div className={style.container}>

        <div className={style.parent}>
          <img src={contactImg} />
          <div className={style.inner}>
            <img src={contactImg2} />

            <div className={style.inner}>
              <img src={contactImg3} className={style.question} />

              <div className={style.contact_content}>
                <div className={ style.who }>
                  Qui sommes-nous</div>
              </div>

            </div>

          </div>
        </div>

        <div className={style.container__preface}>
          <h1>A PROPOS DE NOUS</h1>

          <p>
            Pourquoi est-il difficile pour nous qui sommes formés au Congo ou en
            Afrique de competir avec ceux formés ailleurs ?
          
            C’est la question qu’Aristote, lauréat aux Examens d’Etat 2010 en
            République Democratique du Congo s’est posée à son arrivée d’abord
            en Inde ensuite au Canada pour poursuivre ses études universitaires.
            C’est le constat que font plusieurs autres congolais et africains
            lorsqu’ils arrivent pour travailler au niveau international.
          </p>
          <p>
            Après des années d’études en Inde, Canada, États-Unis et Brésil,
            Aristote et ses associés ont réalisé que le problème n’était pas
            nécessairement ce qui était enseigné mais la manière dont
            l’enseignement est dispensé.
          </p>
          <p>
            Alors que dans les pays avancés, on apprend aux étudiants à exercer
            leur esprit critique et créatif, chez nous, on nous apprend plutôt à
            répéter, des fois sans comprendre, ce qui est enseigné.
          </p>
          <p>
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

        <h1 class={ style.valueTitle }><b>Nos valeurs</b></h1>

        <section className={style.about__container + " " + style.about__values}>
          <div class="grid grid-cols-2 gap-3 md:grid-cols-5 xs:grid-cols-1 sm:grid-cols-2 flex justify-between" style={{ width: "100%", }}>
            <div class="text-center">
              <img
                src={img1}
                class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                alt="Avatar"
              />
              <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[0]}</h5>
              <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[0]}</p>
            </div>

            <div class="text-center">
              <img
                src={img2}
                class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                alt="Avatar"
              />
              <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[1]}</h5>
              <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[1]}</p>
            </div>

            <div class="text-center">
              <img
                src={img3}
                class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                alt="Avatar"
              />
              <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[2]}</h5>
              <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[2]}</p>
            </div>

            <div class="text-center">
              <img
                src={img4}
                class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                alt="Avatar"
              />
              <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[3]}</h5>
              <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[3]}</p>
            </div>

            <div class="text-center">
              <img
                src={img5}
                class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                alt="Avatar"
              />
              <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[4]}</h5>
              <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[4]}</p>
            </div>

          </div>
        </section>

        <section class={ style.mobile_courseCard }>
          <div
            id="carouselExampleIndicators"
            class="relative"
            data-te-carousel-init
            data-te-carousel-slide
            data-te-interval="2000"
            data-te-pause="hover"
            data-te-touch="true"
            data-te-wrap="true"
            >

            <div
              class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

              <div class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                data-te-carousel-active>

                <div class="text-center">
                  <img
                    src={img1}
                    class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                    alt="Avatar"
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[0]}</h5>
                  <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[0]}</p>
                </div>

              </div>

              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <div class={style.rubrique}>

                  <div class="text-center">
                    <img
                      src={img1}
                      class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                      alt="Avatar"
                    />
                    <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[1]}</h5>
                    <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[1]}</p>
                  </div>
                </div>

              </div>

              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <div class={style.rubrique}>
                  <div class="text-center">
                    <img
                      src={img2}
                      class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                      alt="Avatar"
                    />
                    <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[2]}</h5>
                    <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[2]}</p>
                  </div>
                </div>

              </div>

              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <div class={style.rubrique}>
                  <div class="text-center">
                    <img
                      src={img3}
                      class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                      alt="Avatar"
                    />
                    <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[3]}</h5>
                    <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[3]}</p>
                  </div>
                </div>

              </div>

              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <div class={style.rubrique}>
                  <div class="text-center">
                    <img
                      src={img4}
                      class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                      alt="Avatar"
                    />
                    <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[4]}</h5>
                    <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[4]}</p>
                  </div>
                </div>

              </div>

              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <div class={style.rubrique}>
                  <div class="text-center">
                    <img
                      src={img5}
                      class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                      alt="Avatar"
                    />
                    <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">{OverlayTitles[5]}</h5>
                    <p class="text-neutral-500 dark:text-neutral-400">{OverlayCountry[5]}</p>
                  </div>
                </div>

              </div>

            </div>
            <button
              class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black focus:text-black motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide="prev"
              onClick={(e) => swipePrevCarousel}>
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
              >Previous</span
              >
            </button>
            <button
              class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide="next"
              onClick={(e) => swipeNextCarousel}>
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
              >Next</span>
            </button>
          </div>
        </section>

        <h1 class={ style.valueTitle } style={{ paddingBottom: "2.5rem" }}><b>Notre équipe</b></h1>

        <section className={style.about__container}>
          <div class="grid grid-cols-3 gap-7 md:grid-cols-3 xs:grid-cols-1 flex justify-between" style={{ width: "90%", marginBottom: "50px" }}>


            <div
              class={"relative block max-w-sm rounded-lg text-center " + style.courseCard}>
              <div class="text-center mt-3">
                <img
                  src={team1}
                  class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                  alt="Avatar"
                />
                <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">Didia Aristoste Diasonama</h5>
                <p class="text-neutral-500 dark:text-neutral-400">

                  <div class="flex space-x-4 mt-6 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 text-teal-800">
                      <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8 text-teal-800">
                      <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 text-teal-800">
                      <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </div>

                </p>
              </div>
            </div>

            <div
              class={"relative block max-w-sm rounded-lg text-center " + style.courseCard}>
              <div class="text-center mt-3">
                <img
                  src={team3}
                  class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                  alt="Avatar"
                />
                <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">Josias Nteme</h5>
                <p class="text-neutral-500 dark:text-neutral-400">

                  <div class="flex space-x-4 mt-6 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 text-teal-800">
                      <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8 text-teal-800">
                      <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 text-teal-800">
                      <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </div>

                </p>
              </div>
            </div>

            <div
              class={"relative block max-w-sm rounded-lg text-center " + style.courseCard}>
              <div class="text-center mt-3">
                <img
                  src={team2}
                  class="mx-auto mb-4 w-40 h-40 rounded-full bg-gray-200"
                  alt="Avatar"
                />
                <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">Christian MUTOMBO</h5>
                <p class="text-neutral-500 dark:text-neutral-400">

                  <div class="flex space-x-4 mt-6 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 text-teal-800">
                      <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8 text-teal-800">
                      <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 text-teal-800">
                      <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </div>

                </p>
              </div>
            </div>

          </div>
        </section>

      </div>
    );
  };
  return <Page activeRoute={ROUTES.ABOUT}>{renderPage}</Page>;
};

export default About;
