import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <div className="about-area pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src="/images/about-img2.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="text">
                                <span className="sub-title">About Us</span>
                                <h2>Enjoy Full-Service Digital Marketing Expertise</h2>
                                <p>We're a Top-rated web development & designing agency focused on creative and results-driven solutions. Whether it's to , provide support, sell products or promote your brand, allow our web design services to bring your company front and center. Our web design services have a proven track record of what it takes to have a successful website. Our firm shines in conceptualizing inspired and inventive online business models, brand-friendly websites, powerful direct response tactics, and ingenious marketing strategies that create hyper-growth for our clients. We've had the privilege to work with many companies across many industries. We are prepared to bring our knowledge and experience to your next digital project. Every Web and marketing professional here at Bernum understands the importance of being a client-first digital agency that places unparalleled value on building long-term relationships, providing superb customer service and developing high-quality web-based solutions. We have experienced Web Design and SEO Marketing Specialists.</p>
                                
                                <ul className="funfacts-list">
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-menu-1"></i>
                                            <h3>376</h3>
                                            <p>Completed projects</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-web-settings"></i>
                                            <h3>7548</h3>
                                            <p>Working hours were spent</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-conversation"></i>
                                            <h3>350</h3>
                                            <p>Expert team members</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link href="/about-us">
                                    <a className="default-btn">More About Us</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape15">
                <img src="/images/shape/shape15.png" alt="image" />
            </div>
        </div>
    )
}

export default AboutSection;