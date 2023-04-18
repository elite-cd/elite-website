import * as React from "react";
import * as style from "./menu.scss";
import T from "prop-types";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import img1 from "../../assets/images/formation-professionnelle.jpeg";
import img2 from "../../assets/images/pexels-mart-production-7550542.jpg";
import icon1 from "../../assets/images/Twitter_100px_black.png";
import icon2 from "../../assets/images/LinkedIn_100px_black.png";
import icon3 from "../../assets/images/Facebook_100px_black.png";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { ROUTES } from "../../common/constants";

const TwMenu = ({ items, isWhiteMenu }) => {
  const intl = useIntl();

  const [isOpen, toggle] = useState(false);
  const [isOpen2, toggle2] = useState(false);

  useEffect(() => {
    const subMenu = document.getElementById("subMenu");
    isOpen === true
      ? (subMenu.style.visibility = "visible")
      : (subMenu.style.visibility = "hidden");
  }, [isOpen]);

  const getSubMenu = (val) => {
    toggle(val);
  };

  const defaultMenu = {
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: "3",
    borderBlockEndColor: "#0d9488",
    borderBlockEndWidth: "2px",
  };
  const whiteStyle = {
    borderBlockEndColor: "#0d9488",
    borderBlockEndWidth: "2px",
  };
  const defaultIndextText =
    "text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90";
  const defaultText =
    "p-0 text-white hover:text-teal-400 focus:text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90";
  const whiteMenuText =
    "p-0 text-black hover:text-teal-400 focus:text-teal-400 disabled:text-black/30 lg:px-2 [&.active]:text-black/90";

  return (
    <nav
      class="lg:hidden xs:block relative flex w-full flex-wrap items-center justify-between py-3 text-white shadow-lg lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
      style={isWhiteMenu ? whiteStyle : defaultMenu}
    >
      <div class="absoulte flex w-full flex-wrap items-center justify-between px-6">
        <a href={ROUTES.INDEX}>
          <img
            class="block h-14 w-auto lg:hidden py-2"
            src={logo}
            alt="Elite"
          />
        </a>

        <div class="absoulte items-center">
          <button
            class="block border-0 bg-transparent py-2 px-7 text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent4"
            aria-controls="navbarSupportedContent4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class={
                  "h-10 w-10 " + (isWhiteMenu ? "text-black" : "text-white")
                }
              >
                <path
                  fill-rule="evenodd"
                  fill="currentColor"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>

        <div class="absoulte flex w-full flex-wrap items-center justify-between px-6">
          <div
            class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent4"
            data-te-collapse-item
            style={{ marginLeft: "5rem" }}
          >
            <ul
              class="list-style-none ml-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li class="p-2" data-te-nav-item-ref>
                <a
                  class={defaultIndextText}
                  href={ROUTES.INDEX}
                  data-te-nav-link-ref
                >
                  <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                    {intl.formatMessage({ id: "menu-item.label.home" })}
                  </span>
                </a>
              </li>
              <li class="p-2" data-te-nav-item-ref>
                <a
                  class={"flex " + (isWhiteMenu ? whiteMenuText : defaultText)}
                  href="#"
                  data-te-collapse-init
                  data-te-target="#navbarSupportedContent5"
                  aria-controls="navbarSupportedContent5"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  {intl.formatMessage({ id: "menu-item.label.academy" })}

                  <span class="ml-2 w-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </a>

                <div
                  class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto bg-teal-700"
                  id="navbarSupportedContent5"
                  data-te-collapse-item
                  style={{ marginLeft: "1rem" }}
                >
                  <ul
                    class="list-style-none ml-auto flex flex-col pl-0 lg:flex-row"
                    data-te-navbar-nav-ref
                  >
                    {items.map((item, i) => (
                      <li class="p-2 hover:bg-teal-600" data-te-nav-item-ref>
                        <a
                          class="text-white disabled:text-black/30 lg:px-2 [&.active]:text-black/90"
                          href={`/courses/${item.slug}`}
                          data-te-nav-link-ref
                          style={{ textAlign: "justify" }}
                        >
                          <span>{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li class="p-2" data-te-nav-item-ref>
                <a
                  class={isWhiteMenu ? whiteMenuText : defaultText}
                  href={ROUTES.ABOUT}
                  data-te-nav-link-ref
                >
                  {intl.formatMessage({ id: "menu-item.label.about" })}
                </a>
              </li>

              <li class="p-2" data-te-nav-item-ref>
                <a
                  class={isWhiteMenu ? whiteMenuText : defaultText}
                  href={ROUTES.CONTACT}
                  data-te-nav-link-ref
                >
                  {intl.formatMessage({ id: "menu-item.label.contacts" })}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

TwMenu.propTypes = {
  courses: T.array,
};

export default TwMenu;
