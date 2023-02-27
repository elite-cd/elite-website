import { useIntl } from "gatsby-plugin-intl";
import T from "prop-types";
import * as React from "react";
import { ROUTES } from "../../common/constants";
import Logo from "../Logo";
import DropdownItem from "./DropdownItem";
import * as style from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const Menu = ({ activeRoute, courses }) => {
  const intl = useIntl();
  const ACADEMY_COURSES =
    courses &&
    courses.map((course) => {
      return { text: course.title, url: `/courses/${course.slug}` };
    });
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <Logo className={style.logo} />
        <ul className={style["navlinks"]}>
          <input
            className={style.checkbox}
            type="checkbox"
            id="checkbox_toggle"
          />

          <label htmlFor="checkbox_toggle" className={style.hamburger}>
            &#9776;
          </label>

          <div className={style.menu}>
            <MenuItem
              isActive={activeRoute ? ROUTES.INDEX === activeRoute : true}
              url={ROUTES.INDEX}
              text={intl.formatMessage({ id: "menu-item.label.home" })}
            />

            <MenuItem
              url={ROUTES.ABOUT}
              text={intl.formatMessage({ id: "menu-item.label.about" })}
            />
            <MenuItem
              url={ROUTES.CONTACT}
              text={intl.formatMessage({ id: "menu-item.label.contacts" })}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

Menu.propTypes = {
  activeRoute: T.string,
};

export default Menu;
