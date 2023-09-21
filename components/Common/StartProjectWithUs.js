import React from 'react';
import Link from 'next/link';

const StartProjectWithUs = () => {
    return (
        <div className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src="/images/project-start1.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <span className="sub-title">Get Started</span>
                            <h2>We Would Like to Start Your Project With Us.</h2>
                            <p>A Website Is The First Level Of Interaction Between You And Your Potential Audience On The Web. We create high-quality website designs that serve your business goals, whether you want to generate leads, increase exposure, or make your business run more smoothly. We build game-changing websites for our clients. Achieve all of your goals online with one digital agency that can do it all. We have a world-class web design team with years of expertise in designing website templates. They know the hot points of a website and are capable of placing key information and elements exactly in the right place. Hire the topmost developers from the best web design agency at a nominal price to get your online presence today.</p>
                            
                            <Link href="/contact">
                                <a className="default-btn">Get Started</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
            <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
            <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
            <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
        </div>
    )
}

export default StartProjectWithUs;