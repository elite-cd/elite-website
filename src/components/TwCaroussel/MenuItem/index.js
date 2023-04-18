import { Link } from "gatsby";
import T from "prop-types";
import * as React from "react";
import * as style from "./MenuItem.module.scss";

const MenuItem = ({ isActive, text, url, itemClass }) => {
  const activeClass = " bg-teal-600 text-white"

  console.log('====================================');
  console.log(isActive);
  console.log('====================================');
  return (
    
    <li class="nav-item">
        <a  class={ itemClass + (isActive ? activeClass : "")  }
            href={url}
        >
            {text}
        </a>
    </li>

  );
};

MenuItem.propTypes = {
  isActive: T.bool,
  text: T.string.isRequired,
  url: T.string.isRequired,
};

export default MenuItem;
