import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const blog = ({ data }) => {

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
        <Header />
        <div className="div-block-99">
          <div className="div-block-90">
            <div className="section-1-pricing">
              <div className="section-1-pricing-wrap-copy2">
                <h1 className="heading-15">Design Matters</h1>
                <div className="text-block-48">Creative ideas, practical tips and insider info — the Superside blog helps your team get great design done at scale.</div><img src="images/Group-1000001707.svg" loading="lazy" alt="" className="image-66-copy" />
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-102">
          <div className="div-block-103">
            <div className="w-dyn-list">
              <div role="list" className="collection-list w-dyn-items">
                <div role="listitem" className="collection-item w-dyn-item">
                  <div className="div-block-104"><img src loading="lazy" alt="" className="image-68" />
                    <div className="text-block-49">Lorem Ipsum Dolor</div>
                    <div className="text-block-51">Lorem ipsum dolor</div>
                    <div className="div-block-105">
                      <div className="div-block-106"><img height={35} loading="lazy" width={35} src alt="" className="image-69" />
                        <div className="text-block-50">Andres Levintone &nbsp;&nbsp;|</div>
                      </div>
                      <div className="text-block-50-copy">5 min read</div>
                    </div>
                    <div className="text-block-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum.</div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
              <div role="navigation" aria-label="List" className="w-pagination-wrapper pagination">
                <a href="#" aria-label="Previous Page" className="w-pagination-previous previous"><svg className="w-pagination-previous-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)">
                  <path fill="none" stroke="currentColor" fillRule="evenodd" d="M8 10L4 6l4-4" />
                </svg>
                  <div className="w-inline-block">Previous</div>
                </a>
                <a href="#" aria-label="Next Page" className="w-pagination-next next">
                  <div className="w-inline-block">Next</div><svg className="w-pagination-next-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" transform="translate(0, 1)">
                    <path fill="none" stroke="currentColor" fillRule="evenodd" d="M4 2l4 4-4 4" />
                  </svg>
                </a>
                <div aria-label="Page 1 of 1" role="heading" className="w-page-count page-count" />
              </div>
            </div>
            <div className="text-block-53">Tags</div>
            <div className="div-block-107">
              <div className="text-block-54">Design Inspiration</div>
              <div className="text-block-54">Brand Management</div>
              <div className="text-block-54">Advertising Design</div>
              <div className="text-block-54">Digital Marketing</div>
              <div className="text-block-54">Presentation Design</div>
              <div className="text-block-54">Superside News</div>
            </div>
            <div className="div-block-107">
              <div className="text-block-54">Design Ops</div>
              <div className="text-block-54">UX Design</div>
              <div className="text-block-54">UI Design</div>
            </div>
          </div>
        </div>
        <Footer />
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/blog.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default blog;
