import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ourMission = ({ data }) => {

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
          <div className="pricing">
            <h1 className="heading-173 aaa">Our mission</h1>
            <div className="text-block-108">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div className="div-block-458">
              <div className="div-block-459"><img src="images/image-36.svg" loading="lazy" alt="" />
                <div className="div-block-391">
                  <div className="text-block-109">Lorem ipsum dolor</div>
                  <div className="text-block-110">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</div>
                  <p className="paragraph-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
              <div className="div-block-459"><img src="images/image-36.svg" loading="lazy" alt="" />
                <div className="div-block-391">
                  <div className="text-block-109">Lorem ipsum dolor</div>
                  <div className="text-block-110">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</div>
                  <p className="paragraph-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-17">
          <div className="div-block-460">
            <div className="div-block-461">
              <div className="div-block-462"><img src="images/Rectangle-3843.png" loading="lazy" srcSet="images/Rectangle-3843-p-500.png 500w, images/Rectangle-3843.png 676w" sizes="(max-width: 751px) 90vw, (max-width: 991px) 676px, (max-width: 1919px) 43vw, 676px" alt="" /></div>
              <div className="div-block-463">
                <div className="text-block-111">Lorem ipsum dolor</div>
                <div className="text-block-110">Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</div>
                <p className="paragraph-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-21">
          <div className="div-block-20">
            <div className="div-block-22">
              <div className="text-block-38">Why Choose Us</div>
              <div className="text-block-39">Are you ready to grow your business with us?</div>
              <div className="text-block-40">Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet, consectetur adipiscing</div>
              <a href="#" className="button-4 w-button">Get Started</a>
            </div>
            <div className="div-block-23"><img src="images/Frame_1.svg" loading="lazy" alt="" className="image-63" /></div>
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
    .readFileSync("public/content/ourMission.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default ourMission;
