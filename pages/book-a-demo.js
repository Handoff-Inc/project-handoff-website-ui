import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const bookADemo = ({ data }) => {

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
          <div className="div-block-2-book-a-demo">
            <div className="div-block-432 _40">
              <div className="text-block-105">Book A Demo</div>
              <div className="form-block-11 w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="get"><label htmlFor="name" className="field-label-24">Name</label><input type="text" className="text-field-15 w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your Name Here" id="name" /><label htmlFor="name-2" className="field-label-24">Email</label><input type="text" className="text-field-15 w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="Enter your email address" id="name-2" /><label htmlFor="name-3" className="field-label-24">Company name</label><input type="text" className="text-field-15 w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder="Enter your company name" id="name-3" /><label htmlFor="name-4" className="field-label-24">Contact number</label><input type="text" className="text-field-15 w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder="Enter your phone number" id="name-4" /><label htmlFor="field" className="field-label-24">Enquiry</label><select id="field" name="field" data-name="Field" className="text-field-15 w-select">
                  <option value="Select the enquiry">Select the enquiry</option>
                </select><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="submit-button-5 w-button" /></form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
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
    .readFileSync("public/content/bookADemo.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default bookADemo;
