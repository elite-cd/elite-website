import {
    faCircleArrowRight,
    faCircleCheck,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Link } from "gatsby";
  import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
  import React from "react";
  import { ROUTES } from "../../../common/constants";
  import Page from "../../PageTemplate";
  import * as style from "./Magazine.module.scss";
  import img1 from "../../../assets/images/bg.jpg";
  import img2 from "../../../assets/images/apropos-img.jpg";
  
  const CoursePage = () => {
    //const outcomesList = course.outcomes.split(",");
  
    const renderCoursePage = () => (
      <React.Fragment>
        <div className={style.container}>
          <div className={style.header}>
  
          </div>
          <section className={style.hero}>
  
            <img src={ img1 } className={style.hero__image} style={{  objectFit:"fill" }} />
  
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
                      <li className={style.course__outomes}>
                        <span className={style.course__outomes_icon}>
                          <FontAwesomeIcon icon={faCircleCheck} />
                        </span>
                        Some trim
                      </li>
                </ul>
              </div>
            </div>
          </section>
          <section className={style.details}>
            <div className={style.courses__section}>
              
                <div className={style.other__item}>
                    <Link to="/">
                        <div style={{ width: "50%", marginRight: "auto", marginLeft: "auto" }}>
                        <GatsbyImage
                          objectFit={"contain"}
                          alt="Some text"
                          className={style.other__image}
                          image={getImage(img1)}
                        />
                        </div>
                      
                      <p className={style.other__title}> Some title </p>
                      <p className={style.other__timeline}>Some sub tile</p>
                      <hr className={style.other__divider} />
                      <p className={style.other__description}>
                        Some description lorem ipsum
                      </p>
                    </Link>
                  </div>
            </div>
            <div className={style.course__detail}>
              
              <img src={ img2 } className={style.course__preview} style={{ objectFit: "cover" }}  />
              <p className={style.preview__title}>Overview</p>
              <p className={style.preview__description}>Course description</p>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
    return <Page activeRoute={ROUTES.ACADEMY}>{renderCoursePage}</Page>;
  };
  
  export default CoursePage;
  