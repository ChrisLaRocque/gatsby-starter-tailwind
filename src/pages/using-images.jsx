import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

export default function UsingImages({ data }) {
  console.log(data);
  const image = getImage(data.file.childImageSharp);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <title>Using GatsbyImage and Tailwind</title>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold py-16">
          Using{" "}
          <a className="text-purple-600" href="https://www.gatsbyjs.com/">
            GatsbyImage&nbsp;
          </a>
          <span role="img" aria-label="Picture emoji">
            🖼️
          </span>
        </h1>

        <p className="mt-3 text-2xl">
          See this code at{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/using-images.jsx
          </code>
        </p>
        <div className="mt-9 text-xl leading-7">
          <code className="p-1 font-mono text-lg bg-gray-100 rounded-md block">
            {`<GatsbyImage />`}
          </code>
          <p className="py-4">
            <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
              {`<GatsbyImage />`}
            </code>{" "}
            is meant to be used for all dynamic images, ie images that have{" "}
            <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
              gatsbyImageData
            </code>
          </p>
          <GatsbyImage image={image} alt="Forest image from GatsbyImage" />
        </div>
        <div className="mt-9 text-xl leading-7">
          <code className="p-1 font-mono text-lg bg-gray-100 rounded-md block">
            {`<StaticImage />`}
          </code>
          <p className="py-4">
            <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
              {`<StaticImage />`}
            </code>{" "}
            is meant to be used for images with known paths and without{" "}
            <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
              gatsbyImageData
            </code>
            , ie images in your filesystem not being sourced by{" "}
            <code className="p-1 font-mono text-lg bg-gray-100 rounded-md">
              gatsby-source-filesystem
            </code>
          </p>
          <StaticImage
            src="../images/homepage-image.jpg"
            alt="Forest image from StaticImage"
          />
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://gatsbyjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img
            alt="Gatsby G Logo"
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
          />
        </a>
      </footer>
    </div>
  );
}
UsingImages.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}),
      }),
    }),
  }).isRequired,
};
/**
 * Query the Gatsby GraphQL data layer for 'dynamic' image.
 * The query result shows up as the data prop in the page component above ^^^
 * Check out gatsby-config.js to see how the files from /images/ are added to the data layer using gatsby-soruce-filesystem.
 */
export const query = graphql`
  query HomepageImage {
    file(name: { eq: "homepage-image" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
