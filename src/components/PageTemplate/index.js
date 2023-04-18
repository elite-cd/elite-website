import { graphql, useStaticQuery } from "gatsby";
import T from "prop-types";
import * as React from "react";
import Footer from "../Footer";
import * as style from "./style.module.scss";
import TwMenu from "../TwMenu";
import Menu from "../TwCaroussel/Menu";

const Page = ({ children, activeRoute }) => {
  const data = useStaticQuery(graphql`
    query {
      courses: allMarkdownRemark(
        limit: 10
        sort: { frontmatter: { id: ASC } }
      ) {
        edges {
          node {
            frontmatter {
              id
              title
              timeline
              description
              shortDescription
              outcomes
              price
              slug
              image {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              icon1 {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              icon2 {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);
  const courses = data.courses.edges.map((edge) => edge.node.frontmatter);
  const whiteMenu = activeRoute === "/" ? false : true;

  return (
    <div className={style.page}>
      {/* { activeRoute !== "/" ? (<TwMenu courses={courses} activeRoute={activeRoute} />) : <Menu activeRoute={activeRoute} items={courses}/> } */}
      <Menu activeRoute={activeRoute} items={courses} whiteMenu={whiteMenu}/>
      { activeRoute !== "/" ? (<TwMenu items={courses} isWhiteMenu={whiteMenu}/>) : null}

      {typeof children === "function" ? children(courses) : children}
      <Footer courses = {courses} />
    </div>
  );
};

Page.propTypes = {
  children: T.any,
  courses: T.array,
};

export default Page;
