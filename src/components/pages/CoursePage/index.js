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

import img1_base_programmation from "../../../assets/images/pexels-katerina-holmes-5905700.jpg"
import img2_base_programmation from "../../../assets/images/pexels-anna-tarazevich-14751274.jpg"

import img1_aplhabetisation_num from "../../../assets/images/img_2_b.jpg"
import img2_aplhabetisation_num from "../../../assets/images/pexels-mart-production-7550542.jpg"

import img1_immersion from "../../../assets/images/pexels-mart-production-7550298.jpg"
import img2_immersion from "../../../assets/images/pexels-cottonbro-studio-5076519.jpg"

const CoursePage = ({ course, otherCourses }) => {
  const outcomesList = course.outcomes.split(",");

  const imgList = {
    img1: "",
    img2: ""
  }

  switch (course.slug) {
    case "immersion-en-entreprise":
        imgList.img1 = img1_immersion
        imgList.img2 = img2_immersion      
      break;

    case "base-programmation":
        imgList.img1 = img1_base_programmation
        imgList.img2 = img2_base_programmation
      break;
    
    case "alphabetisation-numerique":
        imgList.img1 = img2_aplhabetisation_num
        imgList.img2 = img1_aplhabetisation_num
      break;
  
    default:
      break;
  }

  const renderCoursePage = () => (
    <React.Fragment>
      <div className={style.container}>
        <div className={style.header}>

        </div>
        <section className={style.hero}>
          
          <StaticImage
            className={style.hero__image}
            src={ imgList.img2 }
            objectFit={"cover"}
          />

          <div className={style.hero__overlay}>
            <div className={style.overlay_left}>

            <Link to={ROUTES.SIGNUP} className={ style.customRoundedBtn }>
                    <div style={{ height: "100%", width: "100%" }}>
                      <div style={{ height: "30%" }}></div>
                        
                      <div style={{ height: "40%", display: "inline-flex" }}>
                          Démarez votre formation &nbsp;
                        <span style={{ marginTop: "1%" }}><FontAwesomeIcon icon={  faCircleArrowRight  } /></span>
                      </div>

                      <div style={{ height: "30%" }}></div>
                    </div>
              </Link>

            </div>
            <div className={style.overlay_right}>
              <p className={style.course__title_module}>{`Modules`}</p>
              <br />

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
                   
                      <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
                        <GatsbyImage
                          objectFit={"contain"}
                          alt={`${item.title} image`}
                          className={style.other__image}
                          image={getImage(item.image)}
                        />
                      </div>

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
              src={ imgList.img1 }
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
