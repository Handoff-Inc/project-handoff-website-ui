import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Header2 from '../components/Header2';

const dashboard = ({ data }) => {

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
        <Header2 />
        <div className="export-code-popup">
          <div className="div-block-389">
            <div className="div-block-390">
              <div>
                <h1 className="heading-153">Export Code</h1>
              </div>
              <div><img src="images/Group-33880.svg" loading="lazy" alt="" /></div>
            </div>
            <div data-current="Tab 2" data-easing="ease" data-duration-in={300} data-duration-out={100} className="w-tabs">
              <div className="tabs-menu-2 w-tab-menu">
                <a data-w-tab="Tab 2" className="tab-link-tab-1-2 w-inline-block w-tab-link w--current">
                  <div className="text-block-84">HTML</div>
                </a>
                <a data-w-tab="Tab 3" className="tab-link-tab-1-2 w-inline-block w-tab-link">
                  <div className="text-block-84">CSS</div>
                </a>
                <a data-w-tab="Tab 4" className="tab-link-tab-1-2 w-inline-block w-tab-link">
                  <div className="text-block-84">JS</div>
                </a>
                <a data-w-tab="Tab 5" className="tab-link-tab-1-2 w-inline-block w-tab-link">
                  <div className="text-block-84">ASSETS</div>
                </a>
              </div>
              <div className="tabs-content w-tab-content">
                <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="100vw" alt="" className="image-103" /></div>
                <div data-w-tab="Tab 3" className="w-tab-pane"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="100vw" alt="" className="image-103" /></div>
                <div data-w-tab="Tab 4" className="w-tab-pane"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="100vw" alt="" className="image-103" /></div>
                <div data-w-tab="Tab 5" className="w-tab-pane"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="100vw" alt="" className="image-103" /></div>
              </div>
            </div>
            <a href="#" className="submit-button-4 short w-button">DOWNLOAD</a>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/dashboard.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default dashboard;
