import { graphql, useStaticQuery } from "gatsby";
import T from "prop-types";
import * as React from "react";
import Footer from "../Footer";
import Menu from "../Menu";
import * as style from "./style.module.scss";
import TwMenu from "../TwMenu";

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
  return (
    <div className={style.page}>
      {activeRoute !== "/" && activeRoute !== "/academie" && (
        <TwMenu courses={courses} activeRoute={activeRoute} />
      )}

      {typeof children === "function" ? children(courses) : children}
      <Footer courses={courses} />
    </div>
  );
};

Page.propTypes = {
  children: T.any,
  courses: T.array,
};

export default Page;
