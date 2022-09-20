import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <div className="div-block">
                <div data-animation="default" data-collapse="medium" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar-3 w-nav">
                    <div className="container-4 w-container">
                        <div data-w-id="cb88c7eb-1086-d5d6-099f-57bb629d6c1f" className="menu-button-3 w-nav-button"><img src="images/Group_1.svg" loading="lazy" alt="" className="image-55" />
                            <div className="icon-3 w-icon-nav-menu" />
                        </div>
                        <Link href="index.html"><a aria-current="page" className="brand-2 w-nav-brand w--current">
                            <div className="text-block-16">Handoff</div>
                        </a></Link>
                        <nav role="navigation" className="nav-menu-3 w-nav-menu">
                            <Link href="pricing.html"><a className="nav-link-3 w-nav-link">Products</a></Link>
                            <Link href="pricing.html"><a className="nav-link-3 w-nav-link">Price</a></Link>
                            <Link href="about-us.html"><a className="nav-link-3 w-nav-link">Learn</a></Link>
                            <Link href="blog.html"><a className="nav-link-3 w-nav-link">Support</a></Link>
                        </nav>
                        <Link href="#"><a className="link">Sign In</a></Link>
                        <Link href="/sign-in"><a className="btn-cta-header2 w-button">Get Started</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}