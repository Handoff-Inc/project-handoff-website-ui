import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const viewPage = ({ data }) => {

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
        <div>
          <div className="mobile-header">
            <div className="div-block-384"><img src="images/Vector_3.svg" loading="lazy" alt="" className="image-98" /><img src="images/Handoff.svg" loading="lazy" alt="" className="image-100" /></div>
            <div>
              <div className="div-block-128">
                <a href="#" className="w-inline-block"><img src="images/Group-60.svg" loading="lazy" alt="" className="image-99" /></a><img src="images/Rectangle-402_1Rectangle-402.png" loading="lazy" alt="" className="image-97" />
                <div className="text-block-76">John Smith</div>
              </div>
            </div>
          </div>
          <div className="div-block-327">
            <div className="div-block-325">
              <div className="div-block-316">
                <div className="div-block-326"><img src="images/Handoff.svg" loading="lazy" alt="" /></div>
                <div className="div-block-319">
                  <a href="#" className="link-block-31 highlight w-inline-block">
                    <div className="div-block-128"><img src="images/Frame_2.svg" loading="lazy" alt="" className="image-85" /></div>
                  </a>
                  <a href="#" className="link-block-31 w-inline-block">
                    <div className="div-block-128"><img src="images/Frame-1.svg" loading="lazy" alt="" className="image-85" /></div>
                  </a>
                  <a href="#" className="link-block-31 w-inline-block">
                    <div className="div-block-128"><img src="images/Frame-2.svg" loading="lazy" alt="" className="image-85" /></div>
                  </a>
                  <a href="#" className="link-block-31 w-inline-block">
                    <div className="div-block-128"><img src="images/Frame-3.svg" loading="lazy" width={18} alt="" className="image-85" /></div>
                  </a>
                  <a href="#" className="link-block-31 w-inline-block">
                    <div className="div-block-128"><img src="images/Frame-4.svg" loading="lazy" width={18} alt="" className="image-85" /></div>
                  </a>
                  <a href="#" className="link-block-31 w-inline-block">
                    <div className="div-block-128"><img src="images/Frame-5.svg" loading="lazy" width={18} alt="" className="image-85" /></div>
                  </a>
                </div>
              </div>
              <div className="div-block-316">
                <a href="#" className="link-block-31 w-inline-block">
                  <div className="div-block-128"><img src="images/Frame-6.svg" loading="lazy" alt="" className="image-85" /></div>
                </a>
              </div>
            </div>
            <div className="div-block-328 aaa bbb qqqq">
              <div className="div-block-322">
                <div>
                  <h1 className="heading-149">Dashboard</h1>
                </div>
                <div className="div-block-128">
                  <a href="#" className="w-inline-block"><img src="images/Group-60.svg" loading="lazy" alt="" className="image-101" /></a><img src="images/Rectangle-402_1Rectangle-402.png" loading="lazy" alt="" className="image-97" />
                  <div className="text-block-76">John Smith</div>
                </div>
              </div>
              <div className="wrap-section1-mu aaa aaaaa min-height-85vh lalalal">
                <div className="div-block-385-copy aaa">
                  <div className="div-block-126-copy">
                    <div className="div-block-127">
                      <div className="div-block-128 nil-opacity">
                        <div className="text-block-67">Page: Home</div><img src="images/akar-icons_eye.svg" loading="lazy" alt="" className="image-78" />
                      </div>
                      <div className="div-block-129">
                        <div className="text-block-67">1240px</div><img src="images/akar-icons_desktop-device.svg" loading="lazy" alt="" className="image-76" /><img src="images/akar-icons_tablet-device.svg" loading="lazy" alt="" className="image-76" /><img src="images/akar-icons_mobile-device.svg" loading="lazy" alt="" className="image-76" /><img src="images/akar-icons_mobile-device-1.svg" loading="lazy" alt="" className="image-76" />
                      </div>
                      <div className="div-block-130 nil-opacity"><img src="images/akar-icons_arrow-back.svg" loading="lazy" alt="" className="image-76" /><img src="images/akar-icons_arrow-back-1.svg" loading="lazy" alt="" className="image-76" /><img src="images/akar-icons_circle-check-fill.svg" loading="lazy" alt="" className="image-76" /><img src="images/gridicons_share-ios.svg" loading="lazy" alt="" className="image-76" /><img src="images/mdi_rocket.svg" loading="lazy" alt="" className="image-76" />
                        <div className="text-block-67 _2">Publish</div><img src="images/akar-icons_chevron-down.svg" loading="lazy" alt="" className="image-76" />
                      </div>
                    </div>
                  </div><img src="images/Homepage-v1-1.png" loading="lazy" srcSet="images/Homepage-v1-1-2-p-500.png 500w, images/Homepage-v1-1-2-p-800.png 800w, images/Homepage-v1-1-2-p-1080.png 1080w, images/Homepage-v1-1-2-p-1600.png 1600w, images/Homepage-v1-1-2-p-2000.png 2000w, images/Homepage-v1-1-2-p-2600.png 2600w, images/Homepage-v1-1-2-p-3200.png 3200w" sizes="(max-width: 479px) 0px, (max-width: 767px) 100vw, (max-width: 991px) 90vw, (max-width: 1279px) 89vw, (max-width: 1919px) 90vw, 1540px" alt="" className="image-102" />
                  <a data-w-id="e9b8c407-78dd-ab16-55d6-276105be561b" href="#" className="button-18 w-button">Downloads Files</a><img src="images/Homepage-v1-1-3.png" loading="lazy" alt="" className="image-102 mobile-only" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="export-code-popup">
          <div className="div-block-389">
            <div className="div-block-390">
              <div>
                <h1 className="heading-153">Export Code</h1>
              </div>
              <div><img src="images/Group-33880.svg" loading="lazy" data-w-id="9f3a011a-1a6b-c722-14f6-00c43e79bfba" alt="" /></div>
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
                <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="(max-width: 479px) 0px, 100vw" alt="" className="image-103" /></div>
                <div data-w-tab="Tab 3" className="w-tab-pane"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="(max-width: 479px) 0px, 100vw" alt="" className="image-103" /></div>
                <div data-w-tab="Tab 4" className="w-tab-pane"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="(max-width: 479px) 0px, 100vw" alt="" className="image-103" /></div>
                <div data-w-tab="Tab 5" className="w-tab-pane"><img src="images/Frame-38.png" loading="lazy" srcSet="images/Frame-38-p-500.png 500w, images/Frame-38.png 600w" sizes="(max-width: 479px) 0px, 100vw" alt="" className="image-103" /></div>
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
    .readFileSync("public/content/viewPage.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default viewPage;
