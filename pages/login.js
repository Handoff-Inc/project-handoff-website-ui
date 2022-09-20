import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const login = ({ data }) => {

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
        <div>
          <div className="div-block-28">
            <div className="div-block-88">
              <h1 className="heading-56">Sign In</h1>
              <div className="w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="get"><label htmlFor="email" className="field-label-8">Email</label><input type="email" className="text-field-3 w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter your email address" id="email" required /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
              <div className="div-block-89">
                <a href="#" className="button-16 w-button">Sign In</a>
                <a href="#" className="link-block-14 w-inline-block"><img src="images/image-35_1.svg" loading="lazy" alt="" className="image-14" />
                  <h1 className="heading-57">Sign In with Google</h1>
                </a>
                <a href="#" className="link-block-15 w-inline-block"><img src="images/Vector-2.svg" loading="lazy" width={13} alt="" className="image-14" />
                  <h1 className="heading-58">Sign In with Facebook</h1>
                </a>
              </div>
              <h3 className="heading-60">Don't have an account? <a href="#" className="link-5">Sign Up</a>
              </h3>
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
    .readFileSync("public/content/login.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default login;
