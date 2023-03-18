import { StaticImage } from "gatsby-plugin-image";
import T from "prop-types";
import * as React from "react";

const Logo = ({ className }) => {
  return (
    <StaticImage
      className={className}
      objectFit={"contain"}
      src={"../../assets/images/logo.png"}
      alt={"Logo elite"}
    />
  );
};

Logo.propTypes = {
  className: T.string,
};

export default Logo;
