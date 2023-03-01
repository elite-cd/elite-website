import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntl } from "gatsby-plugin-intl";
import T from "prop-types";
import * as React from "react";
import { ROUTES } from "../../../common/constants";
import ButtonRounded from "../../Button/button-rounded";
import Carousel from "../../Carousel";
import Page from "../../PageTemplate";
import CourseItem from "./CourseItem";
import * as style from "./Home.module.scss";
import GoogleMapFrame from "../../GooglMap";
import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const OverlayContents = [
  "Les programmes offerts sont soigneusement préparés par des mentors congolais qui ont bénéficié d’une éducation internationale au Canada et aux USA et évoluent dans des entreprises de renom dans le domaine de la technologie telles que Microsoft (USA) et Rhetorik (Canada)",
  "Contrairement à l'enseignement traditionnel, nous disposons de coachs au détriment des enseignements. Ce modèle permet aux apprenants de développer une indépendance afin d'être orienté dans leur apprentissage. Ces coaches sont des professionnels de formation et de pratique dans le domaine de l’informatique.",
  "Notre salle d’apprentissage est un véritable laboratoire de créativité,innovation, collaboration,productivité en groupe dans le but de favoriser l’autonomie et l’intelligence collective",
  "Notre pédagogie se base sur l'échange des connaissances. Un système apprentissage autonome qui consiste à engager une discussion dans laquelle les apprenants participent et construisent le cours ensemble avec le coach (professeur) qui oriente les sujets",
  "Nos programmes sont dispensés dans un local où se situe une entreprise de renom dans la technologie qui dispose des clients internationaux. Cet emplacement permet aux apprenants de s’adapter au milieu professionnel et aussi d'avoir des connaissances en plus de ce qu’ils apprendront.",
  "A la fin de votre formation, vous aurez un certificat reconnu oú que vous alliez qui atteste vos compétences et connaissances.",
];

const Home = ({ carouselItems, map }) => {
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
  const InternalPage = ({ courses }) => {
    return (
      <React.Fragment>
        <Carousel items={carouselItems} />
        <div className={style.row__center}>
          <h3 className={style.typography3}>
            {intl.formatMessage({ id: "content.homepage.elite.title" })}
            <span className={style.sitename}>
              {intl.formatMessage({ id: "content.homepage.elite.suffix" })}
            </span>
          </h3>
          <p className={style.typography6}>
            {intl.formatMessage({ id: "content.homepage.elite.decription" })}
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
              />
            ))}
          </div>
        </section>
        <h3 id="about" className={style.about__header}>
          Pourquoi choisir l'académie des élites ?
        </h3>
        <section className={style.about__container}>
          {renderOverlayComponent(overlayIndex)}
          <button id="1" onClick={handleClick} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-1"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/mentor.png"}
            />
            <p className={style.about__title}>
              Mentors de niveau international
            </p>
          </button>
          <button id="2" onClick={handleClick} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-2"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/qualify.png"}
            />
            <p className={style.about__title}>Coach Qualifiés et pratiquants</p>
          </button>
          <button id="3" onClick={handleClick} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-3"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/computer.png"}
            />
            <p className={style.about__title}>Lab Creative (Canada)</p>
          </button>
          <button id="4" onClick={handleClick} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-4"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/pedagogie.png"}
            />
            <p className={style.about__title}>Methode Harkness (USA)</p>
          </button>
          <button id="5" onClick={handleClick} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-5"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/professional.png"}
            />
            <p className={style.about__title}>
              Environnement Professionnel et Sérieux
            </p>
          </button>
          <button id="6" onClick={handleClick} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-6"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/certificat.png"}
            />
            <p className={style.about__title}>Certificat</p>
          </button>
        </section>
        <section className={style.signup__container}>
          <p className={style.signup__title}>
            <span className={style.signup__text}>
              Nous serons plus que ravis de vous compter parmis nous et
              contribuer à votre croissance numérique!
            </span>
            <br />
            Inscrivez-vous à l'un des nos programmes offerts et devenez le
            meilleur !
          </p>
          <ButtonRounded
            url={ROUTES.SIGNUP}
            text={"Démarrez votre formation aujourd'hui!"}
          />
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
