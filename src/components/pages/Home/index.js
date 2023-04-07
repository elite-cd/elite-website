import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntl } from "gatsby-plugin-intl";
import T from "prop-types";
import * as React from "react";
import { ROUTES } from "../../../common/constants";
import ButtonRounded from "../../Button/button-rounded";
import Carousel from "../../Carousel";
import TwCaroussel from "../../TwCaroussel";

import Page from "../../PageTemplate";
import CourseItem from "./CourseItem";
import * as style from "./Home.module.scss";
import GoogleMapFrame from "../../GooglMap";
import { useState, useEffect } from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import "./styles.css";
import * as te from "tw-elements";

import img1 from "../../../assets/images/mentor.png";
import img2 from "../../../assets/images/qualify.png";
import img3 from "../../../assets/images/computer.png";
import img4 from "../../../assets/images/pedagogie.png";
import img5 from "../../../assets/images/professional.png";
import img6 from "../../../assets/images/certificat.png";

import contactImg from "../../../assets/images/nous-contacter 1.png";
import contactImg2 from "../../../assets/images/Rectangle 37.png";
import contactIcon1 from "../../../assets/images/Marker_100px.png";
import contactIcon2 from "../../../assets/images/WhatsApp_100px.png";
import contactIcon3 from "../../../assets/images/Message Filled_100px.png";

import courseBg1 from "../../../assets/images/mimi-thian-vdXMSiX-n6M-unsplash 1.png";
import courseBg2 from "../../../assets/images/Rectangle 24.png";

import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const OverlayContents = [
  "Les programmes offerts sont soigneusement préparés par des mentors congolais qui ont bénéficié d’une éducation internationale au Canada et aux USA. et évoluent dans des entreprises de renom dans le domaine de la technologie telles que Microsoft (USA) et Rhetorik (Canada).",
  "Contrairement à l'enseignement traditionnel, nous disposons de coachs au détriment des enseignements. Ce modèle permet aux apprenants de développer une indépendance afin d'être orienté dans leur apprentissage. Ces coaches sont des professionnels de formation et de pratique dans le domaine de l’informatique.",
  "Notre salle d’apprentissage est un véritable laboratoire de créativité,innovation, collaboration,productivité en groupe dans le but de favoriser l’autonomie et l’intelligence collective.",
  "Notre pédagogie se base sur l'échange des connaissances. Un système apprentissage autonome qui consiste à engager une discussion dans laquelle les apprenants participent et construisent le cours ensemble avec le coach (professeur) qui oriente les sujets.",
  "Nos programmes sont dispensés dans un local où se situe une entreprise de renom dans la technologie qui dispose des clients internationaux. Cet emplacement permet aux apprenants de s’adapter au milieu professionnel et aussi d'avoir des connaissances en plus de ce qu’ils apprendront.",
  "A la fin de votre formation, vous aurez un certificat reconnu oú que vous alliez qui atteste vos compétences et connaissances.",
];

const OverlayTitles = [
  "Mentors de niveau international",
  "Coach Qualifiés et pratiquants",
  "Lab Creative",
  "Methode Harkness",
  "Environnement Professionnel et Sérieux",
  "Certificat",
];

const OverlayCountry = ["", "", "Canada", "USA", "", ""];

const Home = ({ carouselItems, map }) => {
  const [modalContentId, setModalContentId] = useState(0);
  const [img, setImg] = useState("");

  const intl = useIntl();
  const [overlayOpen, setOverlayOpen] = React.useState(false);
  const [overlayIndex, setOverlayIndex] = React.useState(1);
  const handleClick = (e) => {
    let id = e.target.id;
    if (id === undefined) return;
    id = id.replace("image-", "");
    const mId = parseInt(id);
    setOverlayIndex(mId);
    setOverlayOpen(!overlayOpen);
  };
  const handleCloseClick = (e) => {
    setOverlayOpen(false);
  };
  const renderOverlayComponent = (idx) => {
    return !overlayOpen ? null : (
      <div className={style.about__overlay}>
        <div className={style.about__popup}>
          <button onClick={handleCloseClick} className={style.close}>
            &times;
          </button>
          <div className={style.content}>
            <p className={style.about__desc}>{OverlayContents[idx - 1]}</p>
          </div>
        </div>
      </div>
    );
  };

  const images = [img1, img2, img3, img4, img5, img6];

  const [isOpen, toggle] = useState(false);
  const [carouselNext, swipeCarouselNext] = useState(false);
  const [carouselPrev, swipeCarouselPrev] = useState(false);

  function handlOpenModal(open, id) {
    console.log("close modal");

    setModalContentId(id);
    //open === true ? (body.style.overflow = "hidden") :  (body.style.overflow = "auto");
    toggle(open);
  }

  function handlMobilePopup(id) {
    setModalContentId(id);
  }

  useEffect(() => {
    const body = document.querySelector("body");
    isOpen === true
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "auto");
  }, [isOpen]);

  useEffect(() => {
    if (carouselNext === true) {
      const myCarousel = new te.Carousel(
        document.getElementById("carouselExampleIndicators")
      );
      myCarousel.next();
    }
  }, [carouselNext]);

  useEffect(() => {
    if (carouselPrev === true) {
      const myCarousel = new te.Carousel(
        document.getElementById("carouselExampleIndicators")
      );
      myCarousel.prev();
    }
  }, [carouselPrev]);

  useEffect(() => {
    const myCarousel = new te.Carousel(
      document.getElementById("carouselExampleIndicators")
    );
    myCarousel.cycle();
  }, []);

  const swipeNextCarousel = () => {
    swipeCarouselNext(true);
  };

  const swipePrevCarousel = () => {
    swipeCarouselPrev(true);
  };

  const InternalPage = ({ courses }) => {
    return (
      <React.Fragment>
        <TwCaroussel items={courses} />
        <div className={style.row__center}>
          <h3
            style={{ textAlign: "center", marginTop: "30px" }}
            class="max-sm:w-full lg:w-9/12 font-sans text-xl font-bold text-justify"
          >
            Deviens un génie et libère ton esprit créatif en suivant la
            meilleure des formations avec Elite
          </h3>

          <h4
            className={style.typography3}
            style={{ marginTop: "3%", color: "#046059" }}
          >
            Choisissez un programme Elite
          </h4>
          <p className={style.typography6} style={{ paddingTop: "20px" }}>
            Nous coachons, encadrons et encourageons des génies congolais à
            libérer et exoloiter leur esprit créatif
          </p>
        </div>

        <section className={style.course__section}>
          <div className={style.courselist}>
            {courses.map((course, i) => (
              <CourseItem
                key={"course-" + i}
                title={course.title}
                slug={course.slug}
                description={course.description}
                outlined={i % 2 === 0}
                timeline={course.timeline}
                price={course.price}
                descTitle={course.shortDescription}
                outcomes={[]}
                image={course.image}
                icon1={course.icon1}
              />
            ))}
          </div>
        </section>

        <h3 id="about" className={style.about__header}>
          Pourquoi choisir l'académie des élites ?
        </h3>
        <section className={style.about__container}>
          {renderOverlayComponent(overlayIndex)}

          <div
            class="grid grid-cols-3 gap-7 md:grid-cols-3 xs:grid-cols-1"
            style={{ width: "90%" }}
          >
            <div class={style.rubrique}>
              <div
                class={
                  "relative flex justify-center cursor-pointer transition-all duration-700 " +
                  style.card
                }
              >
                <div
                  class={
                    "block rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                    style.courseCard
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-6">
                    <h5 class="mb-3 -mt-9">
                      <img src={img1} style={{ height: "80px" }} />
                    </h5>
                    <p
                      class="mb-4 text-base text-teal-800"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Mentors de niveau international
                    </p>
                  </div>
                </div>

                <div
                  class={
                    "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                    style.courseCard +
                    " " +
                    style.cardback
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-4">
                    <p class={"mb-4 text-base " + style.longCardText}>
                      {OverlayContents[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class={style.rubrique}>
              <div
                class={
                  "relative flex justify-center cursor-pointer transition-all duration-700 " +
                  style.card
                }
              >
                <div
                  class={
                    "absolute block max-w-sm rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                    style.courseCard
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-6">
                    <h5 class="mb-3 -mt-9">
                      <img src={img2} style={{ height: "80px" }} />
                    </h5>
                    <p
                      class="mb-4 text-base text-teal-800"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Coachs qualifiés et pratiquants
                    </p>
                  </div>
                </div>

                <div
                  class={
                    "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                    style.courseCard +
                    " " +
                    style.cardback
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-4">
                    <p class={"mb-4 text-base " + style.longCardText}>
                      {OverlayContents[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class={style.rubrique}>
              <div
                class={
                  "relative flex justify-center cursor-pointer transition-all duration-700 " +
                  style.card
                }
              >
                <div
                  class={
                    "absolute block max-w-sm rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                    style.courseCard
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-6">
                    <h5 class="mb-3 -mt-9">
                      <img src={img3} style={{ height: "80px" }} />
                    </h5>
                    <p
                      class="mb-4 text-base text-teal-800"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Lab Creative (Canada)
                    </p>
                  </div>
                </div>

                <div
                  class={
                    "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                    style.courseCard +
                    " " +
                    style.cardback
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-4">
                    <p class={"mb-4 text-base " + style.longCardText}>
                      {OverlayContents[2]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-8">
              <div
                class={
                  "relative flex justify-center cursor-pointer transition-all duration-700 " +
                  style.card
                }
              >
                <div
                  class={
                    "block max-w-sm rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                    style.courseCard
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-6">
                    <h5 class="mb-3 -mt-9">
                      <img src={img4} style={{ height: "80px" }} />
                    </h5>
                    <p
                      class="mb-4 text-base text-teal-800"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Méthodes Harkness (USA)
                    </p>
                  </div>
                </div>

                <div
                  class={
                    "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                    style.courseCard +
                    " " +
                    style.cardback
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-4">
                    <p class={"mb-4 text-base " + style.longCardText}>
                      {OverlayContents[3]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-8">
              <div
                class={
                  "relative flex justify-center cursor-pointer transition-all duration-700 " +
                  style.card
                }
              >
                <div
                  class={
                    "absolute block max-w-sm rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                    style.courseCard
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-6">
                    <h5 class="mb-3 -mt-9">
                      <img src={img5} style={{ height: "80px" }} />
                    </h5>
                    <p
                      class="mb-4 text-base text-teal-800"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Environnement Professionnel et Sérieux
                    </p>
                  </div>
                </div>

                <div
                  class={
                    "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                    style.courseCard +
                    " " +
                    style.cardback
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-4">
                    <p class={"mb-4 text-base " + style.longCardText}>
                      {OverlayContents[4]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-8">
              <div
                class={
                  "relative flex justify-center cursor-pointer transition-all duration-700 " +
                  style.card
                }
              >
                <div
                  class={
                    "absolute block max-w-sm rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                    style.courseCard
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-6">
                    <h5 class="mb-3 -mt-9">
                      <img src={img6} style={{ height: "80px" }} />
                    </h5>
                    <p
                      class="mb-4 text-base text-teal-800"
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                      }}
                    >
                      Certificat
                    </p>
                  </div>
                </div>

                <div
                  class={
                    "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                    style.courseCard +
                    " " +
                    style.cardback
                  }
                >
                  <div class="py-3 px-6">&nbsp;</div>
                  <div class="p-6">
                    <p class="mb-4 text-base" style={{ fontSize: "1rem" }}>
                      {OverlayContents[5]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class={style.mobile_courseCard}>
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
            <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <div
                class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                data-te-carousel-active
              >
                <div
                  class={
                    "block w-full flex justify-center cursor-pointer transition-all duration-700 " +
                    style.card
                  }
                >
                  <div
                    class={
                      "block rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                      style.courseCard
                    }
                  >
                    <div class="py-3 px-6">&nbsp;</div>
                    <div class="p-6">
                      <h5 class="mb-3 -mt-9">
                        <img src={img1} style={{ height: "80px" }} />
                      </h5>
                      <p
                        class="mb-4 text-base text-teal-800"
                        style={{
                          fontSize: "20px",
                          fontWeight: "700",
                        }}
                      >
                        Mentors de niveau international
                      </p>
                    </div>
                  </div>

                  <div
                    class={
                      "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                      style.courseCard +
                      " " +
                      style.cardback
                    }
                  >
                    <div class="py-3 px-6">&nbsp;</div>
                    <div class="p-4">
                      <p class={"mb-4 text-base " + style.longCardText}>
                        {OverlayContents[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <div class={style.rubrique}>
                  <div
                    class={
                      "relative flex justify-center cursor-pointer transition-all duration-700 " +
                      style.card
                    }
                  >
                    <div
                      class={
                        "block rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                        style.courseCard
                      }
                    >
                      <div class="py-3 px-6">&nbsp;</div>
                      <div class="p-6">
                        <h5 class="mb-3 -mt-9">
                          <img src={img2} style={{ height: "80px" }} />
                        </h5>
                        <p
                          class="mb-4 text-base text-teal-800"
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                          }}
                        >
                          Coachs qualifiés et pratiquants
                        </p>
                      </div>
                    </div>

                    <div
                      class={
                        "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                        style.courseCard +
                        " " +
                        style.cardback
                      }
                    >
                      <div class="py-3 px-6">&nbsp;</div>
                      <div class="p-4">
                        <p class={"mb-4 text-base " + style.longCardText}>
                          {OverlayContents[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <div class={style.rubrique}>
                  <div
                    class={
                      "relative flex justify-center cursor-pointer transition-all duration-700 " +
                      style.card
                    }
                  >
                    <div
                      class={
                        "block rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                        style.courseCard
                      }
                    >
                      <div class="py-3 px-6">&nbsp;</div>
                      <div class="p-6">
                        <h5 class="mb-3 -mt-9">
                          <img src={img3} style={{ height: "80px" }} />
                        </h5>
                        <p
                          class="mb-4 text-base text-teal-800"
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                          }}
                        >
                          Lab Creative (Canada)
                        </p>
                      </div>
                    </div>

                    <div
                      class={
                        "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                        style.courseCard +
                        " " +
                        style.cardback
                      }
                    >
                      <div class="py-3 px-6">&nbsp;</div>
                      <div class="p-4">
                        <p class={"mb-4 text-base " + style.longCardText}>
                          {OverlayContents[2]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <div class={style.rubrique}>
                  <div
                    class={
                      "relative flex justify-center cursor-pointer transition-all duration-700 " +
                      style.card
                    }
                  >
                    <div
                      class={
                        "block rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                        style.courseCard
                      }
                    >
                      <div class="py-3 px-6">&nbsp;</div>
                      <div class="p-6">
                        <h5 class="mb-3 -mt-9">
                          <img src={img4} style={{ height: "80px" }} />
                        </h5>
                        <p
                          class="mb-4 text-base text-teal-800"
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                          }}
                        >
                          Méthodes Harkness (USA)
                        </p>
                      </div>
                    </div>

                    <div
                      class={
                        "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                        style.courseCard +
                        " " +
                        style.cardback
                      }
                    >
                      <div class="py-3 px-6">&nbsp;</div>
                      <div class="p-4">
                        <p class={"mb-4 text-base " + style.longCardText}>
                          {OverlayContents[3]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <div class={style.rubrique}>
                  <div
                    class={
                      "relative flex justify-center cursor-pointer transition-all duration-700 " +
                      style.card
                    }
                  >
                    <div
                      class={
                        "block rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                        style.courseCard
                      }
                    >
                      <div class="py-3 px-6">&nbsp;</div>
                      <div class="p-6">
                        <h5 class="mb-3 -mt-9">
                          <img src={img5} style={{ height: "80px" }} />
                        </h5>
                        <p
                          class="mb-4 text-base text-teal-800"
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                          }}
                        >
                          Environnement Professionnel Sérieux
                        </p>
                      </div>
                    </div>

                    <div
                      class={
                        "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                        style.courseCard +
                        " " +
                        style.cardback
                      }
                    >
                      <div class="py-3 px-6">&nbsp;</div>
                      <div class="p-4">
                        <p class={"mb-4 text-base " + style.longCardText}>
                          {OverlayContents[4]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
              >
                <div class={style.rubrique}>
                  <div
                    class={
                      "relative flex justify-center cursor-pointer transition-all duration-700 " +
                      style.card
                    }
                  >
                    <div
                      class={
                        "block rounded-lg text-center transition-all duration-100 delay-200 z-20 hover:opacity-0 " +
                        style.courseCard
                      }
                    >
                      <div class="py-3 px-6">&nbsp;</div>
                      <div class="p-6">
                        <h5 class="mb-3 -mt-9">
                          <img src={img6} style={{ height: "80px" }} />
                        </h5>
                        <p
                          class="mb-4 text-base text-teal-800"
                          style={{
                            fontSize: "20px",
                            fontWeight: "700",
                          }}
                        >
                          Certificat
                        </p>
                      </div>
                    </div>

                    <div
                      class={
                        "absolute block max-w-sm rounded-lg text-center transition-all z-10 " +
                        style.courseCard +
                        " " +
                        style.cardback
                      }
                    >
                      <div class="py-3 px-6">&nbsp;</div>
                      <div class="p-4">
                        <p class={"mb-4 text-base"}>{OverlayContents[5]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black focus:text-black motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide="prev"
              onClick={(e) => swipePrevCarousel}
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
              class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleIndicators"
              data-te-slide="next"
              onClick={(e) => swipeNextCarousel}
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
                Next
              </span>
            </button>
          </div>
        </section>

        <section className={style.signup__container}>
          <div class="flex w-full flex-wrap items-center justify-between">
            <div
              class="items-center w-96 max-sm:w-32 ml-10"
              style={{
                borderBlockEndColor: "#0d9488",
                borderBlockEndWidth: "2px",
              }}
            ></div>

            <div
              class="items-center w-96 max-sm:w-32 mr-10"
              style={{
                borderBlockEndColor: "#0d9488",
                borderBlockEndWidth: "2px",
              }}
            ></div>
          </div>

          <p
            className={style.signup__title}
            style={{ paddingBottom: "20px", marginTop: "20px" }}
          >
            <span
              className={style.signup__text}
              style={{ fontSize: "32", fontWeight: "800" }}
            >
              Nous serons plus que ravis de vous compter parmis nous
            </span>
            <br />
            <p style={{ marginTop: "20px" }}>
              Contribuer à votre croissance numérique !
              <p style={{ marginTop: "1%" }}>
                inscrivant à l'une de nos programmes offertes et devenez le
                meilleur
              </p>
            </p>
          </p>

          <button
            style={{
              borderRadius: "20px",
              textTransform: "initial",
              color: "black",
              height: "45px",
              fontWeight: "700",
            }}
            type="button"
            class="inline-block bg-warning px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-yellow-500"
          >
            Démarrez votre formation
          </button>
        </section>

        <section className={style.contact__container}>
          <div className={style.contact__map}>
            <GoogleMapFrame mapUrl={map} />
          </div>
          <div className={style.contact__information}>
            <h1>Contact</h1>
            <div>
              <span className={style.contact__icon}>
                <FontAwesomeIcon icon={faLocationPin} />
              </span>
              6, Tabora, Gombe, Kinshasa, RDC
            </div>
            <div>
              <span className={style.contact__icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              academie@elite.cd
            </div>
            <div>
              <span className={style.contact__icon}>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +243 999 084 177
            </div>

            <div>
              <StaticImage
                alt={"brands"}
                objectFit={"contain"}
                className={style.contact__image}
                src={"../../../assets/images/linkedin.png"}
              />
              <p>
                <a href="https://www.linkedin.com/company/academie-des-elites/">
                  LinkedIn
                </a>
              </p>
            </div>
            <div>
              <StaticImage
                alt={"brands"}
                objectFit={"contain"}
                className={style.contact__image}
                src={"../../../assets/images/instagram.png"}
              />
              <p>
                <a href="https://www.instagram.com/invites/contact/?i=1m43wzwkzzm13&utm_content=qh7802h">
                  Instagram
                </a>
              </p>
            </div>
            <div>
              <StaticImage
                alt={"brands"}
                objectFit={"contain"}
                className={style.contact__image}
                src={"../../../assets/images/facebook.png"}
              />
              <p>
                {" "}
                <a href="https://www.facebook.com/elitescd/">Facebook</a>{" "}
              </p>
            </div>
            <div>
              <StaticImage
                alt={"brands"}
                objectFit={"contain"}
                className={style.contact__image}
                src={"../../../assets/images/twitter_icon.png"}
              />
              <p>
                <a href="https://twitter.com/AcademieElites?s=09">Twitter</a>
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };
  return (
    <Page activeRoute={ROUTES.INDEX}>
      {(courses) => <InternalPage courses={courses} />}
    </Page>
  );
};

Home.propTypes = {
  carouselItems: T.array,
  courses: T.array,
};

export default Home;
