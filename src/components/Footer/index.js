import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import * as style from "./style.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style["footer__elite"]}>
        <h3 className={style["footer__title"]}>Elite</h3>
        <ul>
          <li>Qui sommes nous ?</li>
          <li>Opportunités</li>
          <span className={style["footer__section"]}>Pour les entreprises</span>
          <li>Recherche des talents</li>
          <li>Nous faire un don</li>
        </ul>
      </div>
      <div className={style["footer__contact"]}>
        <h3 className={style["footer__title"]}>Contact</h3>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +243 999 084 177
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Academie@elite.cd
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationPin} /> Tabora N⁰6, Kinshasa Gombe
          apt 3b. Ref : Orca
        </p>
      </div>
    </div>
  );
};

export default Footer;
