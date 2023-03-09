import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-intl";
import T from "prop-types";
import * as React from "react";
import ButtonRounded from "../Button/button-rounded";
import * as style from "./Carousel.module.scss";
import Slider from "react-slick";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel = ({ items }) => {
  const intl = useIntl();

  let slideRef = React.useRef(null);
  const mItem = [items[0]];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: null,
    prevArrow: null,
    className: style["slides__container"],
  };

  const osFeatures = {
    osName : "",
    osBrowser: ""
  }

  const osfunction = () =>
  {
    let os = navigator.userAgent;
    let finalOs="";
    if (os.search('Windows')!==-1){
        finalOs="Windows"; 
    }
    else if (os.search('Mac')!==-1){
        finalOs="MacOS";
    }
    else if (os.search('X11')!==-1 && !(os.search('Linux')!==-1)){
        finalOs="UNIX";
    }
    else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
        finalOs="Linux";
    }
        osFeatures.osName = finalOs;
  }
  osfunction();

  return (
    <section>
      <Slider {...settings}>
        {mItem.map((item, i) => (
          <div ref={slideRef} key={`value-${i}`} className={style["slide"]}>
            <div className={style.item}>
              <GatsbyImage
                fluid={item.image.childImageSharp.fluid}
                alt={`carousel-${i}`}
                objectFit={"cover"}
                className={style.bg}
                image={getImage(item.image)}
              />
              <StaticImage
                alt="bg"
                className={style.bg_xs}
                objectFit={"fill"}
                src="../../assets/images/bg_mobile.png"
              />
              <div className={style.overlay}>
                <h3 className={style.title}>
                  {intl.formatMessage({ id: item.title })}
                </h3>
                <div className={style.subtitleContainer}>
                  <p className={style.subtitle}>
                    {intl.formatMessage({ id: item.subtitle })}
                  </p>
                </div>
                <p className={style.desc_xs}>
                  {intl.formatMessage({ id: item.desc })}
                </p>
                <h3 className={style.count_xs}>
                  +{item.students}
                  <br />
                  <span className={style.count__title}>apprenants</span>
                </h3>
                
                <Link to={item.buttonUrl} className={ style.customRoundedBtn }>
                    <div style={{ height: "100%", width: "100%" }}>
                      <div style={{ height: "30%" }}></div>
                        
                      <div style={{ height: "40%", display: "inline-flex" }}>
                        <span className={ osFeatures.osName === "MacOS" ? style.mac_btnTxt : "" }>Démarrez Votre formation &nbsp;
                        </span>
                        <span style={{ marginTop: "1%" }}><FontAwesomeIcon icon={  faCircleChevronRight  } /></span>
                      </div>

                      <div style={{ height: "30%" }}></div>
                    </div>
                </Link>

                <p className={ osFeatures.osName === "MacOS" ? style.mac_desc : style.desc}>
                  {intl.formatMessage({ id: item.desc })}
                </p>
                <h3 className={style.count}>
                  +{item.students}
                  <br />
                  <span className={style.count__title}>apprenants</span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

Carousel.propTypes = {
  items: T.array,
};

export default Carousel;
