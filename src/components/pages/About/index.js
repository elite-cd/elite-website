import React from "react";
import { ROUTES } from "../../../common/constants";
import Page from "../../PageTemplate";
import * as style from "./About.module.scss";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import contactImg from "../../../assets/images/aa.jpg"
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
import team2 from "../../../assets/images/322279599_1240337903547695_2004677918904243901_n.jpg"
import team3 from "../../../assets/images/team3.jpg"
import "animate.css"
import { AnimationOnScroll } from "react-animation-on-scroll"

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
    if (carouselNext === true) {
      const myCarousel = new te.Carousel(document.getElementById("carouselExampleIndicators"));
      myCarousel.next();
    }
  }, [carouselNext]);

  useEffect(() => {
    if (carouselPrev === true) {
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
                <div className={style.who}>
                  Qui sommes-nous</div>
              </div>

            </div>

          </div>
        </div>

        <div className={style.container__preface}>
          <h3
            class="mb-6 ml-3 text-4xl max-sm:text-2xl text-center font-bold text-neutral-700">
            Qui sommes-nous ?
          </h3>

          <ol class="border-l-2 border-teal-100">
            <li>
              <div class="flex-start md:flex ">
                <div
                  class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-teal-100 text-teal-700">
                 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"
                    class="h-6 w-6">
                    <path 
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z"/>
                  </svg>
                </div>
                <div
                  class="mb-10 ml-6 block w-3/3 rounded-lg bg-slate-100 p-6 shadow-md shadow-black/5">
                  <div class="mb-4 flex justify-between">
                    <a
                      href="#!"
                      class="text-xl text-teal-600 transition duration-150 ease-in-out hover:text-teal-600 focus:text-teal-600 active:text-teal-700"
                    >A propos</a
                    >
                  </div>
                  <p class="mb-6 text-neutral-700">
                    l'Académie des élites se veut être un espace privilégié d'apprentissage, de connectivité, d'innovation, de créativité et de partage des connaissances et de professionnalisme qui répond fidèlement aux  normes internationales.
                    Elle s’est donnée pour missions de former les meilleurs! la meilleure main d'œuvre, les plus compétents,  afin de devenir des professionnels qualifiés dans leurs domaines respectifs et de ramener l’expertise internationale en RDC

                    <p class="mt-5">
                      Nous ne souhaitons pas seulement apporter une formation en informatique comme le font nos prédécesseurs dans le domaine. La particularité de ELITE réside dans la méthodologie moderne, l’espace et les outils d’apprentissage soigneusement copiés des modèles des écoles internationales ou ont été formés nos différents mentors.
                    </p>
                    <p class="mt-5">
                      Nous recherchons des élites en devenir, des personnes brillantes, ouvertes d'esprit, passionnées par l'autonomisation personnelle et qui visent haut dans leurs carrières professionnelles.
                    </p>
                    <p class="mt-2">
                      Chacun de nos modules est composé des matériels didactique d'actualité , des logiciels à la pointe de la technologie.
                      À la fin de nos formations,  les apprenants n’auront rien à envier à ceux qui ont étudié en Europe ou en Amérique, ils seront suffisamment équipés et qualifiés en Informatique et/ou en programmation et seront en mesure de travailler dans les entreprises de Technologie de leur choix
                    </p>

                  </p>
                  <a
                    href="#team"
                    type="button"
                    class="inline-block rounded border-2 border-teal-600 px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-teal-600 transition duration-150 ease-in-out hover:border-teal-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init>
                    Notre équipe
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div class="flex-start md:flex ">
                <div
                  class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"
                    class="h-6 w-6">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z" />
                  </svg>

                </div>
                <div
                  class="mb-10 ml-6 block w-3/3 rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5">
                  <div class="mb-4 flex justify-between">
                    <a
                      href="#!"
                      class="text-xl text-teal-600 transition duration-150 ease-in-out hover:text-teal-600 focus:text-teal-600 active:text-teal-700"
                    >Mission</a
                    >
                  </div>
                  <p class="mb-6 text-neutral-700">
                  Nous nous sommes donnés pour mission de coacher, encadrer et encourager des génies congolais à libérer et exploiter leur esprit créatif afin de se démarquer dans la société.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="flex-start md:flex ">
                <div
                  class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"
                    class="h-6 w-6">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z" />
                  </svg>

                </div>
                <div
                  class="mb-10 ml-6 block w-3/3 rounded-lg bg-slate-100 p-6 shadow-md shadow-black/5">
                  <div class="mb-4 flex justify-between">
                    <a
                      href="#!"
                      class="text-xl text-teal-600 transition duration-150 ease-in-out hover:text-teal-600 focus:text-teal-600 active:text-teal-700"
                    >Vision</a
                    >
                  </div>
                  <p class="mb-6 text-neutral-700">
                  
                  Nous nous attendons à ce que : 
                  
                    Les élèves qui passeront chez nous puissent briller dans leur cursus scolaire de façon à être des candidats plus que qualifiés pour des études supérieures à l’étranger ou encore des bourses d'études
;
                    les demandeurs d’emplois aient des aptitudes et compétences qui feront d’eux plus des personnes qu'efficaces, meilleures et très compétitives
;
                    les libéraux et entrepreneurs soient suffisamment équipés et informés en ayant la connaissance et développant des compétences nécessaires afin de réussir dans leurs entreprises.

                  </p>
                </div>
              </div>
            </li>

          </ol>
        </div>

        <h1 class={style.valueTitle + " text-neutral-700"} ><b>Nos valeurs</b></h1>

        <section className={style.about__container}>

          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="animate__fadeInUp">
            <div class="grid grid-cols-2 gap-14 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 min-sm:grid-cols-2 flex justify-between"
            >
              <div
                class={"bg-teal-700 flex flex-col rounded-lg shadow-xl md:max-w-xl md:flex-row " + style.values}
              >

                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img1}
                    alt="" />
                </div>
                <div class="flex flex-col justify-start p-6 w-2/3 max-xs:h-full">
                  <h5
                    class="mb-2 text-xl font-bold text-white text-center font-normal">
                    {OverlayTitles[0]}
                  </h5>
                  <p class="mb-4 text-base text-yellow-200 max-xs:hidden">
                    {OverlayCountry[0]}
                  </p>
                </div>
              </div>

              <div
                class={"flex flex-col rounded-lg shadow-xl bg-teal-700 md:max-w-xl md:flex-row " + style.values}
              >

                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img2}
                    alt="" />
                </div>

                <div class="flex flex-col justify-start p-6 w-2/3">
                  <h5
                    class="mb-2 text-xl font-bold text-white text-center">
                    {OverlayTitles[1]}
                  </h5>
                  <p class="mb-4 text-base text-yellow-200 text-center">
                    {OverlayCountry[1]}
                  </p>
                </div>
              </div>

              <div
                class={"flex flex-col rounded-lg shadow-xl bg-teal-700 md:max-w-xl md:flex-row " + style.values}
              >

                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img3}
                    alt="" />
                </div>

                <div class="flex flex-col justify-start p-6 w-2/3">
                  <h5
                    class="mb-2 text-xl font-bold text-white text-center">
                    {OverlayTitles[2]}
                  </h5>
                  <p class="mb-4 text-base text-yellow-200 text-center">
                    {OverlayCountry[2]}
                  </p>
                </div>
              </div>

              <div
                class={"flex flex-col rounded-lg shadow-xl bg-teal-700 md:max-w-xl md:flex-row " + style.values}
              >

                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img4}
                    alt="" />
                </div>
                <div class="flex flex-col justify-start p-6 w-2/3">
                  <h5
                    class="mb-2 text-xl font-bold text-white text-center">
                    {OverlayTitles[3]}
                  </h5>
                  <p class="mb-4 text-base text-yellow-200 text-center">
                    {OverlayCountry[3]}
                  </p>
                </div>
              </div>

              <div
                class={"flex flex-col rounded-lg shadow-xl bg-teal-700 md:max-w-xl md:flex-row " + style.values}
              >

                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img5}
                    alt="" />
                </div>

                <div class="flex flex-col justify-start p-6 w-2/3">
                  <h5
                    class="mb-2 text-xl font-bold text-white text-center">
                    {OverlayTitles[4]}
                  </h5>
                  <p class="mb-4 text-base text-neutral-300 text-center">
                    {OverlayCountry[4]}
                  </p>
                </div>
              </div>

              <div
                class={"flex flex-col rounded-lg bg-white shadow-xl dark:bg-teal-700 md:max-w-xl md:flex-row " + style.values}
              >

                <div class="md:h-auto w-1/3 md:rounded-none md:rounded-l-lg bg-white">
                  <img
                    class="object-contain h-3/4 w-3/4 mx-1 my-3"
                    src={img6}
                    alt="" />
                </div>
                <div class="flex flex-col justify-start p-6 w-2/3">
                  <h5
                    class="mb-2 text-xl font-bold text-neutral-800 dark:text-neutral-50">
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

        <h1 class={style.valueTitle + " text-neutral-700"} id="team"><b>Notre équipe</b></h1>
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <section className={style.about__container}>
            <div class="grid grid-cols-3 gap-7 md:grid-cols-3 xs:grid-cols-1 flex justify-center" style={{ width: "90%", marginBottom: "50px" }}>

              <div
                class={"relative block max-w-sm rounded-lg text-center " + style.courseCard}>
                <div class="text-center mt-3">
                  <img
                    src={team1}
                    class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                    alt="Avatar"
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">Aristoste Diasonama (Didia)</h5>
                  <p class="text-neutral-500 dark:text-neutral-400">

                    <div class="flex space-x-4 mt-6 justify-center">
                      <a href="https://www.facebook.com/elitescd/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 bg-teal-800 rounded-lg text-white">
                          <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                      </a>

                      <a href="https://www.instagram.com/invites/contact/?i=1m43wzwkzzm13&utm_content=qh7802h">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      <a href="https://twitter.com/AcademieElites?s=09">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 bg-teal-800 rounded-lg text-white">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
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
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">Nadia Nkuba</h5>
                  <p class="text-neutral-500 dark:text-neutral-400">

                    <div class="flex space-x-4 mt-6 justify-center">
                      <a href="https://www.facebook.com/elitescd/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 bg-teal-800 rounded-lg text-white">
                          <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                      </a>

                      <a href="https://www.instagram.com/invites/contact/?i=1m43wzwkzzm13&utm_content=qh7802h">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      <a href="https://twitter.com/AcademieElites?s=09">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 bg-teal-800 rounded-lg text-white">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                        </svg>
                      </a>
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
                      <a href="https://www.facebook.com/elitescd/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 bg-teal-800 rounded-lg text-white">
                          <path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                      </a>

                      <a href="https://www.instagram.com/invites/contact/?i=1m43wzwkzzm13&utm_content=qh7802h">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      <a href="https://twitter.com/AcademieElites?s=09">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-8 bg-teal-800 rounded-lg text-white">
                          <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
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
