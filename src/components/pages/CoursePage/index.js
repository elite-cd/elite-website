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

const CoursePage = ({ course, otherCourses }) => {
  const outcomesList = course.outcomes.split(",");

  const renderCoursePage = () => (
    <React.Fragment>
      <div className={style.container}>
        <div className={style.header}>

        </div>
        <section className={style.hero}>
          <StaticImage
            className={style.hero__image}
            src={"../../../assets/images/banner01.png"}
            objectFit={"cover"}
          />
          <div className={style.hero__overlay}>
            <div className={style.overlay_left}>
              <p className={style.course__title}>{`${course.title}`}</p>
              <p className={style.course__desc}>{course.shortDescription}</p>
              <ButtonRounded
                url={ROUTES.SIGNUP}
                text={"Démarez votre formation"}
                rightIcon={faCircleArrowRight}
              />
            </div>
            <div className={style.overlay_right}>
              <p className={style.course__title_module}>{`Modules`}</p>
              <ul className={style.course__outcomes_list}>
                {outcomesList.map((item, i) => {
                  return (
                    <li className={style.course__outomes} key={`outcome-${i}`}>
                      <span className={style.course__outomes_icon}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      {item.trim()}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
        <section className={style.details}>
          <div className={style.courses__section}>
            {otherCourses.map((item, i) => {
              const courseLink = `/courses/${item.slug}`;
              return (
                <div className={style.other__item}>
                  <Link to={courseLink}>
                    <GatsbyImage
                      objectFit={"contain"}
                      alt={`${item.title} image`}
                      className={style.other__image}
                      image={getImage(item.image)}
                    />
                    <p className={style.other__title}> {item.title} </p>
                    <p className={style.other__timeline}>{item.timeline}</p>
                    <hr className={style.other__divider} />
                    <p className={style.other__description}>
                      {item.shortDescription}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={style.course__detail}>
            <StaticImage
              className={style.course__preview}
              src={"../../../assets/images/img-aside.png"}
              objectFit={"cover"}
            />
            <p className={style.preview__title}>Overview</p>
            <p className={style.preview__description}>{course.description}</p>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
  return <Page activeRoute={ROUTES.ACADEMY}>{renderCoursePage}</Page>;
};

export default CoursePage;
