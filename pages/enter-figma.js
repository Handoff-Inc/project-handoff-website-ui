import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const enterFigma = ({ data }) => {

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        {/* Title Tag */}
        <title>{data.titleTag}</title>

        {/* Meta Description */}
        <meta content={data.metaDescription} name="description" />

        {/* OG Title */}
        <meta content={data.ogTitle} property="og:title" />

        {/* OG Description */}
        <meta content={data.ogDescription} property="og:description" />

        {/* OG Image */}
        <meta content={data.ogImage} property="og:image" />

        {/* Twitter Title */}
        <meta content={data.twitterTitle} property="twitter:title" />

        {/* Twitter Description */}
        <meta content={data.twitterDescription} property="twitter:description" />

        {/* Twitter Image */}
        <meta content={data.twitterImage} property="twitter:image" />

        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* Favicon*/}
        <link href="images/favicon.png" rel="icon" type="image/png" />

        {/* Webclip */}
        <link href="images/webclip.png" rel="apple-touch-icon" />

        {/* Fall Back CSS */}
        {/* [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] */}
      </Head>

      <div>
        <div className="div-block-100">
          <div className="div-block">
            <a href="index.html" className="brand-2 w-nav-brand">
              <div className="text-block-16">Handoff</div>
            </a>
            <div className="div-block-124"><img src="images/Ellipse-4.svg" loading="lazy" alt="" className="image-75" />
              <div className="text-block-62">John Doe</div><img src="images/Frame-1487.svg" loading="lazy" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="div-block-125">
            <div className="text-block-63">Enter The Figma ID For Your Designs</div>
            <div className="text-block-64">We'll automatically convert your designs to code with one click.</div>
            <div className="form-block-2 w-form">
              <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form-2"><label htmlFor="Figma-Id" className="field-label-10">Figma&nbsp;ID*</label><input type="text" className="text-field-5 w-input" maxLength={256} name="Figma-Id" data-name="Figma Id" placeholder="Enter your Figma ID" id="Figma-Id" /><input type="submit" defaultValue="Enter ID" data-wait="Please wait..." className="submit-button-3 w-button" /></form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <div className="text-block-65">How to get Figma ID?</div>
            <div className="text-block-66">The file ID is the string of random alphanumeric characters found in the section of the URL after figma.com/file/<span className="text-span-6">ABCDEFG12345</span>/File-name</div>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/enterFigma.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default enterFigma;
