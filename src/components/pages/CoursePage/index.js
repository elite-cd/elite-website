import {
  faCircleArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  GatsbyImage,
  getImage,
  StaticImage,
  getSrc,
} from "gatsby-plugin-image";
import React from "react";
import { ROUTES } from "../../../common/constants";
import Page from "../../PageTemplate";
import * as style from "./CoursePage.module.scss";

const CoursePage = ({ course, otherCourses }) => {
  const outcomesList = course.outcomes.split(",");
  const srcImage = getSrc(course.image);

  const modules = {
    values: [],
  };
  switch (course.slug) {
    case "base-programmation":
      modules.values = [
        "Création des sites web",
        "Création des applications mobiles et web",
        "Techniques de création des GUI",
        "Formation complète python",
        "Le web avec Python",
        "Le web pour java",
        "Découvrez le Microsoft.NET",
      ];
      break;

    case "alphabetisation-numerique":
      modules.values = [
        "La NTIC pour tous",
        "Découvrez le WWW",
        "Les modes de télécommunication",
        "L'air de travailler plus rapide",
        "Remote Office",
        "Découvrez la cyber sécurité en exclusivité",
        "Les bonnes valuers sur le cyberespace",
        "Faites vos propres contenus web",
      ];
      break;

    case "immersion-en-entreprise":
      modules.values = [
        "Découvrez le monde de l'entreprise",
        "Familiarisez-vous avec nos outils techniques",
        "Une croissance graduelle",
        "Gagnez en éfficacité",
        "Vous faites partie de nos projets",
        "Des tests d'évaluation",
      ];
      break;
  }

  const getGraphSqIcon = (item) => {
    let images = null;

    if (item === 0) {
      images = getImage(course.icon1);
    } else if (item === 1) {
      images = getImage(course.icon2);
    }
    return images;
  };

  const renderCoursePage = () => (
    <React.Fragment>
      <div className={style.container}>
        <div class="px-1 py-24">
          <div class="relative block md:flex items-center">
            <div class="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
              <div class="text-lg font-semibold text-teal-800 uppercase p-8 text-center border-b border-gray-200 tracking-wide">
                {course.title}
              </div>
              <div class="block sm:flex md:block lg:flex items-center justify-center">
                <div class="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                  <div class="inline-flex items-center">
                    <div class="mb-12 lg:mb-0 text-center mx-auto">
                      <svg
                        class="w-8 h-8 text-teal-800 mb-6 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"
                        />
                      </svg>
                      <h6 class="font-medium text-xl">
                        Durée de {course.timeline}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className={"mx-5 " + style.description}>
                <p class="uppercase text-red-600 font-bold mb-6 text-center">
                  {course.shortDescription}
                </p>
                {course.description}
              </div>

              <a
                class="block flex items-center justify-center bg-yellow-600 hover:bg-yellow-800 p-8 text-md font-semibold text-white uppercase mt-16"
                href="#"
              >
                <span>Demarrer votre formation</span>
                <span class="font-medium text-white ml-2">➔</span>
              </a>
            </div>
            <div
              class={
                "w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16 " +
                style.image
              }
              style={{
                backgroundImage: "url(" + srcImage + ")",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>

        <div className="bg-slate-100">
          <div class="px-6 mx-auto">
            <section class="mb-10 text-gray-800 py-6">
              <div class="flex justify-center">
                <div class="text-center max-w-[700px]">
                  <h2 class="text-3xl font-bold mb-6">Nos modules</h2>
                  <p class="text-gray-500 mb-12">
                    Chacun des modules sera composé des matériels didactique
                    d'actualité , des logiciels à la pointe de la technologie.
                  </p>
                </div>
              </div>

              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12">
                {outcomesList.map((item, i) => {
                  return (
                    <div class="mb-12" key={i}>
                      <div class="flex">
                        <div class="shrink-0 mt-1">
                          <svg
                            class="w-7 h-7 text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                            ></path>
                          </svg>
                        </div>
                        <div class="grow ml-4">
                          <p class="font-bold mb-1">{item.trim()}</p>
                          <p class="text-gray-500">{modules.values[i]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-7 md:grid-cols-3 xs:grid-cols-1 flex items-center justify-between mt-14">
          {otherCourses.map((item, i) => {
            const courseLink = `/courses/${item.slug}`;
            var courseImg = getSrc(item.image);

            return (
              <div class="w-full max-w-md  mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
                <div class="max-w-md mx-auto">
                  <div
                    class="h-[236px]"
                    style={{
                      backgroundImage: "url(" + courseImg + ")",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div class="p-4 sm:p-6">
                    <p class="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                      {item.title}
                    </p>
                    <div class="flex flex-row mt-3">
                      <p class="text-[#3C3C4399] text-[17px] mr-2">DUREE</p>
                      <p class="text-[17px] font-bold text-[#0FB478]">
                        {item.timeline}
                      </p>
                    </div>
                    <p class="text-[#7C7C80] font-[15px] mt-6">
                      {item.shortDescription}
                    </p>

                    <a
                      href={courseLink}
                      class="block mt-10 w-full px-4 py-3 text-white font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-teal-800 rounded-[14px] hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
  return <Page activeRoute={ROUTES.ACADEMY}>{renderCoursePage}</Page>;
};

export default CoursePage;
