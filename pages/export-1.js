import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const export1 = ({ data }) => {

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
            <div className="text-block-63">How Would You Like To Export The Pages?</div>
            <div className="div-block-133 aaaaa">
              <a href="#" className="link-block-18 w-inline-block"><img src="images/Group-1483.svg" loading="lazy" alt="" /></a>
              <a href="#" className="link-block-18 w-inline-block"><img src="images/Group-1484.svg" loading="lazy" alt="" /></a>
            </div>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/export1.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default export1;
