import React from "react";
import { ROUTES } from "../../../common/constants";
import Page from "../../PageTemplate";
import * as style from "./About.module.scss";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import contactImg3 from "../../../assets/images/question_mark.png";
import { useState, useEffect } from "react";

import contactImg from "../../../assets/images/DSC_0724_black.jpg";
import team1 from "../../../assets/images/1605394670888.jpg";
import team2 from "../../../assets/images/322279599_1240337903547695_2004677918904243901_n.jpg";
import team3 from "../../../assets/images/team3.jpg";
import team4 from "../../../assets/images/DSC_0732_copie.jpg";
import team5 from "../../../assets/images/1594383944373.jpg";
import team6 from "../../../assets/images/DSC_0687_copie.jpg";
import team7 from "../../../assets/images/nadia.jpeg";
import didia from "../../../assets/images/didia.jpeg";

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
          <img src={contactImg} />

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
          <h3 class="mb-28 ml-3 text-4xl max-sm:text-2xl text-center font-bold text-neutral-700">
            Qui sommes-nous ?
          </h3>

          <ol class="border-l-2 border-teal-100 max-sm:-mt-20">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOnce="animate__fadeInUp"
            >
              <li>
                <div class="flex-start md:flex ">
                  <div class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z"
                      />
                    </svg>
                  </div>
                  <div class="mb-10 ml-6 block w-3/3 rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5">
                    <div class="mb-4 flex justify-between">
                      <a
                        href="#!"
                        class="text-xl text-teal-600 transition duration-150 ease-in-out hover:text-teal-600 focus:text-teal-600 active:text-teal-700"
                      >
                        La Question d'Aristote
                      </a>
                    </div>

                    <div class="grid grid-cols-5 gap-6 max-sm:hidden">
                      <div class="col-span-3">
                        <p class="text-neutral-700">
                          <p class="text-teal-900">
                            "Pourquoi est-il difficile pour nous qui sommes
                            formés au Congo ou en Afrique de competir avec ceux
                            formés ailleurs ?"
                          </p>
                          <p class="py-4">
                            C’est la question qu’Aristote, lauréat aux Examens
                            d’Etat 2010 en République Democratique du Congo
                            s’est posée à son arrivée d’abord en Inde ensuite au
                            Canada pour poursuivre ses études universitaires.
                            C’est le constat que font plusieurs autres congolais
                            et africains lorsqu’ils arrivent pour travailler au
                            niveau international.
                          </p>
                          <p class="py-4">
                            Après des années d’études en Inde, Canada,
                            États-Unis et Brésil, Aristote et ses associés ont
                            réalisé que le problème n’était pas nécessairement
                            ce qui était enseigné mais la manière dont
                            l’enseignement est dispensé.
                          </p>
                          <p>
                            Alors que dans les pays avancés, on apprend aux
                            étudiants à exercer leur esprit critique et créatif,
                            chez nous, on nous apprend plutôt à répéter, des
                            fois sans comprendre, ce qui est enseigné.
                          </p>
                          <p class="py-4">
                            C’est dans cette optique qu'ils ont décidé de lancer
                            l’Académie des élites qui est un espace privilégié
                            d'apprentissage, de connectivité, d'innovation, de
                            créativité et de partage des connaissances et de
                            professionnalisme aux normes internationales. Elle
                            s’est donnée pour missions de former les meilleurs
                            informaticiens, développeurs et programmeurs du
                            pays, afin de devenir des professionnels qualifiés
                            dans leurs domaines respectifs et de ramener
                            l’expertise internationale en RDC.
                          </p>
                        </p>
                      </div>

                      <div class="col-span-2">
                        <img
                          src={didia}
                          class="w-full h-full rounded-lg bg-gray-200"
                          alt="Avatar"
                        />
                      </div>
                    </div>

                    <div class="grid grid-rows-1 hidden max-sm:block">
                      <div class="mb-4">
                        <img
                          src={didia}
                          class="w-full h-[300px] rounded-lg bg-gray-200"
                          alt="Avatar"
                        />
                      </div>

                      <div>
                        <p class="text-neutral-700">
                          <p class="text-teal-900">
                            "Pourquoi est-il difficile pour nous qui sommes
                            formés au Congo ou en Afrique de competir avec ceux
                            formés ailleurs ?"
                          </p>
                          <p class="py-4">
                            C’est la question qu’Aristote, lauréat aux Examens
                            d’Etat 2010 en République Democratique du Congo
                            s’est posée à son arrivée d’abord en Inde ensuite au
                            Canada pour poursuivre ses études universitaires.
                            C’est le constat que font plusieurs autres congolais
                            et africains lorsqu’ils arrivent pour travailler au
                            niveau international.
                          </p>
                          <p class="py-4">
                            Après des années d’études en Inde, Canada,
                            États-Unis et Brésil, Aristote et ses associés ont
                            réalisé que le problème n’était pas nécessairement
                            ce qui était enseigné mais la manière dont
                            l’enseignement est dispensé.
                          </p>
                          <p>
                            Alors que dans les pays avancés, on apprend aux
                            étudiants à exercer leur esprit critique et créatif,
                            chez nous, on nous apprend plutôt à répéter, des
                            fois sans comprendre, ce qui est enseigné.
                          </p>
                          <p class="py-4">
                            C’est dans cette optique qu'ils ont décidé de lancer
                            l’Académie des élites qui est un espace privilégié
                            d'apprentissage, de connectivité, d'innovation, de
                            créativité et de partage des connaissances et de
                            professionnalisme aux normes internationales. Elle
                            s’est donnée pour missions de former les meilleurs
                            informaticiens, développeurs et programmeurs du
                            pays, afin de devenir des professionnels qualifiés
                            dans leurs domaines respectifs et de ramener
                            l’expertise internationale en RDC.
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOnce="animate__fadeInUp"
            >
              <li>
                <div class="flex-start md:flex ">
                  <div class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z"
                      />
                    </svg>
                  </div>
                  <div class="mb-10 ml-6 block w-3/3 rounded-lg bg-slate-100 p-6 shadow-md shadow-black/5">
                    <div class="mb-4 flex justify-between">
                      <a
                        href="#!"
                        class="text-xl text-teal-600 transition duration-150 ease-in-out hover:text-teal-600 focus:text-teal-600 active:text-teal-700"
                      >
                        A propos
                      </a>
                    </div>
                    <p class="mb-6 text-neutral-700">
                      l'Académie des élites se veut être un espace privilégié
                      d'apprentissage, de connectivité, d'innovation, de
                      créativité et de partage des connaissances et de
                      professionnalisme qui répond fidèlement aux normes
                      internationales. Elle s’est donnée pour missions de former
                      les meilleurs! la meilleure main d'œuvre, les plus
                      compétents, afin de devenir des professionnels qualifiés
                      dans leurs domaines respectifs et de ramener l’expertise
                      internationale en RDC
                      <p class="mt-5">
                        Nous ne souhaitons pas seulement apporter une formation
                        en informatique comme le font nos prédécesseurs dans le
                        domaine. La particularité de ELITE réside dans la
                        méthodologie moderne, l’espace et les outils
                        d’apprentissage soigneusement copiés des modèles des
                        écoles internationales ou ont été formés nos différents
                        mentors.
                      </p>
                      <p class="mt-5">
                        Nous recherchons des élites en devenir, des personnes
                        brillantes, ouvertes d'esprit, passionnées par
                        l'autonomisation personnelle et qui visent haut dans
                        leurs carrières professionnelles.
                      </p>
                      <p class="mt-2">
                        Chacun de nos modules est composé des matériels
                        didactique d'actualité , des logiciels à la pointe de la
                        technologie. À la fin de nos formations, les apprenants
                        n’auront rien à envier à ceux qui ont étudié en Europe
                        ou en Amérique, ils seront suffisamment équipés et
                        qualifiés en Informatique et/ou en programmation et
                        seront en mesure de travailler dans les entreprises de
                        Technologie de leur choix
                      </p>
                    </p>
                    <a
                      href="#team"
                      type="button"
                      class="inline-block rounded border-2 border-teal-600 px-4 pb-[3px] pt-[4px] text-xs font-medium uppercase leading-normal text-teal-600 transition duration-150 ease-in-out hover:border-teal-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                    >
                      Notre équipe
                    </a>
                  </div>
                </div>
              </li>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              animateOnce="animate__fadeInUp"
            >
              <li>
                <div class="flex-start md:flex">
                  <div class="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M407.6 64h-367C18.5 64 0 82.5 0 104.6v135.2C0 364.5 99.7 464 224.2 464c124 0 223.8-99.5 223.8-224.2V104.6c0-22.4-17.7-40.6-40.4-40.6zm-162 268.5c-12.4 11.8-31.4 11.1-42.4 0C89.5 223.6 88.3 227.4 88.3 209.3c0-16.9 13.8-30.7 30.7-30.7 17 0 16.1 3.8 105.2 89.3 90.6-86.9 88.6-89.3 105.5-89.3 16.9 0 30.7 13.8 30.7 30.7 0 17.8-2.9 15.7-114.8 123.2z"
                      />
                    </svg>
                  </div>
                  <div class="mb-10 ml-6 block w-3/3 rounded-lg bg-neutral-50 p-4 shadow-md shadow-black/5 xl:w-full">
                    <div class="mb-4 flex justify-between pl-1 pt-6">
                      <a
                        href="#!"
                        class="text-xl text-teal-600 transition duration-150 ease-in-out hover:text-teal-600 focus:text-teal-600 active:text-teal-700"
                      >
                        En savoir plus
                      </a>
                    </div>

                    <div id="accordionExample">
                      <div class="bg-white">
                        <h2 class="mb-0" id="headingOne">
                          <button
                            class="group relative flex w-full items-center rounded-none border-0 bg-neutral-50 px-1 py-4 text-left text-xl font-bold text-teal-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-neutral-50 [&:not([data-te-collapse-collapsed])]:text-teal-800 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                            type="button"
                            data-te-collapse-init
                            data-te-collapse-collapsed
                            data-te-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Mission
                            <span class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
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
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="!visible"
                          data-te-collapse-item
                          data-te-collapse-show
                          aria-labelledby="headingOne"
                          data-te-parent="#accordionExample"
                        >
                          <div class={"px-5 py-4 text-lg " + style.pacte}>
                            Nous nous sommes donnés pour mission de coacher,
                            encadrer et encourager des génies congolais à
                            libérer et exploiter leur esprit créatif afin de se
                            démarquer dans la société.
                          </div>
                        </div>
                      </div>

                      <div class="bg-white">
                        <h2 class="mb-0" id="headingTwo">
                          <button
                            class="group relative flex w-full items-center rounded-none border-0 bg-neutral-50 px-1 py-4 text-left text-xl font-bold text-neutral-700 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-neutral-50 [&:not([data-te-collapse-collapsed])]:text-teal-800 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                            type="button"
                            data-te-collapse-init
                            data-te-collapse-collapsed
                            data-te-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Vision
                            <span class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
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
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="!visible hidden"
                          data-te-collapse-item
                          aria-labelledby="headingTwo"
                          data-te-parent="#accordionExample"
                        >
                          <div class={"px-5 py-4 text-lg " + style.pacte}>
                            Nous nous attendons à ce que :
                            <ol class="mt-3">
                              <li class="mb-3">
                                ➔ Les élèves qui passeront chez nous puissent
                                briller dans leur cursus scolaire de façon à
                                être des candidats plus que qualifiés pour des
                                études supérieures à l’étranger ou encore des
                                bourses d'études.
                              </li>

                              <li class="mb-3">
                                ➔ Les demandeurs d’emplois aient des aptitudes
                                et compétences qui feront d’eux plus des
                                personnes qu'efficaces, meilleures et très
                                compétitives.
                              </li>

                              <li class="mb-3">
                                ➔ Les libéraux et entrepreneurs soient
                                suffisamment équipés et informés en ayant la
                                connaissance et développant des compétences
                                nécessaires afin de réussir dans leurs
                                entreprises.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>

                      <div class="bg-white">
                        <h2 class="mb-0" id="headingThree">
                          <button
                            class="group relative flex w-full items-center rounded-none border-0 bg-neutral-50 px-1 py-4 text-left text-xl font-bold text-neutral-700 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-neutral-50 [&:not([data-te-collapse-collapsed])]:text-teal-800 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                            type="button"
                            data-te-collapse-init
                            data-te-collapse-collapsed
                            data-te-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Développes ton P.A.C.T.E
                            <span class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
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
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="!visible hidden"
                          data-te-collapse-item
                          aria-labelledby="headingThree"
                          data-te-parent="#accordionExample"
                        >
                          <div class={"px-5 py-4 text-lg " + style.pacte}>
                            Chez Elite, nous ne formons pas pour former, plus
                            qu'un centre de formation, l'académie des élites est
                            une école des génies! Nous nous sommes donné la
                            mission de créer une classe des élites, des génies.
                            Tous les génies ont en eux la capacité à résoudre
                            des problèmes qui semblent difficiles aux autres et
                            proposer des solutions peu communes. Nous avons
                            resumer cela en P.A.C.T.E
                            <p class="my-6">
                              Chez ElITE, un apprentissage est jugé réussi
                              lorsque les apprenants arrivent à développer
                              intérieurement, extérieurement et de manière
                              efficace le P.A.C.T.E cad la Proactivité,
                              l'Autonomie, la Créativité, le sens du Travail et
                              l'Excellence. Voilà sur quoi repose nos formations
                              et nous nous attendons à ce que toute personne qui
                              passera par l'académie des élites ait ses qualités
                              dans son ADN à la fin de sa formation et qu'elle
                              soit la meilleure dans tout ce qu'elle
                              entreprendra
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="bg-white">
                        <h2 class="mb-0" id="headingFour">
                          <button
                            class="group relative flex w-full items-center rounded-none border-0 bg-neutral-50 px-1 py-4 text-left text-xl font-bold text-neutral-700 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-neutral-50 [&:not([data-te-collapse-collapsed])]:text-teal-800 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                            type="button"
                            data-te-collapse-init
                            data-te-collapse-collapsed
                            data-te-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Mot de la Gérante
                            <span class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
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
                                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </span>
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          class="!visible hidden"
                          data-te-collapse-item
                          aria-labelledby="headingFour"
                          data-te-parent="#accordionExample"
                        >
                          <div class={"px-5 py-4 text-lg " + style.pacte}>
                            <div class="grid grid-cols-6 gap-6 max-sm:hidden">
                              <div class="col-span-4">
                                <p class="text-neutral-700">
                                  Chez Elite, nous ne formons pas pour former,
                                  plus qu'un centre de formation, l'académie des
                                  élites est une école des génies! Nous nous
                                  sommes donné la mission de créer une classe
                                  des élites, des génies. Tous les génies ont en
                                  eux la capacité à résoudre des problèmes qui
                                  semblent difficiles aux autres et proposer des
                                  solutions peu communes. Nous avons resumer
                                  cela en P.A.C.T.E
                                  <p class="my-6">
                                    Nous avons tous un génie qui sommeille en
                                    nous quelque part. On ne sait le réperer ou
                                    le ressortir que lorsqu'on est face à un
                                    environnement propice qui pousse à le faire.
                                    Voilà ce qu’est l'académie des élites. Un
                                    espace qui vous permet de vous exprimer en
                                    toute liberté. Nous croyons en vos
                                    capacités, en vos rêves et en ce qui n’est
                                    que pure folie pour vous ! Laissez-nous
                                    faire de vous ce que vous ne soupçonnez pas
                                    être !
                                  </p>
                                </p>
                              </div>

                              <div class="col-span-2">
                                <img
                                  src={team7}
                                  class="w-full h-[300px] rounded-lg bg-gray-200"
                                  alt="Avatar"
                                />
                              </div>
                            </div>

                            <div class="grid grid-rows-1 hidden max-sm:block">
                              <div class="mb-4">
                                <img
                                  src={team7}
                                  class="w-full h-[300px] rounded-lg bg-gray-200"
                                  alt="Avatar"
                                />
                              </div>

                              <div>
                                <p class="text-neutral-700">
                                  Chez Elite, nous ne formons pas pour former,
                                  plus qu'un centre de formation, l'académie des
                                  élites est une école des génies! Nous nous
                                  sommes donné la mission de créer une classe
                                  des élites, des génies. Tous les génies ont en
                                  eux la capacité à résoudre des problèmes qui
                                  semblent difficiles aux autres et proposer des
                                  solutions peu communes. Nous avons resumer
                                  cela en P.A.C.T.E
                                  <p class="my-6">
                                    Nous avons tous un génie qui sommeille en
                                    nous quelque part. On ne sait le réperer ou
                                    le ressortir que lorsqu'on est face à un
                                    environnement propice qui pousse à le faire.
                                    Voilà ce qu’est l'académie des élites. Un
                                    espace qui vous permet de vous exprimer en
                                    toute liberté. Nous croyons en vos
                                    capacités, en vos rêves et en ce qui n’est
                                    que pure folie pour vous ! Laissez-nous
                                    faire de vous ce que vous ne soupçonnez pas
                                    être !
                                  </p>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p class="mb-6 text-neutral-700"></p>
                  </div>
                </div>
              </li>
            </AnimationOnScroll>
          </ol>
        </div>

        <h1 class={style.valueTitle + " text-neutral-700"} id="team">
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
                <div class="text-center mt-2">
                  <img
                    src={team1}
                    class="mx-auto mb-3 w-40 rounded-full bg-gray-200"
                    alt="Avatar"
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">
                    Aristoste Diasonama
                  </h5>
                  <p class="text-lg text-neutral-700">Mentor</p>
                  <p class="text-neutral-500 dark:text-neutral-400">
                    <div class="flex space-x-4 mt-4 justify-center">
                      <a href="https://www.linkedin.com/in/diasonama">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="h-8 w-8 text-teal-800"
                        >
                          <path
                            fill="currentColor"
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          />
                        </svg>
                      </a>

                      <a href="https://instagram.com/didia_aristote?igshid=YmMyMTA2M2Y=">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                <div class="text-center mt-2">
                  <img
                    src={team2}
                    class="mx-auto mb-4 w-40 h-40 rounded-full bg-gray-200"
                    alt="Avatar"
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">
                    Nadia Nkuba
                  </h5>
                  <p class="text-lg text-neutral-700">Gérante</p>
                  <p class="text-neutral-500 dark:text-neutral-400">
                    <div class="flex space-x-4 mt-4 justify-center">
                      <a href="https://www.linkedin.com/in/nadiankuba">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="h-8 w-8 text-teal-800"
                        >
                          <path
                            fill="currentColor"
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          />
                        </svg>
                      </a>

                      <a href="https://instagram.com/nady_nk?igshid=YmMyMTA2M2Y=">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                <div class="text-center mt-2">
                  <img
                    src={team3}
                    class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                    alt="Avatar"
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">
                    Josias Nteme
                  </h5>
                  <p class="text-lg text-neutral-700">
                    Directeur des opérations
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-400">
                    <div class="flex space-x-4 mt-4 justify-center">
                      <a href="https://www.linkedin.com/in/josias-nteme-95757721a">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="h-8 w-8 text-teal-800"
                        >
                          <path
                            fill="currentColor"
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          />
                        </svg>
                      </a>

                      <a href="https://instagram.com/josiasnteme?igshid=YmMyMTA2M2Y=">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                <div class="text-center mt-2">
                  <img
                    src={team4}
                    class="mx-auto mb-4 w-40 h-40 rounded-full bg-gray-200"
                    alt="Avatar"
                    style={{ objectFit: "fill" }}
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">
                    Christian Kayembe
                  </h5>
                  <p class="text-lg text-neutral-700">
                    Directeur de la technologie
                  </p>
                  <p class="text-neutral-500 dark:text-neutral-400">
                    <div class="flex space-x-4 mt-4 justify-center">
                      <a href="linkedin.com/in/chriskam405">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="h-8 w-8 text-teal-800"
                        >
                          <path
                            fill="currentColor"
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          />
                        </svg>
                      </a>

                      <a href="https://www.instagram.com/christian_mutombo/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                <div class="text-center mt-2">
                  <img
                    src={team6}
                    class="mx-auto mb-4 w-40 h-40 rounded-full bg-gray-200"
                    alt="Avatar"
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">
                    Pierre Diwampovesa
                  </h5>
                  <p class="text-lg text-neutral-700">Directeur des études</p>
                  <p class="text-neutral-500 dark:text-neutral-400">
                    <div class="flex space-x-4 mt-4 justify-center">
                      <a href="https://www.facebook.com/elitescd/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="h-8 w-8 text-teal-800"
                        >
                          <path
                            fill="currentColor"
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
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
                <div class="text-center mt-2">
                  <img
                    src={team5}
                    class="mx-auto mb-4 w-40 rounded-full bg-gray-200"
                    alt="Avatar"
                  />
                  <h5 class="mb-2 text-xl font-medium leading-tight text-teal-800">
                    Kevin Diasonama
                  </h5>
                  <p class="text-lg text-neutral-700">Coach</p>
                  <p class="text-neutral-500 dark:text-neutral-400">
                    <div class="flex space-x-4 mt-4 justify-center">
                      <a href="https://www.linkedin.com/in/kevin-diasonama-b15665a5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="h-8 w-8 text-teal-800"
                        >
                          <path
                            fill="currentColor"
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          />
                        </svg>
                      </a>

                      <a href="https://www.instagram.com/young_dias/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 bg-teal-800 rounded-lg text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
