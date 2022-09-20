import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const individualBlogPage = ({ data }) => {

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
          <div className="div-block-90">
            <div className="div-block-108">
              <div className="text-block-55">What is Next js? Next js tutorial. What are the benefits of Next js in 2021?</div>
              <div className="div-block-109">
                <div className="div-block-110"><img src="images/Vector.svg" loading="lazy" alt="" className="image-70" />
                  <div className="text-block-56">Andres Levintone &nbsp;| &nbsp;Mar 3, 2021 | 5 min read</div>
                  <a href="#" className="link-6">follow</a><img src="images/mdi_email-plus-outline.svg" loading="lazy" alt="" className="image-74" />
                </div>
                <div className="div-block-111">
                  <a href="#" className="link-block-17 w-inline-block"><img src="images/ci_facebook.svg" loading="lazy" alt="" /></a>
                  <a href="#" className="link-block-17 w-inline-block"><img src="images/entypo-social_twitter-with-circle.svg" loading="lazy" alt="" /></a>
                  <a href="#" className="link-block-17 w-inline-block"><img src="images/entypo-social_linkedin-with-circle.svg" loading="lazy" alt="" /></a>
                  <a href="#" className="link-block-17 w-inline-block"><img src="images/fa-solid_link.svg" loading="lazy" alt="" /></a>
                  <a href="#" className="link-block-17 w-inline-block"><img src="images/bi_bookmark-plus.svg" loading="lazy" alt="" /></a>
                </div>
              </div>
              <div className="div-block-112"><img src="images/Group-1000001711.svg" loading="lazy" alt="" className="image-71-copy" /><img src="images/Group-1000001712.svg" loading="lazy" alt="" className="image-71" /></div>
              <div className="text-block-46">Lorem ipsum dolor</div>
              <div className="text-block-47">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum, dictum eget justo eget, gravida ultricies turpis. Fusce congue dapibus ligula ut aliquam. Vestibulum tincidunt dolor justo, sit amet viverra magna maximus ut. Curabitur ultrices molestie nulla dictum ultrices. Proin a enim suscipit, rutrum eros a, bibendum purus. Donec imperdiet nibh enim, in vulputate justo dictum vel. Donec eleifend augue faucibus ipsum mattis, non commodo purus efficitur. Integer finibus cursus ipsum a accumsan. Maecenas varius bibendum enim pretium volutpat. Curabitur dignissim ligula magna, fringilla suscipit felis elementum vel.<br /><br />Sed sagittis lorem non semper ornare. Nullam at eros blandit, convallis sem eget, bibendum turpis. Nam interdum ut orci id tristique. Nam et varius metus. Nunc ut tincidunt augue. Aliquam maximus luctus accumsan. In sit amet orci non felis euismod accumsan at in eros. Nulla at neque ac nisi ornare lobortis. Mauris tempor molestie leo vitae rutrum. Morbi ac enim nec lectus euismod dapibus eu in dolor.<br /><br />Aenean eget felis at purus ullamcorper rhoncus quis non odio. Morbi dignissim leo urna, vitae interdum mi vehicula vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Donec laoreet condimentum tortor, ut tempor odio tempus sit amet. Nam et lacus a est ultrices fermentum sed a ligula. Nullam quis ante accumsan, varius velit faucibus, auctor augue. Ut euismod ultrices pharetra. Aenean varius fermentum tortor, at convallis libero ultrices sit amet. In pellentesque tincidunt odio finibus faucibus. Vivamus est erat, eleifend sed mattis eu, vestibulum nec urna. Nunc in varius leo, eu faucibus tortor. Vivamus bibendum risus ut velit feugiat, ut fermentum ante feugiat. Duis id sem consequat ligula venenatis aliquam. Aenean sed laoreet tellus, ultrices pulvinar quam.</div>
              <div className="text-block-46">Lorem ipsum dolor</div>
              <div className="text-block-47 last">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum, dictum eget justo eget, gravida ultricies turpis. Fusce congue dapibus ligula ut aliquam. Vestibulum tincidunt dolor justo, sit amet viverra magna maximus ut. Curabitur ultrices molestie nulla dictum ultrices. Proin a enim suscipit, rutrum eros a, bibendum purus. Donec imperdiet nibh enim, in vulputate justo dictum vel. Donec eleifend augue faucibus ipsum mattis, non commodo purus efficitur. Integer finibus cursus ipsum a accumsan. Maecenas varius bibendum enim pretium volutpat. Curabitur dignissim ligula magna, fringilla suscipit felis elementum vel.<br /><br />Sed sagittis lorem non semper ornare. Nullam at eros blandit, convallis sem eget, bibendum turpis. Nam interdum ut orci id tristique. Nam et varius metus. Nunc ut tincidunt augue. Aliquam maximus luctus accumsan. In sit amet orci non felis euismod accumsan at in eros. Nulla at neque ac nisi ornare lobortis. Mauris tempor molestie leo vitae rutrum. Morbi ac enim nec lectus euismod dapibus eu in dolor.<br /><br />Aenean eget felis at purus ullamcorper rhoncus quis non odio. Morbi dignissim leo urna, vitae interdum mi vehicula vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Donec laoreet condimentum tortor, ut tempor odio tempus sit amet. Nam et lacus a est ultrices fermentum sed a ligula. Nullam quis ante accumsan, varius velit faucibus, auctor augue. Ut euismod ultrices pharetra. Aenean varius fermentum tortor, at convallis libero ultrices sit amet. In pellentesque tincidunt odio finibus faucibus. Vivamus est erat, eleifend sed mattis eu, vestibulum nec urna. Nunc in varius leo, eu faucibus tortor. Vivamus bibendum risus ut velit feugiat, ut fermentum ante feugiat. Duis id sem consequat ligula venenatis aliquam. Aenean sed laoreet tellus, ultrices pulvinar quam.</div>
              <div className="div-block-113">
                <div className="div-block-114">
                  <div className="text-block-46 _2">Lorem ipsum dolor</div>
                  <div className="text-block-47-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum,</div>
                  <a href="#" className="link-7">www.loremipsum.com</a>
                </div>
                <div className="div-block-115" />
              </div>
              <div className="div-block-113">
                <div className="div-block-114">
                  <div className="text-block-46 _2">Lorem ipsum dolor</div>
                  <div className="text-block-47-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum,</div>
                  <a href="#" className="link-7">www.loremipsum.com</a>
                </div>
                <div className="div-block-115" />
              </div>
              <div className="div-block-113">
                <div className="div-block-114">
                  <div className="text-block-46 _2">Lorem ipsum dolor</div>
                  <div className="text-block-47-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum,</div>
                  <a href="#" className="link-7">www.loremipsum.com</a>
                </div>
                <div className="div-block-115" />
              </div>
              <div className="div-block-110"><img src="images/carbon_user-avatar-filled.svg" loading="lazy" alt="" className="image-70" />
                <div className="text-block-56">Written by Andres Levintone &nbsp;| &nbsp;Mar 3, 2021 </div>
              </div>
              <div className="div-block-116">
                <div className="text-block-58">Subscribe to our Newsletter</div>
                <div className="text-block-59">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum,</div>
                <div className="div-block-117">
                  <div className="w-form">
                    <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="form"><input type="email" className="text-field-4 w-input" maxLength={256} name="email-2" data-name="Email 2" placeholder="you@email.com" id="email-2" required /><input type="submit" defaultValue data-wait="Please wait..." className="submit-button-2 w-button" /></form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-block-53">Tags</div>
              <div className="div-block-118">
                <div className="text-block-60">Design Inspiration</div>
                <div className="text-block-60">Brand Management</div>
                <div className="text-block-60">Advertising Design</div>
                <div className="text-block-60">Digital Marketing</div>
                <div className="text-block-60">Presentation Design</div>
                <div className="text-block-60">Superside News</div>
              </div>
              <div className="div-block-118">
                <div className="text-block-60">Design Ops</div>
                <div className="text-block-60">UX Design</div>
                <div className="text-block-60">UI Design</div>
              </div>
              <div className="div-block-119"><img src="images/ph_hands-clapping-light.svg" loading="lazy" alt="" />
                <div className="text-block-61">31</div><img src="images/bi_chat.svg" loading="lazy" alt="" className="image-72" />
                <div className="div-block-111">
                  <a href="#" className="link-block-17 w-inline-block"><img src="images/ci_facebook.svg" loading="lazy" alt="" /></a>
                  <a href="#" className="link-block-17 w-inline-block"><img src="images/entypo-social_twitter-with-circle.svg" loading="lazy" alt="" /></a>
                  <a href="#" className="link-block-17 w-inline-block"><img src="images/entypo-social_linkedin-with-circle.svg" loading="lazy" alt="" /></a>
                  <a href="#" className="link-block-17 w-inline-block"><img src="images/fa-solid_link.svg" loading="lazy" alt="" /></a>
                  <a href="#" className="link-block-17 w-inline-block"><img src="images/bi_bookmark-plus.svg" loading="lazy" alt="" /></a>
                </div>
              </div>
              <div className="text-block-53">Related Posts</div>
              <div className="div-block-120">
                <div id="w-node-_3d03a028-3037-458c-5b5d-dd210077b57b-ffe57498" className="div-block-121">
                  <div className="div-block-123">
                    <div><img src="images/Rectangle-395.svg" loading="lazy" alt="" className="image-73" /></div>
                  </div>
                  <div className="div-block-122">
                    <div className="text-block-46">Lorem ipsum dolor</div>
                    <div className="text-block-47-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum,</div>
                    <a href="#" className="link-7">www.loremipsum.com</a>
                  </div>
                </div>
                <div id="w-node-eedc7af4-5bbd-f961-b1c2-0033f413e8bf-ffe57498" className="div-block-121">
                  <div className="div-block-123">
                    <div><img src="images/Rectangle-395.svg" loading="lazy" alt="" className="image-73" /></div>
                  </div>
                  <div className="div-block-122">
                    <div className="text-block-46">Lorem ipsum dolor</div>
                    <div className="text-block-47-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum,</div>
                    <a href="#" className="link-7">www.loremipsum.com</a>
                  </div>
                </div>
                <div id="w-node-d3811e7f-0f1f-8fd1-d835-f5a78ca0a49b-ffe57498" className="div-block-121">
                  <div className="div-block-123">
                    <div><img src="images/Rectangle-395.svg" loading="lazy" alt="" className="image-73" /></div>
                  </div>
                  <div className="div-block-122">
                    <div className="text-block-46">Lorem ipsum dolor</div>
                    <div className="text-block-47-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum,</div>
                    <a href="#" className="link-7">www.loremipsum.com</a>
                  </div>
                </div>
                <div id="w-node-_3ad0454c-2dea-1653-78c1-0016ee2d41e5-ffe57498" className="div-block-121">
                  <div className="div-block-123">
                    <div><img src="images/Rectangle-395.svg" loading="lazy" alt="" className="image-73" /></div>
                  </div>
                  <div className="div-block-122">
                    <div className="text-block-46">Lorem ipsum dolor</div>
                    <div className="text-block-47-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum,</div>
                    <a href="#" className="link-7">www.loremipsum.com</a>
                  </div>
                </div>
                <div id="w-node-_9e56a322-b0f8-dd33-79ce-f5934ff376bf-ffe57498" className="div-block-121">
                  <div className="div-block-123">
                    <div><img src="images/Rectangle-395.svg" loading="lazy" alt="" className="image-73" /></div>
                  </div>
                  <div className="div-block-122">
                    <div className="text-block-46">Lorem ipsum dolor</div>
                    <div className="text-block-47-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum,</div>
                    <a href="#" className="link-7">www.loremipsum.com</a>
                  </div>
                </div>
                <div id="w-node-_5369885e-c9e2-2e8d-3baf-b6e3add48775-ffe57498" className="div-block-121">
                  <div className="div-block-123">
                    <div><img src="images/Rectangle-395.svg" loading="lazy" alt="" className="image-73" /></div>
                  </div>
                  <div className="div-block-122">
                    <div className="text-block-46">Lorem ipsum dolor</div>
                    <div className="text-block-47-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris magna, ornare a erat vitae, ultrices venenatis sapien. Aliquam vestibulum sagittis velit vitae bibendum. Vestibulum nisi ipsum,</div>
                    <a href="#" className="link-7">www.loremipsum.com</a>
                  </div>
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
    .readFileSync("public/content/individualBlogPage.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default individualBlogPage;
