import {
  faCircleArrowRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { ROUTES } from "../../../common/constants";
import { ButtonRounded } from "../../Button";
import Page from "../../PageTemplate";
import * as style from "./CoursePage.module.scss";
import img1 from "../../../assets/images/Globe_100px_black.png"

const CoursePage = ({ course, otherCourses }) => {
  const outcomesList = course.outcomes.split(",");

  const getGraphSqIcon = (item) => {
    let images = null;

    if(item === 0){
      images = getImage(course.icon1)
    }
    else if(item === 1){
      images = getImage(course.icon2)
    }
    return images
  }

  const renderCoursePage = () => (
    <React.Fragment>
      <div className={style.container}>
        
        <section className={style.details}>
          <div className={style.courses__section}>
            <p className="mt-10 text-sm text-justify">
              {course.description}
            </p>
              
              <a href={ROUTES.SIGNUP}>
              <button
                type="button"
                class="flex items-center inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:border-2 hover:border-warning hover:text-warning"
                style={{ height: "50px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-1 h-6 w-6">
                  <path
                    fill-rule="evenodd"
                    d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V10.5z"
                    clip-rule="evenodd" />
                </svg>
                Démarrez votre formation
              </button>
              </a>
          </div>
          <div className={style.course__detail}>
            
            <div class="grid grid-cols-12 md:items-center w-full max-w-screen-sm md:max-w-screen-md sm:max-w-screen-sm lg:max-w-screen-lg">
              
              <div class="col-span-12 md:col-span-auto md:col-start-3 md:col-end-13 md:row-start-1 md:row-end-1 w-full">
                 <picture class="relative block w-full h-0 bg-gray-300 overflow-hidden shadow-lg" style={{ paddingTop: "60%",}}>
                    <GatsbyImage
                      objectFit={"cover"}
                      alt="Image 1 Loading failed"
                      className="absolute inset-0 w-full h-full object-cover"
                      image={getImage(course.image)}
                    />
                  </picture>
              </div>
              <div class="col-span-12 md:col-span-auto md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
                <div class="p-4 md:p-8 bg-white shadow-xl">
                  <p class="mb-2 text-lg leading-none font-medium">
                    <a class="text-teal-800 font-semibold" href="#" title="Heading Link">
                    {course.title}
                    </a>
                  </p>
                  <p class="mb-2 text-sm text-gray-700">
                    { course.shortDescription }
                  </p>
                  <p class="text-xs text-gray-500">
                    Durée &nbsp;: &nbsp;
                    <time datetime="">
                       { course.timeline }
                    </time>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>
        <div class="flex w-full flex-wrap items-center justify-between mt-14 max-sm:hidden">

          <div class="items-center w-06 max-sm:w-32">
            <span className="text-2xl font-semibold">Nos Modules</span>
          </div>

          <div class="items-center w-10/12 max-sm:w-32" style={{ borderBlockEndColor: "#0d9488", borderBlockEndWidth: "2px", }}>
          </div>

        </div>

        <div class="grid grid-cols-3 gap-7 md:grid-cols-4 xs:grid-cols-1 flex justify-between mt-14 max-sm:hidden">
          
          {outcomesList.map((item, i) => {
            
                return (
                  <div class="md:flex" key={`outcome-${i}`}>
                    <div class="md:flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-14 rounded-full shadow-lg bg-yellow-500" viewBox="0 0 472 512">
                        <path d="M422.5 202.9c30.7 0 33.5 53.1-.3 53.1h-10.8v44.3h-26.6v-97.4h37.7zM472 352.6C429.9 444.5 350.4 504 248 504 111 504 0 393 0 256S111 8 248 8c97.4 0 172.8 53.7 218.2 138.4l-186 108.8L472 352.6zm-38.5 12.5l-60.3-30.7c-27.1 44.3-70.4 71.4-122.4 71.4-82.5 0-149.2-66.7-149.2-148.9 0-82.5 66.7-149.2 149.2-149.2 48.4 0 88.9 23.5 116.9 63.4l59.5-34.6c-40.7-62.6-104.7-100-179.2-100-121.2 0-219.5 98.3-219.5 219.5S126.8 475.5 248 475.5c78.6 0 146.5-42.1 185.5-110.4z"/>
                      </svg>

                    </div>
                    <div class="mt-4 md:mt-0 md:ml-6">
                      <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                        <ul class="flex justify-center">
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="mr-1 h-5 w-5 text-warning">
                              <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="mr-1 h-5 w-5 text-warning">
                              <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="mr-1 h-5 w-5 text-warning">
                              <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="mr-1 h-5 w-5 text-warning">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="mr-1 h-5 w-5 text-warning">
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                          </li>
                        </ul>
                      </div>
                      <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
                        {item.trim()}</a>
                    </div>
                  </div>
                );
              })}
        </div>

        <div class="flex w-full flex-wrap items-center justify-between mt-14">

          <div class="items-center w-14 max-sm:w-32">
            <span className="text-2xl font-semibold max-sm:text-xl">Formations similaires</span>
          </div>

          <div class="items-center w-10/12 max-sm:w-32" style={{ borderBlockEndColor: "#0d9488", borderBlockEndWidth: "2px", }}>
          </div>

        </div>

        <div class="grid grid-cols-3 gap-7 md:grid-cols-3 xs:grid-cols-1 flex justify-between mt-14">
          
          {otherCourses.map((item, i) => {
              const courseLink = `/courses/${item.slug}`;
              return (
                <div
                  class="block bg-teal-800 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <a href={courseLink}>
                      
                    <GatsbyImage
                      objectFit={"cover"}
                      alt={`${item.title} image`}
                      className="rounded-t-lg"
                      image={ getImage(item.image) }
                      style={{ height: "300px" }}
                    />
                  </a>
                  <div class="p-6">
                    <h5
                      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      { item.title }
                    </h5>
                    <p class="mb-4 text-base text-white">
                    { item.timeline }
                    </p>
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
