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
import "preline"

import styled from "styled-components";
import "./styles.css";
import Modal from "./Modal";
import img1 from "../../../assets/images/mentor.png"
import img2 from "../../../assets/images/qualify.png"
import img3 from "../../../assets/images/computer.png"
import img4 from "../../../assets/images/pedagogie.png"
import img5 from "../../../assets/images/professional.png"
import img6 from "../../../assets/images/certificat.png"

import contactImg from "../../../assets/images/nous-contacter 1.png"
import contactImg2 from "../../../assets/images/Rectangle 37.png"
import contactIcon1 from "../../../assets/images/Marker_100px.png"
import contactIcon2 from "../../../assets/images/WhatsApp_100px.png"
import contactIcon3 from "../../../assets/images/Message Filled_100px.png"

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
  "Certificat"
];

const OverlayCountry = [
  "",
  "",
  "Canada",
  "USA",
  "",
  ""
]

const Home = ({ carouselItems, map }) => {

  const [modalContentId, setModalContentId] = useState(0);
  const [img, setImg] = useState("")

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

  const ModalContent = styled.div`
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            color: #5c3aff;
          }
        `;

        const images = [img1, img2, img3, img4, img5, img6]

        const [isOpen, toggle] = useState(false);

        function handlOpenModal(open, id) {
          console.log("close modal");
          
          setModalContentId(id)
          //open === true ? (body.style.overflow = "hidden") :  (body.style.overflow = "auto");
          toggle(open);
        }

        function handlMobilePopup(id) {
          setModalContentId(id)
        }
        
        useEffect(() => {
          const body = document.querySelector("body");
          isOpen === true ? (body.style.overflow = "hidden") : body.style.overflow = "auto"
        }, [isOpen]);

  const InternalPage = ({ courses }) => {

    return (
      <React.Fragment>
        <TwCaroussel items={carouselItems}/>
        <div className={style.row__center}>

          <h3 style={{ width: "60%", textAlign: "center", marginTop: "30px" }} class="font-sans text-xl font-bold text-justify">
            Deviens un génie et libère ton esprit créatif en suivant la meilleure des formations avec Elite</h3>

          <h4 className={style.typography3} style={{ marginTop: "3%", color: "#046059" }}>
            Choisissez un programme Elite
          </h4>
          <p className={style.typography6} style={{ paddingTop: "20px" }}>
            Nous coachons, encadrons et encourageons des génies congolais à libérer et exoloiter leur esprit créatif
          </p>
        </div>
          
          <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
            <ModalContent className={ style.modal + " bg-gray-100"} >

                <figure className="md:flex bg-gray rounded-xl p-8 md:p-0">
                  <div className={ style.modalImgContainer }>
                      <img  className="md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
                            src={ images[modalContentId] } 
                            alt=""  
                            style={{ justifyContent: "center", marginTop: "12%"}} />
                  </div>

                <div class={ style.modalContentBloc + " pt-6 md:p-8 text-center bg-gray md:text-left space-y-3"}>
                  <blockquote className={ style.modalContentTextWrapper }>

                    <p class="text-lg font-semibold" className={ style.modalContentText }>
                      { (OverlayContents[modalContentId] != undefined) ? (OverlayContents[modalContentId].split('.')[0]) : ""  }
                        <p style={{ paddingTop: "1%" }} className={ style.modalParagraphe2 }>
                          { (OverlayContents[modalContentId] != undefined) ? (OverlayContents[modalContentId].split('.')[1]) : "" }
                        </p>
                        <p style={{ paddingTop: "1%" }} className={ style.modalParagraphe3 }>
                          { (OverlayContents[modalContentId] != undefined) ? (OverlayContents[modalContentId].split('.')[2]) : "" }
                        </p>
                    </p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className={ style.overlayTitle } style={{ color: "#046059", fontWeight: 'bold', textAlign: "center" }}>
                      { OverlayTitles[modalContentId] }
                    </div>
                    <div className="text-gray-500" style={{ textAlign: "center" }}>
                      { OverlayCountry[modalContentId] }
                    </div>
                  </figcaption>
                </div>
              </figure>
            </ModalContent>
          </Modal>
          
        <div id="hs-vertically-centered-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
          <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
            <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-300 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700" style={{ borderBlockEndColor: "#046059" }}>
                <h3 class="font-bold text-gray-800 dark:text-white" style={{ color: "black", textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
                { OverlayTitles[modalContentId] }
                </h3>
                <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-vertically-centered-modal">
                  <span class="sr-only">Close</span>
                  <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div class="p-4 overflow-y-auto">
                <p class={ style.mobileModalText } style={{ textAlign: "center", lineHeight: "25px !important" }}>
                  { OverlayContents[modalContentId] }
                </p>
              </div>
            </div>
          </div>
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

          <div class="grid grid-cols-3 gap-4">
            
            <div>
              <div class="flex justify-center">
                <div
                  class="block max-w-sm rounded-lg text-center" style={{ height: "200px", width: "270px", backgroundColor: "#FFFFFF", boxShadow: "0px 0px 25px 5px rgba(215, 205, 205, 0.3)", borderRadius: "20px" }}>
                  <div
                    class="py-3 px-6">
                    &nbsp;
                  </div>
                  <div class="p-6">
                    <h5
                      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Special title treatment
                    </h5>
                    <p class="mb-4 text-base text-teal-800" style={{
                      fontSize: "20px",
                      fontWeight: "700",
                    }}>
                      Méthode Harkness <br/><br/> (USA)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-center">
                <div
                  class="block max-w-sm rounded-lg text-center" style={{ height: "200px", width: "270px", backgroundColor: "#FFFFFF", boxShadow: "0px 0px 25px 5px rgba(215, 205, 205, 0.3)", borderRadius: "20px" }}>
                  <div
                    class="py-3 px-6">
                    &nbsp;
                  </div>
                  <div class="p-6">
                    <h5
                      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Special title treatment
                    </h5>
                    <p class="mb-4 text-base text-teal-800" style={{
                      fontSize: "20px",
                      fontWeight: "700",
                    }}>
                        Lab Creative <br/><br/> (Canada)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex justify-center">
                <div
                  class="block max-w-sm rounded-lg text-center" style={{ height: "200px", width: "270px", backgroundColor: "#FFFFFF", boxShadow: "0px 0px 25px 5px rgba(215, 205, 205, 0.3)", borderRadius: "20px" }}>
                  <div
                    class="py-3 px-6">
                    &nbsp;
                  </div>
                  <div class="p-6">
                    <h5
                      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Special title treatment
                    </h5>
                    <p class="mb-4 text-base text-teal-800" style={{
                      fontSize: "20px",
                      fontWeight: "700",
                    }}>
                      Certificat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-8">
              <div class="flex justify-center">
                <div
                  class="block max-w-sm rounded-lg text-center" style={{ height: "200px", width: "270px", backgroundColor: "#FFFFFF", boxShadow: "0px 0px 25px 5px rgba(215, 205, 205, 0.3)", borderRadius: "20px" }}>
                  <div
                    class="py-3 px-6">
                    &nbsp;
                  </div>
                  <div class="p-6">
                    <h5
                      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Special title treatment
                    </h5>
                    <p class="mb-4 text-base text-teal-800" style={{
                      fontSize: "20px",
                      fontWeight: "700",
                    }}>
                      Méthode Harkness <br/><br/> (USA)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-8">
              <div class="flex justify-center">
                <div
                  class="block max-w-sm rounded-lg text-center" style={{ height: "200px", width: "270px", backgroundColor: "#FFFFFF", boxShadow: "0px 0px 25px 5px rgba(215, 205, 205, 0.3)", borderRadius: "20px" }}>
                  <div
                    class="py-3 px-6">
                    &nbsp;
                  </div>
                  <div class="p-6">
                    <h5
                      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Special title treatment
                    </h5>
                    <p class="mb-4 text-base text-teal-800" style={{
                      fontSize: "20px",
                      fontWeight: "700",
                    }}>
                        Lab Creative <br/><br/> (Canada)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="my-8">
              <div class="flex justify-center">
                <div
                  class="block max-w-sm rounded-lg text-center" style={{ height: "200px", width: "270px", backgroundColor: "#FFFFFF", boxShadow: "0px 0px 25px 5px rgba(215, 205, 205, 0.3)", borderRadius: "20px" }}>
                  <div
                    class="py-3 px-6">
                    &nbsp;
                  </div>
                  <div class="p-6">
                    <h5
                      class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Special title treatment
                    </h5>
                    <p class="mb-4 text-base text-teal-800" style={{
                      fontSize: "20px",
                      fontWeight: "700",
                    }}>
                      Certificat
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
        </div>

        </section>

        <section className={style.signup__container}>
          
          <div class="grid grid-cols-6 gap-4">
            <div class="col-start-1 col-end-3 w-80 ml-32" style={{ borderBlockEndColor: "#0d9488", borderBlockEndWidth: "2px",}}></div>
            <div class="col-end-7 col-span-3 w-80 mr-32" style={{ borderBlockEndColor: "#0d9488", borderBlockEndWidth: "2px",}}></div>
          </div>

          <p className={style.signup__title} style={{ paddingBottom: "20px", marginTop: "20px" }}>
            <span className={style.signup__text} style={{ fontSize: "32", fontWeight: "800",  }}>
              Nous serons plus que ravis de vous compter parmis nous
            </span>
            <br />
              <p style={{ marginTop: "20px"}}>
              Contribuer à votre croissance numérique !
              <p style={{ marginTop: "1%" }}>inscrivant à l'une de nos programmes offertes et devenez le meilleur</p>
              </p>
          </p>
        
          <button
                        style={{  borderRadius: "20px", textTransform: "initial", color: "black", height: "45px", fontWeight: "700"  }}
                        type="button"
                        class="inline-block bg-warning px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-yellow-500">
                        Démarrez votre formation
          </button>

        </section>

        <div className={style.parent}>
            <img src={ contactImg } />
            <div className={style.inner}>
              <img src={ contactImg2 } />

              <div className={style.contact_content}>
                <div class="grid grid-cols-2" style={{ width: "100%", }}>
                  <div>
                    <div class="grid grid-rows-4 grid-flow-col">
                      <div style={{ color: "#FCCC25", fontWeight: "800", fontSize: "35px", marginRight: "auto" }}>Contactez-nous</div>
                      <div>
                        <ul style={{ textAlign: "start", color: "white", display: "grid" }}>
                          <li style={{ display: "inline-flex" }}>
                              <img  src={ contactIcon1} style={{ height: "30px" }}/> 
                              <span style={{ marginTop: "1.5%", marginLeft: "3px" }}>N°6 Tabora, Kinshasa/Gombe</span>
                          </li>
                          <li style={{ paddingTop: "12px", display: "inline-flex" }}>
                              <img  src={ contactIcon2} style={{ height: "30px" }}/> 
                              <span style={{ marginTop: "1.5%", marginLeft: "3px" }}>+243 999 084 177</span>
                          </li>
                          <li style={{ paddingTop: "12px", display: "inline-flex" }}>
                              <img  src={ contactIcon3} style={{ height: "30px" }}/> 
                              <span style={{ marginTop: "1.5%", marginLeft: "3px" }}>Academie@elite.com</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div class="grid grid-rows-2 grid-flow-col">
                      <div>
                       <span style={{ color: "white", fontWeight: "600", fontSize: "35px" }}>Besoin d'aide ?</span>
                      <br /><br />
                      <p style={{ color: "white", fontWeight: "500", fontSize: "15px" }}>
                          Vous avez une question ? Notre équipe est là pour vous répondre du lundi au vendredi de 09h00 à 19h00 GTM
                      </p>
                      </div>

                      <div style={{ marginTop: "-15%" }}>
                      <ul style={{ textAlign: "start", color: "white", display: "grid", justifyContent: "center" }}>
                          <li style={{ display: "inline-flex" }}>

                          <input  id="username" 
                                  type="text" 
                                  value="Adresse E-mail"
                                  style={{ paddingLeft: "30px", backgroundColor: "rgba(255, 255, 255, 0.35)", color: "#ffffff", borderRadius: "20px", height: "46px", width: "418px" }} />
                          </li>

                          <li style={{ paddingTop: "12px", display: "inline-flex" }}>
                            <textarea style={{  paddingLeft: "30px", paddingTop: "30px", backgroundColor: "rgba(255, 255, 255, 0.35)", color: "#ffffff", borderRadius: "20px", height: "148px", width: "418px" }}>
                                Message
                            </textarea>
                          </li>
                          <li style={{ paddingTop: "12px", display: "inline-flex" }}>
                              <button className={ style.contact_btn } style={{  }}>
                                  Envoyer
                              </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

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
