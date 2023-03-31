import { GatsbyImage, getImage } from "gatsby-plugin-image";
import T from "prop-types";
import * as React from "react";
import { ButtonLink } from "../../../Button";
import * as style from "./CourseItem.module.scss";
import { Link } from "gatsby";

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
  icon1,
}) => {
  const classNameVariation = outlined ? "__outlined" : "";

  return (

    <div className={style.wrapper}>
     
      <div className={ style.ImgCard }>        
        <div className={ style.leftImgCard }>
        </div>

        <div className={style.centerImgCard}>
          <GatsbyImage
            objectFit={"contain"}
            alt={`${title} image`}
            className={style.item__image}
            image={getImage(icon1)}
          />
        </div>
        
        <div className={ style.rightImgCard }>
        </div>
      </div>

      <div className={style["item" + classNameVariation]} style={{ width: '100%' }}>
        
        <div className={style.header}>
          <h3 className={style["headertitle" + classNameVariation]}>{title}</h3>
        </div>

        <div className={style.body}>

          <div className={style.sup_body}>
            <h3 className={style.bodytitle}>{descTitle}</h3>
            <p className={style.outcomes} style={ classNameVariation ? ({color: "black"}): ({color: "white"}) }>{description}</p>
          </div>

          <div className={style.sub_body}>
            <p className={style.text_bold}>
              &nbsp;
            </p>
            <p className={style.text_bold}>
              Durée: <span className={style.text_regular}>{timeline}</span>
            </p>
          </div>

        </div>
        
        <div className={style.btn_container}>
          {outlined ? (

              <button
                        style={{  borderRadius: "10px", textTransform: "initial", color: "white", height: "40px", backgroundColor: "#00A19A"  }}
                        type="button"
                        class="inline-block px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#046059] transition duration-150 ease-in-out hover:bg-yellow-500">
                        En savoir plus
              </button>

          ) : (
            <button
              style={{  borderRadius: "10px", textTransform: "initial", color: "#00A19A", height: "40px", backgroundColor: "white"  }}
              type="button"
              class="inline-block bg-white px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#046059] transition duration-150 ease-in-out hover:bg-teal-500">
              En savoir plus
            </button>
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
