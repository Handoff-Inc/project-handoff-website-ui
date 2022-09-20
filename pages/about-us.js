import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const aboutUs = ({ data }) => {

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
        <div className="div-block-copy aaa vvvvvv">
          <div className="div-block-436">
            <h1 className="heading-171">About Us</h1>
            <p className="paragraph-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium tincidunt lobortis. Pellentesque quis aliquet nulla. Phasellus ut augue sit amet erat sodales lacinia. Mauris ultricies nibh eu eleifend ornare. Mauris sit amet fermentum tortor. Suspendisse potenti.</p>
            <div className="div-block-435">
              <a href="#" className="button-19 w-button">Get Started</a>
            </div>
          </div>
        </div>
        <div>
          <div className="div-block-5">
            <div className="text-block-19">Trusted By Over 100+ Startups</div>
            <div className="div-block-6"><img src="images/Group.svg" loading="lazy" alt="" className="image-56" /><img src="images/Group-1.svg" loading="lazy" alt="" className="image-56" /><img src="images/Group-2.svg" loading="lazy" alt="" className="image-56" /><img src="images/Group-3.svg" loading="lazy" alt="" className="image-56" /><img src="images/Group-4.svg" loading="lazy" alt="" className="image-56" /></div>
            <div className="div-block-27"><img src="images/Group.svg" loading="lazy" alt="" className="image-64" /><img src="images/Group-1.svg" loading="lazy" alt="" className="image-64" /><img src="images/Group-2.svg" loading="lazy" alt="" className="image-64" /></div>
            <div className="div-block-27 _2"><img src="images/Group-3.svg" loading="lazy" alt="" className="image-64" /><img src="images/Group-4.svg" loading="lazy" alt="" className="image-64" /></div>
          </div>
        </div>
        <div>
          <div className="div-block-5">
            <div className="text-block-20">Lorem ipsum dolor sit ametur adipiscing</div>
            <div className="text-block-21">Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing</div>
            <div className="div-block-7-about-us">
              <div className="div-block-8-about-us"><img src="images/Group-199.svg" loading="lazy" alt="" />
                <div className="text-block-22">Lorem ipsum dolor</div>
                <div className="text-block-24-about-us">Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing</div>
              </div>
              <div className="div-block-8-about-us"><img src="images/Group-199-1.svg" loading="lazy" alt="" />
                <div className="text-block-22">Lorem ipsum dolor</div>
                <div className="text-block-24-about-us">Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing</div>
              </div>
              <div className="div-block-8-about-us"><img src="images/Group-199-2.svg" loading="lazy" alt="" />
                <div className="text-block-22">Lorem ipsum dolor</div>
                <div className="text-block-24-about-us">Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="div-block-5">
            <div className="div-block-9">
              <div className="text-block-25">Lorem ipsum dolor sit amet, consectetur</div>
              <a href="#" className="button-2 w-button">Check It Out</a>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-445">
            <div className="div-block-447">
              <div className="div-block-443">
                <h1 className="heading-64">Our Team</h1>
                <div className="div-block-449">
                  <div data-delay={4000} data-animation="slide" className="slider-5 w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
                    <div className="w-slider-mask">
                      <div className="slide-7 w-slide">
                        <div className="div-block-446">
                          <div className="div-block-441"><img src="images/Mask-Group-2.png" loading="lazy" alt="" />
                            <h3 className="heading-65">William Jones</h3>
                            <h5 className="heading-66">Chief Executive Officer</h5>
                          </div>
                          <div className="div-block-442"><img src="images/Mask-Group-3.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Kenneth Boyle</h3>
                            <h5 className="heading-66">Chief Financial Officer</h5>
                          </div>
                          <div className="div-block-444"><img src="images/Mask-Group-4.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Stephanie Johnson</h3>
                            <h5 className="heading-66">Chief Marketing Officer</h5>
                          </div>
                          <div className="div-block-448"><img src="images/Mask-Group-5.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Georgina Wilson</h3>
                            <h5 className="heading-66">Human Resources</h5>
                          </div>
                        </div>
                      </div>
                      <div className="slide-8 w-slide">
                        <div className="div-block-446">
                          <div className="div-block-441"><img src="images/Mask-Group-2.png" loading="lazy" alt="" />
                            <h3 className="heading-65">William Jones</h3>
                            <h5 className="heading-66">Chief Executive Officer</h5>
                          </div>
                          <div className="div-block-442"><img src="images/Mask-Group-3.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Kenneth Boyle</h3>
                            <h5 className="heading-66">Chief Financial Officer</h5>
                          </div>
                          <div className="div-block-444"><img src="images/Mask-Group-4.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Stephanie Johnson</h3>
                            <h5 className="heading-66">Chief Marketing Officer</h5>
                          </div>
                          <div className="div-block-448"><img src="images/Mask-Group-5.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Georgina Wilson</h3>
                            <h5 className="heading-66">Human Resources</h5>
                          </div>
                        </div>
                      </div>
                      <div className="slide-8 w-slide">
                        <div className="div-block-446">
                          <div className="div-block-441"><img src="images/Mask-Group-2.png" loading="lazy" alt="" />
                            <h3 className="heading-65">William Jones</h3>
                            <h5 className="heading-66">Chief Executive Officer</h5>
                          </div>
                          <div className="div-block-442"><img src="images/Mask-Group-3.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Kenneth Boyle</h3>
                            <h5 className="heading-66">Chief Financial Officer</h5>
                          </div>
                          <div className="div-block-444"><img src="images/Mask-Group-4.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Stephanie Johnson</h3>
                            <h5 className="heading-66">Chief Marketing Officer</h5>
                          </div>
                          <div className="div-block-448"><img src="images/Mask-Group-5.png" loading="lazy" alt="" />
                            <h3 className="heading-65">Georgina Wilson</h3>
                            <h5 className="heading-66">Human Resources</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="left-arrow-4 w-slider-arrow-left">
                      <div className="w-icon-slider-left" />
                    </div>
                    <div className="right-arrow-4 w-slider-arrow-right">
                      <div className="icon-5 w-icon-slider-right" /><img src="images/Vector-46.svg" loading="lazy" alt="" />
                    </div>
                    <div className="slide-nav-4 w-slider-nav w-round" />
                  </div>
                </div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{ __html: "\n.w-slider-dot.w-active{\nbackground-color:#0066FF;\nwidth:12.53px;\nheight:12.53px;\nmargin:0 0 -2px;\npadding:0;\n}\n.w-slider-dot{\nbackground-color:#0066FF80;\nwidth:8.53px;\nheight:8.53px;\nmargin:0;\npadding:0;\n}\n" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wf-section">
          <div className="div-block-445">
            <div className="div-block-450">
              <div className="div-block-443">
                <div className="div-block-105-copy">
                  <div className="div-block-452"><img src="images/Cards_1.svg" loading="lazy" alt="" className="image-112" /></div>
                  <div className="div-block-451">
                    <h3 className="heading-172">Lorem ipsum sit amet conse cteturLorem</h3>
                    <div className="text-block-107">Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor &nbsp;Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor</div>
                  </div>
                </div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{ __html: "\n.w-slider-dot.w-active{\nbackground-color:#0066FF;\nwidth:12.53px;\nheight:12.53px;\nmargin:0 0 -2px;\npadding:0;\n}\n.w-slider-dot{\nbackground-color:#0066FF80;\nwidth:8.53px;\nheight:8.53px;\nmargin:0;\npadding:0;\n}\n" }} />
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
    .readFileSync("public/content/aboutUs.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default aboutUs;
