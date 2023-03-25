import * as React from "react";
import { ROUTES } from "../../../common/constants";
import Page from "../../PageTemplate";
import * as style from "./Contact.module.scss";
const Contact = () => {
  const renderContactForm = () => {
    return (
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScMVPhAsL0RWr4QnOm-vS5Ml45Ol5bUbCvPVwAnkclaKnXKRQ/viewform?embedded=true"
        height="1100"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        className={style.iframe_form}
      >
        Chargement…
      </iframe>
    );
  };
  return <Page activeRoute={ROUTES.CONTACT}>{renderContactForm}</Page>;
};

export default Contact;
