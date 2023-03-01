import { GatsbyImage, getImage } from "gatsby-plugin-image";
import T from "prop-types";
import * as React from "react";
import { ButtonLink } from "../../../Button";
import * as style from "./CourseItem.module.scss";
const CourseItem = ({
  title,
  timeline,
  price,
  descTitle,
  description,
  slug,
  outcomes,
  outlined,
  image,
}) => {
  const classNameVariation = outlined ? "__outlined" : "";

  return (

    <div className={style.wrapper}>
      <GatsbyImage
        fluid={image.childImageSharp.fluid}
        objectFit={"contain"}
        alt={`${title} image`}
        className={style.item__image}
        image={getImage(image)}
      />
      <div className={style["item" + classNameVariation]}>
        
        <div className={style.header}>
          <h3 className={style["headertitle" + classNameVariation]}>{title}</h3>
        </div>

        <div className={style.body}>

          <div className={style.sup_body}>
            <h3 className={style.bodytitle}>{descTitle}</h3>
            <p className={style.outcomes}>{description}</p>
          </div>

          <div className={style.sub_body}>
            <p className={style.text_bold}>
              Durée: <span className={style.text_regular}>{timeline}</span>
            </p>
            <p className={style.text_bold}>
              Prix: <span className={style.text_regular}>{price}$/mois</span>
            </p>
          </div>

        </div>
        
        <div className={style.btn_container}>
          {outlined ? (
            <ButtonLink
              url={`/courses/${slug}`}
              className={"button__primary"}
              text={"En savoir plus"}
            />
          ) : (
            <ButtonLink
              url={`/courses/${slug}`}
              className={"button__outlined"}
              text={"En savoir plus"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

CourseItem.propTypes = {
  title: T.string.isRequired,
  timeline: T.string,
  descTitle: T.string.isRequired,
  outcomes: T.arrayOf(T.string),
  outlined: T.bool,
};

export default CourseItem;
