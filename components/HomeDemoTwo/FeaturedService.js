import React from 'react';
import Link from 'next/link';

const FeaturedService = () => {
    return (
        <div className="boxes-area pb-70">
            <div className="container">
                <div className="row">
                  

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-speed"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/web-development">
                                    <a>Web Development</a>
                                </Link>
                            </h3>
                            <p>Whether you are an entrepreneur looking for a simple, affordable website for your Start-Up, or a business professional seeking a cutting-edge website for your Fortune 500 company, we will work hand-in-hand with you to create the website of your dreams, all within your budget.</p>
                            
                            <Link href="/web-development">
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-research"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/digital-marketing">
                                    <a>Digital Marketing</a>
                                </Link>
                            </h3>
                            <p>Need help in developing brand identity and your target market audience? This package offers a collaborative brainstorming of marketing initiatives and strategic planning for your branding & identity with complete digital marketing solutions.</p>

                            <Link href="/digital-marketing">
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-boxes-box">
                            <div className="icon">
                                <i className="flaticon-email-marketing"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/graphic-design">
                                    <a>Graphic Design</a>
                                </Link>
                            </h3>
                            <p>We provide graphic design & branding services. We have one-on-one attention to every customer's satisfaction. We bring your brand to life with unique premium graphics, and be confident that you're always making a remarkable first impression.</p>
                            
                            <Link href="/graphic-design">
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedService;