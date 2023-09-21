import React from 'react';
import Link from 'next/link';

const ServicesCard = () => {
    return (
        <div className="services-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Services</span>
                    <h2>Let's Check Our Services</h2>
                    <p>Need a quote on a development & design or a new project? Please give us some details on your project and let us help!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-megaphone"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/web-development">
                                    <a>Web Development</a>
                                </Link>
                            </h3>
                            <p>Whether you are an entrepreneur looking for a simple, affordable for your Start-Up, or a business professional seeking a cutting-edge website for your Fortune 500 company, we will work hand-in-hand with you to create the website of your dreams, all within your budget</p>

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
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-keywords"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/web-development">
                                    <a>Mobile Development</a>
                                </Link>
                            </h3>
                            <p>We provide mobile development services. We have one-on-one attention to every customer's satisfaction. We bring your brand to life with unique premium mobile applications and be confident that you'll be delighted.</p>
                            
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
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-content-management"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/web-design">
                                    <a>Web Design</a>
                                </Link>
                            </h3>
                            <p>Our creative web design services can help you rediscover your business's image in the Internet marketplace. The blending of style and technology we offer and our expertise enables your business to succeed on the Web.</p>
                            
                            <Link href="/web-design">
                                <a className="learn-more-btn">
                                    <i className="left-icon flaticon-next-button"></i> 
                                    Learn More 
                                    <i className="right-icon flaticon-next-button"></i>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-ppc"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
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

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-competitor"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/web-development">
                                    <a>Software Testing</a>
                                </Link>
                            </h3>
                            <p>Provide a one-stop source for custom software development. We provide fast-growing tech softwares because we have a dedicated engineering team delivering scalable products that users love.</p>
                            
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
                        <div className="single-services-box">
                            <div className="icon">
                                <i className="flaticon-startup"></i>
                                <div className="circles-box">
                                    <div className="circle-one"></div>
                                    <div className="circle-two"></div>
                                </div>
                            </div>
                            <h3>
                                <Link href="/digital-marketing">
                                    <a>Digital Marketing</a>
                                </Link>
                            </h3>
                            <p>Need help developing brand identity, voice and your target market audience? This package offers a collaborative brainstorming of marketing initiatives and strategic planning for your branding & identity with complete digital marketing solutions.</p>
                            
                            <Link href="/digital-marketing">
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

export default ServicesCard;