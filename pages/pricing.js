import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const pricing = ({ data }) => {

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
            <h1 className="heading-173 aaa">Pricing &amp; Plans</h1>
            <div className="text-block-108">This is some text inside of a div block.Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div className="div-block-456">
              <div className="div-block-454">
                <div>
                  <h1 className="heading-178">Sales +</h1>
                  <h1 className="heading-176 hide">$99/mo</h1>
                  <p className="paragraph-18">Lorem ipsum dolor sit amet consectetur.</p>
                  <div className="div-block-91" />
                  <h1 className="heading-175">What’s included</h1>
                  <div className="div-block-33">
                    <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                      <h1 className="heading-177">Eget nunc scelerisque viverra</h1>
                    </div>
                    <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                      <h1 className="heading-177">Mauris in aliquam</h1>
                    </div>
                    <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                      <h1 className="heading-177">Nunc faucibus a pellentesque sit</h1>
                    </div>
                    <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                      <h1 className="heading-177">Ut sem viverra aliquet</h1>
                    </div>
                    <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                      <h1 className="heading-177">Pretium vulputate sapien</h1>
                    </div>
                  </div>
                </div>
                <div className="div-block-455">
                  <a href="#" className="link-block-32 w-inline-block">
                    <h1 className="heading-174">schedule an appointment</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-113" />
                  </a>
                </div>
              </div>
              <div className="div-block-457">
                <h1 className="heading-178">Marketing +</h1>
                <h1 className="heading-176 hide">$499/mo</h1>
                <p className="paragraph-18">Lorem ipsum dolor sit amet consectetur.</p>
                <div className="div-block-91" />
                <h1 className="heading-175">What’s included</h1>
                <div className="div-block-33">
                  <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                    <h1 className="heading-177">Eget nunc scelerisque viverra</h1>
                  </div>
                  <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                    <h1 className="heading-177">Mauris in aliquam</h1>
                  </div>
                  <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                    <h1 className="heading-177">Nunc faucibus a pellentesque sit</h1>
                  </div>
                  <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                    <h1 className="heading-177">Ut sem viverra aliquet</h1>
                  </div>
                  <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                    <h1 className="heading-177">Pretium vulputate sapien</h1>
                  </div>
                </div>
                <div className="div-block-455">
                  <a href="#" className="link-block-32 _2nd w-inline-block">
                    <h1 className="heading-174">schedule an appointment</h1><img src="images/ArrowRight.svg" loading="lazy" alt="" className="image-113 _2" />
                  </a>
                </div>
              </div>
              <div className="div-block-453">
                <h1 className="heading-178">Super +</h1>
                <h1 className="heading-176 hide">$499/mo</h1>
                <p className="paragraph-18">Lorem ipsum dolor sit amet consectetur.</p>
                <div className="div-block-91" />
                <h1 className="heading-175">What’s included</h1>
                <div className="div-block-33">
                  <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                    <h1 className="heading-177">Eget nunc scelerisque viverra</h1>
                  </div>
                  <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                    <h1 className="heading-177">Mauris in aliquam</h1>
                  </div>
                  <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                    <h1 className="heading-177">Nunc faucibus a pellentesque sit</h1>
                  </div>
                  <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                    <h1 className="heading-177">Ut sem viverra aliquet</h1>
                  </div>
                  <div className="div-block-35"><img loading="lazy" src="images/blue-dot.svg" alt="" className="image-14" />
                    <h1 className="heading-177">Pretium vulputate sapien</h1>
                  </div>
                </div>
                <div className="div-block-455">
                  <a href="#" className="link-block-32 w-inline-block">
                    <h1 className="heading-174">schedule an appointment</h1><img src="images/arrow-rigth-db.svg" loading="lazy" alt="" className="image-113" />
                  </a>
                </div>
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
    .readFileSync("public/content/pricing.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default pricing;
