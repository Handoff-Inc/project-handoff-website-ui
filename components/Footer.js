import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <div className="div-block-24">
                <div className="footer-wrap">
                    <div className="column-1">
                        <div className="text-block-16">Handoff</div>
                        <div className="text-block-41">Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor</div>
                        <h5 className="copyright-text">Copyright @2022. All Rights Reserved.</h5>
                    </div>
                    <div className="column-2">
                        <h1 className="heading-5">About</h1>
                        <Link href="#"><a className="list-item">About Us</a></Link>
                        <Link href="#"><a className="list-item">Blogs</a></Link>
                        <Link href="#"><a className="list-item">Services</a></Link>
                        <Link href="#"><a className="list-item">Careers</a></Link>
                    </div>
                    <div className="column-3">
                        <h1 className="heading-5">Follow Us</h1>
                        <Link href="#"><a className="link-block w-inline-block"><img src="images/feather_facebook.svg" loading="lazy" alt="" className="image-59" />
                            <div className="text-block-42">fb.com/handoff</div>
                        </a></Link>
                        <Link href="#"><a className="link-block w-inline-block"><img src="images/feather_instagram.svg" loading="lazy" alt="" className="image-59" />
                            <div className="text-block-42">@/handoff</div>
                        </a></Link>
                        <Link href="#"><a className="link-block w-inline-block"><img src="images/feather_twitter.svg" loading="lazy" alt="" className="image-59" />
                            <div className="text-block-42">@/handoff</div>
                        </a></Link>
                        <Link href="#"><a className="link-block w-inline-block"><img src="images/feather_dribbble.svg" loading="lazy" alt="" className="image-59" />
                            <div className="text-block-42">Dribbble.com/handoff</div>
                        </a></Link>
                    </div>
                    <div className="column-4">
                        <h1 className="heading-5">Get in touch with us</h1>
                        <div className="div-block-25">
                            <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get"><label htmlFor="Email" className="field-label">Need Answers? Need help ? Just email us</label><input type="email" className="text-field w-input" maxLength={256} name="Email" data-name="Email" placeholder="Your Email" id="Email" /></form>
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
            </div>
        </div>
    )
}