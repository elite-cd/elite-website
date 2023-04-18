import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntl } from "gatsby-plugin-intl";
import T from "prop-types";
import * as React from "react";
import { ROUTES } from "../../../common/constants";
import TwCaroussel from "../../TwCaroussel";

import Page from "../../PageTemplate";
import CourseItem from "./CourseItem";
import * as style from "./Home.module.scss";
import GoogleMapFrame from "../../GooglMap";
import { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import emailjs from "@emailjs/browser";

import styled from "styled-components";
import "./styles.css";

import img1 from "../../../assets/images/to-learn-gb120f4a96_1920.jpg";
import img2 from "../../../assets/images/education-g0a1924b6c_1920.png";
import img3 from "../../../assets/images/coding-g486fa6d97_1280.png";
import img4 from "../../../assets/images/graduate-g37719b1cc_1280.png";
import img5 from "../../../assets/images/man-g5ae25b970_1920.jpg";
import img6 from "../../../assets/images/education-gef2a32113_1280.png";

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
  const [msgSender, setMsgSender] = useState(false);
  const [loader, setLoader] = useState(false);

  const twElement = {
    te: null,
  };

  useEffect(async () => {
    //import * as te from "tw-elements";
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

  const form = useRef();
  const newsLetterForm = useRef();

  useEffect(() => {
    msgSender === true && document.getElementById("popupBtn").click();
  }, [msgSender]);

  useEffect(() => {
    loader === true
      ? document.getElementById("loader").classList.remove("hidden")
      : document.getElementById("loader").classList.add("hidden");
  }, [loader]);

  const sendEmail = (e) => {
    setLoader(true);
    e.preventDefault();

    setTimeout(() => {
      emailjs
        .sendForm(
          "service_zo9rk47",
          "template_ljx9qhl",
          form.current,
          "AnOf892YduB4OgaT5"
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoader(false);
            setMsgSender(true);
          },
          (error) => {
            console.log(error.text);
            setLoader(false);
          }
        );
    }, 1000);
  };

  const sendNewsLetter = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zo9rk47",
        "template_ljx9qhl",
        newsLetterForm.current,
        "AnOf892YduB4OgaT5"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsgSender(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            Choisis un programme Elite
          </h4>
          <p className={style.typography6} style={{ paddingTop: "20px" }}>
            Nous coachons, encadrons et encourageons des génies congolais à
            libérer et exploiter leur esprit créatif
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
            class="grid grid-cols-3 gap-7 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 flex justify-between"
            style={{ width: "90%" }}
          >
            <div>
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
                      <img src={img1} class="h-32 max-xl:h-20" />
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

            <div class="">
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
                      <img src={img2} class="h-32 max-xl:h-20" />
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

            <div class="">
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
                      <img src={img3} class="h-32 max-xl:h-20" />
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
                      <img src={img4} class="h-32 max-xl:h-20" />
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
                      <img src={img5} class="h-32 max-xl:h-20" />
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
                      <img src={img6} class="h-32 max-xl:h-20" />
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
                        <img src={img1} class="h-32 max-xl:h-20" />
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
                          <img src={img2} class="h-32 max-xl:h-20" />
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
                          <img src={img3} class="h-32 max-xl:h-20" />
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
                          <img src={img4} class="h-32 max-xl:h-20" />
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
                          <img src={img5} class="h-32 max-xl:h-20" />
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
                          <img src={img6} class="h-32 max-xl:h-20" />
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
              Nous serons plus que fiers de faire de toi une élite !
            </span>
            <br />
            <p style={{ marginTop: "20px" }}>
              Contribues à ta croissance numérique
              <p style={{ marginTop: "1%" }}>
                en t'inscrivant à l'une de nos formations offertes et deviens le
                meilleur de ta génération!
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

        <div className={style.parent} id="contact_section">
          <img src={contactImg} />
          <div className={style.inner}>
            <img src={contactImg2} />

            <div className={style.contact_content}>
              <div class="grid grid-cols-2" style={{ width: "100%" }}>
                <div>
                  <div
                    class={
                      "grid grid-rows-4 grid-flow-col max-sm:hidden " +
                      style.contactUs
                    }
                  >
                    <div class={style.contactTile}>Contactez-nous</div>
                    <div>
                      <ul
                        style={{
                          textAlign: "start",
                          color: "white",
                          display: "grid",
                        }}
                      >
                        <li style={{ display: "inline-flex" }}>
                          <img src={contactIcon1} style={{ height: "30px" }} />
                          <span
                            style={{ marginTop: "1.5%", marginLeft: "3px" }}
                          >
                            N°6 Tabora, Kinshasa/Gombe
                          </span>
                        </li>
                        <li
                          style={{ paddingTop: "12px", display: "inline-flex" }}
                        >
                          <img src={contactIcon2} style={{ height: "30px" }} />
                          <span
                            style={{ marginTop: "1.5%", marginLeft: "3px" }}
                          >
                            +243 999 084 177
                          </span>
                        </li>
                        <li
                          style={{ paddingTop: "12px", display: "inline-flex" }}
                        >
                          <img src={contactIcon3} style={{ height: "30px" }} />
                          <span
                            style={{ marginTop: "1.5%", marginLeft: "3px" }}
                          >
                            Academie@elite.com
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={"max-sm:-ml-44 " + style.help__container}>
                  <div class="grid grid-rows-2 grid-flow-col">
                    <div>
                      <span className={style.help__title}>Besoin d'aide ?</span>
                      <br />
                      <br />
                      <p className={style.help__desc}>
                        Vous avez une question ? Notre équipe est là pour vous
                        répondre du lundi au vendredi de 09h00 à 19h00 GTM
                      </p>
                    </div>

                    <div style={{ marginTop: "-14%" }}>
                      <form ref={form} onSubmit={sendEmail}>
                        <ul className={style.help__form}>
                          <li style={{ display: "inline-flex" }}>
                            <input
                              id="user_email"
                              type="text"
                              placeholder="Adresse E-mail"
                              className={style.help__email}
                              name="user_email"
                            />
                          </li>

                          <li
                            style={{
                              paddingTop: "12px",
                              display: "inline-flex",
                            }}
                          >
                            <textarea
                              className={style.help__field}
                              name="message"
                            ></textarea>
                          </li>
                          <li
                            style={{
                              paddingTop: "12px",
                              display: "inline-flex",
                            }}
                          >
                            <button
                              type="submit"
                              className={
                                style.contact_btn + " " + style.help__btn
                              }
                            >
                              <svg
                                aria-hidden="true"
                                id="loader"
                                role="status"
                                class="hidden inline mr-2 w-7 h-7 text-gray-200 animate-spin text-gray-400"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="#046059"
                                ></path>
                              </svg>
                              Envoyer
                            </button>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className={style.newsletter__container}>
          <p
            className={style.newsletter__title}
            style={{ paddingBottom: "20px", marginTop: "20px", width: "50%" }}
          >
            <span className={style.signup__text} style={{ fontWeight: "800" }}>
              Restes connecté à l'univers Elite
            </span>
            <br />
            <p className={style.newsletter__desc}>
              Inscris-toi à notre infolettre afin de rester connecter aux
              nouveautés de l'univers Elite!
            </p>
          </p>

          <div
            data-te-modal-init
            class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="rightBottomModal"
            tabindex="-1"
            aria-labelledby="rightBottomModalLabel"
            aria-hidden="true"
          >
            <div
              data-te-modal-dialog-ref
              class="pointer-events-none absolute bottom-7 right-7 h-auto w-full translate-x-[100%] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
            >
              <div
                class="pointer-events-auto mx-auto mb-4 hidden w-96 max-w-full rounded-lg bg-success-100 bg-clip-padding text-sm text-success-700 shadow-lg shadow-black/5 data-[te-toast-show]:block data-[te-toast-hide]:hidden"
                id="static-example"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-te-autohide="true"
                data-te-toast-init
                data-te-toast-show
              >
                <div class="flex items-center justify-between rounded-t-lg border-b-2 border-success/20 bg-success-100 bg-clip-padding px-4 pb-2 pt-2.5">
                  <p class="flex items-center font-bold text-success-700">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check-circle"
                      class="mr-2 h-4 w-4 fill-current"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                      ></path>
                    </svg>
                    Message envoyé
                  </p>
                  <div class="flex items-center">
                    <p class="text-xs text-success-700">
                      Il y a {new Date().getSeconds()} secondes
                    </p>
                    <button
                      type="button"
                      class="ml-2 box-content rounded-none border-none opacity-80 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-te-modal-dismiss
                      aria-label="Close"
                    >
                      <span class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <div class="break-words rounded-b-lg bg-success-100 px-4 py-4 text-success-700">
                  Merci de nous écrire, nous vous recontactons dans un bref
                  délai
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="hidden inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-toggle="modal"
            data-te-target="#rightBottomModal"
            data-te-ripple-init
            data-te-ripple-color="light"
            id="popupBtn"
          >
            Bottom right
          </button>

          <form ref={newsLetterForm}>
            <div class="relative mb-4 flex flex-wrap items-center justify-center">
              <input
                type="text"
                class={
                  style.newsletter__field +
                  " relative m-0 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-gray-100 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition ease-in-out focus:z-[3] focus:text-neutral-700 focus:outline-none dark:border-teal-800 dark:text-neutral-200 dark:placeholder:text-neutral-400"
                }
                placeholder="Adresse E-mail"
                aria-label="Adresse E-mail"
                aria-describedby="basic-addon2"
                style={{}}
                name="user_email"
              />
              <span
                class={
                  "bg-teal-800 flex items-center whitespace-nowrap rounded-r border border-l-0 border-solid border-teal-800 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-white dark:border-teal-800 dark:text-white dark:placeholder:text-neutral-200 " +
                  style.newsletter__button
                }
                id="basic-addon2"
                style={{ height: "50px", borderRadius: "0px 20px 20px 0px" }}
                onClick={(e) => sendNewsLetter(e)}
              >
                S'inscrire
              </span>
            </div>
          </form>
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
