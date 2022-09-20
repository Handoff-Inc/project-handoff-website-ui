import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const index = ({ data }) => {

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
        <div className="div-block-464">
          <div className="div-block-2 lalala">
            <div className="div-block-4">
              <div className="text-block-17"><span className="text-span">Design To &lt;Code&gt;</span><br />with One Click</div>
              <div className="text-block-18">With Handoff, you can easily turn website designs into clean semantic HTML/CSS/JS, React, Angular, or Vue with just one click. Get started for free today</div>
              <a href="#" className="button w-button">Get Started</a>
            </div>
            <div className="div-block-3"><img src="images/Frame.svg" loading="lazy" alt="" className="image-114 asdasd" /></div>
          </div>
          <div className="div-block-5 aaaa">
            <div className="text-block-19">Trusted By Over 100+ Startups</div>
            <div className="div-block-6"><img src="images/Group.svg" loading="lazy" alt="" className="image-56" /><img src="images/Group-1.svg" loading="lazy" alt="" className="image-56" /><img src="images/Group-2.svg" loading="lazy" alt="" className="image-56" /><img src="images/Group-3.svg" loading="lazy" alt="" className="image-56" /><img src="images/Group-4.svg" loading="lazy" alt="" className="image-56" /></div>
            <div className="div-block-27"><img src="images/Group.svg" loading="lazy" alt="" className="image-64" /><img src="images/Group-1.svg" loading="lazy" alt="" className="image-64" /><img src="images/Group-2.svg" loading="lazy" alt="" className="image-64" /></div>
            <div className="div-block-27 _2"><img src="images/Group-3.svg" loading="lazy" alt="" className="image-64" /><img src="images/Group-4.svg" loading="lazy" alt="" className="image-64" /></div>
          </div>
        </div>
        <div className="hide">
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
            <div className="div-block-7">
              <div className="div-block-8"><img src="images/Group-199.svg" loading="lazy" alt="" />
                <div className="text-block-22">Lorem ipsum dolor</div>
                <div className="text-block-24">Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing</div>
              </div>
              <div className="div-block-8"><img src="images/Group-199-1.svg" loading="lazy" alt="" />
                <div className="text-block-22">Lorem ipsum dolor</div>
                <div className="text-block-24">Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing</div>
              </div>
              <div className="div-block-8"><img src="images/Group-199-2.svg" loading="lazy" alt="" />
                <div className="text-block-22">Lorem ipsum dolor</div>
                <div className="text-block-24">Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscing</div>
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
        <div>
          <div className="div-block-2 reverse">
            <div className="div-block-3-2"><img src="images/Group-1000001706.svg" loading="lazy" alt="" /></div>
            <div className="div-block-4-2">
              <div className="text-block-26">Why Choose Us</div>
              <div className="text-block-27">Lorem ipsum sit amet conse cteturLorem</div>
              <div className="text-block-28">Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor</div>
              <div className="div-block-10" />
              <div className="div-block-11">
                <div className="div-block-12"><img src="images/Group-155.svg" loading="lazy" alt="" className="image-57" />
                  <div className="text-block-29">Lorem ipsum dolor</div>
                </div>
                <div className="div-block-12"><img src="images/Group-155.svg" loading="lazy" alt="" className="image-57" />
                  <div className="text-block-29">Lorem ipsum dolor</div>
                </div>
                <div className="div-block-12"><img src="images/Group-155.svg" loading="lazy" alt="" className="image-57" />
                  <div className="text-block-29">Lorem ipsum dolor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-14">
          <div className="div-block-5">
            <div className="text-block-20">Push your code to product with ease.</div>
            <div className="text-block-21">Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</div>
            <div className="div-block-7 non-grid aaa">
              <div className="div-block-8-2">
                <div className="text-block-22-copy">Lorem ipsum dolor sit amet</div>
                <div className="text-block-24-copy">Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                <div className="div-block-13">
                  <div className="text-block-30">Read More</div><img src="images/Vector-9.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="div-block-8-2 shadow">
                <div className="text-block-22-copy">Lorem ipsum dolor sit amet</div>
                <div className="text-block-24-copy">Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                <div className="div-block-13">
                  <div className="text-block-30">Read More</div><img src="images/Vector-9.svg" loading="lazy" alt="" />
                </div>
              </div>
              <div className="div-block-8-2">
                <div className="text-block-22-copy">Lorem ipsum dolor sit amet</div>
                <div className="text-block-24-copy">Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                <div className="div-block-13">
                  <div className="text-block-30">Read More</div><img src="images/Vector-9.svg" loading="lazy" alt="" />
                </div>
              </div>
            </div>
            <div className="div-block-15">
              <a href="#" className="button-3 w-button">More About Platform</a>
            </div>
          </div>
        </div>
        <div>
          <div className="div-block-5">
            <div className="div-block-9-copy">
              <div className="text-block-32">Lorem ipsum dolorLorem</div>
              <div className="div-block-26">
                <div className="div-block-16"><img src="images/Group-1000001699.svg" loading="lazy" alt="" className="image-58" />
                  <div className="text-block-33">Lorem ipsum dolor</div>
                </div>
                <div className="div-block-16"><img src="images/Group-1000001699.svg" loading="lazy" alt="" className="image-58" />
                  <div className="text-block-33">Lorem ipsum dolor</div>
                </div>
                <div className="div-block-16"><img src="images/Group-1000001699.svg" loading="lazy" alt="" className="image-58" />
                  <div className="text-block-33">Lorem ipsum dolor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="div-block-2 reverse">
            <div className="div-block-3-2"><img src="images/Cards.svg" loading="lazy" alt="" className="image-65" /></div>
            <div className="div-block-4-2">
              <div className="text-block-26">Why Choose Us</div>
              <div className="text-block-27">Lorem ipsum sit amet conse cteturLorem</div>
              <div className="text-block-28">Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor</div>
              <div className="div-block-10" />
              <div className="div-block-11">
                <div className="div-block-12"><img src="images/Group-155.svg" loading="lazy" alt="" className="image-57" />
                  <div className="text-block-29">Lorem ipsum dolor</div>
                </div>
                <div className="div-block-12"><img src="images/Group-155.svg" loading="lazy" alt="" className="image-57" />
                  <div className="text-block-29">Lorem ipsum dolor</div>
                </div>
                <div className="div-block-12"><img src="images/Group-155.svg" loading="lazy" alt="" className="image-57" />
                  <div className="text-block-29">Lorem ipsum dolor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="div-block-17">
            <div className="text-block-34">Easy To Use</div>
            <div className="div-block-18">
              <div className="div-block-19"><img src="images/Group-1000001702.svg" loading="lazy" alt="" className="image-60" />
                <div className="text-block-35">01</div>
                <div className="text-block-36">Choose Design</div>
                <div className="text-block-37">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet</div>
              </div>
              <div className="div-block-19"><img src="images/Group-1000001703.svg" loading="lazy" alt="" className="image-61" />
                <div className="text-block-35">02</div>
                <div className="text-block-36">Upload</div>
                <div className="text-block-37">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet</div>
              </div>
              <div className="div-block-19"><img src="images/Group-1000001705.svg" loading="lazy" alt="" className="image-62" />
                <div className="text-block-35">03</div>
                <div className="text-block-36">Click</div>
                <div className="text-block-37">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet</div>
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
    .readFileSync("public/content/index.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default index;
