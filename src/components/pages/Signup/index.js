import * as React from "react";
import Page from "../../PageTemplate";
import * as style from "./Signup.module.scss";
const Enregistrement = () => {
  const renderSignupPage = () => {
    return (
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc8Jrp_vrE1oIp_7JG-RmqNSWYnebBifhJLDnVN9VnQVWThrw/viewform?usp=sf_link"
        height="1300"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        className={style.iframe_form}
      >
        Chargement…
      </iframe>
    );
  };

  return <Page>{renderSignupPage}</Page>;
};

export default Enregistrement;
