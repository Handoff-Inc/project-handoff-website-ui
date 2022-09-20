import Head from 'next/head'
import fs from "fs";
import matter from "gray-matter";
import React, { useEffect } from "react";
import { useEffectOnce } from 'react-use';
import Footer from '../components/Footer';
import Header from '../components/Header';

const generalSettings = ({ data }) => {

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
            <div className="div-block-325 show">
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
            <div className="div-block-328 aaa bbb show">
              <div className="div-block-322 show-tab">
                <div>
                  <h1 className="heading-149">Dashboard</h1>
                </div>
                <div className="div-block-128">
                  <a href="#" className="w-inline-block"><img src="images/Group-60.svg" loading="lazy" alt="" className="image-101" /></a><img src="images/Rectangle-402_1Rectangle-402.png" loading="lazy" alt="" className="image-97" />
                  <div className="text-block-76">John Smith</div>
                </div>
              </div>
              <div className="wrap-section1-mu aaa aaaaa min-height-85vh">
                <h1 className="heading-154">General Settings</h1>
                <div className="div-block-385-copy bbb">
                  <h3 className="heading-155">Settings</h3>
                  <div className="div-block-391">
                    <div data-current="Tab 1" data-easing="ease" data-duration-in={300} data-duration-out={100} className="tabs-2 w-tabs">
                      <div className="tabs-menu-3 w-tab-menu">
                        <a data-w-tab="Tab 1" className="tab-link-tab-2-2 w-inline-block w-tab-link w--current">
                          <div className="text-block-89">Settings</div>
                        </a>
                        <a data-w-tab="Tab 2" className="tab-link-tab-2-2 w-inline-block w-tab-link">
                          <div>Notification</div>
                        </a>
                        <a data-w-tab="Tab 3" className="tab-link-tab-2-2 w-inline-block w-tab-link">
                          <div>Billing</div>
                        </a>
                      </div>
                      <div className="tabs-content-2 w-tab-content">
                        <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active">
                          <div className="div-block-392">
                            <div className="div-block-393">
                              <div className="text-block-85">Profile</div><img loading="lazy" src="images/Ellipse-1.svg" alt="" className="image-104" />
                              <div className="text-block-86">Alex Iwobi</div>
                              <div className="text-block-87">Admin</div>
                              <a href="#" className="button-114 w-button">Edit Profile</a>
                            </div>
                            <div className="div-block-394">
                              <div className="text-block-88">BASIC INFO</div>
                              <div className="div-block-395" />
                              <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get"><label htmlFor="name" className="field-label-22">Name*</label><input type="text" className="text-field-9 w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter your username" id="name" /><label htmlFor="name-2" className="field-label-22">Email*</label><input type="email" className="text-field-9 w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="Enter your email address" id="name-2" /><label htmlFor="name-3" className="field-label-22">Password*</label><input type="password" className="text-field-9 w-input" maxLength={256} name="name-3" data-name="Name 3" placeholder="**********" id="name-3" /><label htmlFor="name-4" className="field-label-22">Confirm Password*</label><input type="password" className="text-field-9 w-input" maxLength={256} name="name-4" data-name="Name 4" placeholder="**********" id="name-4" /></form>
                                <div className="w-form-done">
                                  <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                  <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                              </div>
                              <div className="div-block-396">
                                <a href="#" className="cancel w-button">Cancel</a>
                                <a href="#" className="save w-button">Save</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-w-tab="Tab 2" className="w-tab-pane">
                          <div className="div-block-397">
                            <div className="w-form">
                              <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="form-8">
                                <div id="w-node-a33d1d65-c445-d699-889e-8b7468bf5218-0eb58113" className="div-block-399">
                                  <div><label className="w-checkbox checkbox-field">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" /><input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span className="checkbox-label w-form-label" htmlFor="checkbox">News and updates</span>
                                  </label></div>
                                  <div className="text-block-90">News about products and features updates.</div>
                                </div>
                                <div id="w-node-_755bd4e1-7351-36d5-7c86-1bd942704ca1-0eb58113" className="div-block-399">
                                  <div><label className="w-checkbox checkbox-field">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" /><input type="checkbox" id="checkbox-4" name="checkbox-4" data-name="Checkbox 4" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span className="checkbox-label w-form-label" htmlFor="checkbox-4">Tips and Tutorials</span>
                                  </label></div>
                                  <div className="text-block-90">News about products and features updates.</div>
                                </div>
                                <div id="w-node-_5f6c023d-2491-1363-c71d-82db9f3f744e-0eb58113" className="div-block-399">
                                  <div><label className="w-checkbox checkbox-field">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" /><input type="checkbox" id="checkbox-3" name="checkbox-3" data-name="Checkbox 3" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span className="checkbox-label w-form-label" htmlFor="checkbox-3">User research</span>
                                  </label></div>
                                  <div className="text-block-90">News about products and features updates.</div>
                                </div>
                                <div id="w-node-a3a9b8de-c687-e6df-32e7-b673cb31edce-0eb58113" className="div-block-399">
                                  <div><label className="w-checkbox checkbox-field">
                                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox" /><input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} /><span className="checkbox-label w-form-label" htmlFor="checkbox-2">Reminders</span>
                                  </label></div>
                                  <div className="text-block-90">News about products and features updates.</div>
                                </div>
                              </form>
                              <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                              </div>
                              <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                              </div>
                            </div>
                            <div className="div-block-400">
                              <a href="#" className="cancel w-button">Cancel</a>
                              <a href="#" className="save w-button">Save</a>
                            </div>
                          </div>
                        </div>
                        <div data-w-tab="Tab 3" className="w-tab-pane">
                          <div className="div-block-401">
                            <div className="div-block-402">
                              <h3 className="heading-156">Your Credit Card</h3><img loading="lazy" src="images/Mask-Group.png" alt="" className="image-105" />
                              <div className="div-block-404">
                                <div className="text-block-92">Recent Payment</div>
                                <div className="div-block-405">
                                  <div className="div-block-406"><img loading="lazy" src="images/Group-18311.svg" alt="" className="image-106" />
                                    <div className="text-block-91">Charge Back</div>
                                  </div>
                                  <div className="div-block-406-copy"><img loading="lazy" src="images/Group-18356.svg" alt="" className="image-106" />
                                    <div className="text-block-91-copy">PAYMENT</div>
                                  </div>
                                  <div className="div-block-408">
                                    <div className="text-block-93">Mar 20, 2021</div>
                                  </div>
                                  <div className="div-block-409">
                                    <div className="text-block-94">-$140,20</div>
                                  </div>
                                  <div className="div-block-410"><img loading="lazy" src="images/Group-214.1.svg" alt="" /></div>
                                </div>
                                <div className="div-block-405">
                                  <div className="div-block-406"><img loading="lazy" src="images/Group-18311.svg" alt="" className="image-106" />
                                    <div className="text-block-91">Information Reqested</div>
                                  </div>
                                  <div className="div-block-406-copy"><img loading="lazy" src="images/Group-18356-1.svg" alt="" className="image-106" />
                                    <div className="text-block-91-copy green">Refund</div>
                                  </div>
                                  <div className="div-block-408">
                                    <div className="text-block-93">Mar 20, 2021</div>
                                  </div>
                                  <div className="div-block-409">
                                    <div className="text-block-94 green">+$40,20</div>
                                  </div>
                                  <div className="div-block-410"><img loading="lazy" src="images/Group-214.1.svg" alt="" /></div>
                                </div>
                                <div className="div-block-405">
                                  <div className="div-block-406"><img loading="lazy" src="images/Group-18311.svg" alt="" className="image-106" />
                                    <div className="text-block-91">Settled</div>
                                  </div>
                                  <div className="div-block-406-copy"><img loading="lazy" src="images/Group-18356.svg" alt="" className="image-106" />
                                    <div className="text-block-91-copy">PAYMENT</div>
                                  </div>
                                  <div className="div-block-408">
                                    <div className="text-block-93">Mar 20, 2021</div>
                                  </div>
                                  <div className="div-block-409">
                                    <div className="text-block-94">-$74,70</div>
                                  </div>
                                  <div className="div-block-410"><img loading="lazy" src="images/Group-214.1.svg" alt="" /></div>
                                </div>
                                <div className="div-block-405">
                                  <div className="div-block-406"><img loading="lazy" src="images/Group-18311.svg" alt="" className="image-106" />
                                    <div className="text-block-91">Authorised</div>
                                  </div>
                                  <div className="div-block-406-copy"><img loading="lazy" src="images/Group-18356-2.svg" alt="" className="image-106" />
                                    <div className="text-block-91-copy credit">Credit</div>
                                  </div>
                                  <div className="div-block-408">
                                    <div className="text-block-93">Mar 19, 2021</div>
                                  </div>
                                  <div className="div-block-409">
                                    <div className="text-block-94">-$1,20</div>
                                  </div>
                                  <div className="div-block-410"><img loading="lazy" src="images/Group-214.1.svg" alt="" /></div>
                                </div>
                              </div>
                            </div>
                            <div className="div-block-403">
                              <a data-w-id="04355d2e-8789-ef66-6d23-8718205b5d1f" href="#" className="edit w-button">Edit payment info</a>
                              <h3 className="heading-156-copy">Payment Detail</h3>
                              <div className="div-block-411"><img loading="lazy" src="images/Group-18359.svg" alt="" />
                                <div className="text-block-95">Mark Henry</div>
                                <div className="div-block-412" />
                                <div className="text-block-96">Amount Due</div>
                                <div className="text-block-97">$250.00</div>
                                <div className="text-block-98">Visa $250.00</div>
                                <div className="div-block-412" />
                                <div className="text-block-96">Billing Plan</div>
                                <div className="text-block-99">Company Start</div>
                                <div className="div-block-413">
                                  <div className="div-block-414"><img loading="lazy" src="images/Group_2.svg" alt="" className="image-107" /></div>
                                  <div>
                                    <div className="text-block-100">5 team members ($8 / Month each)<br />100 GB Extra storage ($25.00)<br />8 extra hours ($2 / hour)</div>
                                  </div>
                                </div>
                                <div className="div-block-412" />
                                <div className="div-block-415">
                                  <div className="div-block-416">
                                    <div className="text-block-96">Billing Plan</div>
                                    <div className="text-block-101">275 New North Road, London‎</div>
                                  </div>
                                  <div className="div-block-417">
                                    <div className="text-block-96">Invoice Number</div>
                                    <div className="text-block-101">49682</div>
                                  </div>
                                  <div className="div-block-418">
                                    <div className="text-block-96">Due Date</div>
                                    <div className="text-block-101">15 May, 2022</div>
                                  </div>
                                </div>
                                <div className="div-block-412" />
                                <div className="div-block-419">
                                  <div className="div-block-421">
                                    <div className="div-block-420">
                                      <div className="text-block-96-copy">Subtotal: </div>
                                      <div className="text-block-101-copy">$250.00</div>
                                    </div>
                                    <div className="div-block-420">
                                      <div className="text-block-96-copy">Tax:</div>
                                      <div className="text-block-101-copy">$25.00</div>
                                    </div>
                                  </div>
                                  <div className="div-block-422">
                                    <div className="div-block-420">
                                      <div className="text-block-96-copy">Amount Due (USD):</div>
                                      <div className="text-block-101-copy">$275.00</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <a href="#" className="continue w-button">Continue</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer" />
            </div>
          </div>
        </div>
        <div className="edit-payment-popup">
          <div className="div-block-423">
            <div className="div-block-424">
              <h2 className="heading-157">Edit Payment information</h2><img src="images/Icon.svg" loading="lazy" data-w-id="df404d8e-f9f1-16f1-e018-608084f9f0d2" alt="" />
            </div>
            <div className="div-block-425">
              <div className="text-block-102">Payment method</div>
              <div className="div-block-426"><img src="images/Mask-Group.png" loading="lazy" alt="" className="image-108" />
                <div className="div-block-427"><img src="images/Icon-1.svg" loading="lazy" alt="" />
                  <div className="text-block-103">Add card</div>
                </div>
              </div>
            </div>
            <div className="form-block-10 w-form">
              <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get"><label htmlFor="name" className="field-label-23">Card Details*</label>
                <div className="div-block-303">
                  <div className="div-block-250"><img src="https://uploads-ssl.webflow.com/6271d71c0a9a983e97383a40/62789df4e23f8e9e847ebb92_Group%20342.svg" loading="lazy" alt="" className="image-14" /><input type="text" className="text-field-13 w-input" maxLength={256} name="Card-Number-2" data-name="Card Number 2" placeholder="0000 0000 0000 0000" id="Card-Number-2" required /></div>
                  <div className="div-block-250"><input type="text" className="text-field-13 right mmyy w-input" maxLength={256} name="field-2" data-name="Field 2" placeholder="MM/YY" id="field-2" required /><input type="text" className="text-field-13 right cvv w-input" maxLength={256} name="CVV-2" data-name="CVV 2" placeholder="CVV" id="CVV-2" required /><input type="text" className="text-field-13 right w-input" maxLength={256} name="ZIP-Code-2" data-name="ZIP Code 2" placeholder="ZIP Code" id="ZIP-Code-2" required /></div>
                </div><label htmlFor="field-4" className="field-label-23">Name *</label><input type="text" className="text-field-14 w-input" maxLength={256} name="field" data-name placeholder id="field-4" /><label htmlFor="field-5" className="field-label-23">Email*</label><input type="text" className="text-field-14 w-input" maxLength={256} name="field-5" data-name="Field 5" placeholder id="field-5" /><label htmlFor="field-5" className="field-label-23">Billing Address</label><input type="text" className="text-field-14 w-input" maxLength={256} name="field-5" data-name="Field 5" placeholder id="field-5" />
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <a href="#" className="continue w-button">Save and Continue</a>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>


    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync("public/content/generalSettings.md")
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  return {
    props: {
      data: parsedMarkdown.data
    }
  };
};

export default generalSettings;
