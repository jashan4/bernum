import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const WhatWeDo = () => {
    return (
        <div className="what-we-do-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="what-we-do-content">
                            <span className="sub-title">What We Do</span>
                            <h2>We Help to Website Growth With Next Level Visitor</h2>
                            <p>We provide comprehensive, complete digital marketing solutions for various-sized businesses and industries. We build anything from responsive website designs for highly recognizable product brands to data-driven Web-based systems. We love to share information so contact us anytime to discuss your project interest.</p>
                            
                            <div className="skills-item">
                                <div className="skills-header">
                                    <h4 className="skills-title">Digital Marketing & SEO</h4>
                                    <div className="skills-percentage">
                                        <div className="count-box">95%</div>
                                    </div>
                                </div>
                                <div className="skills-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-width="95"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="what-we-do-content-accordion">
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Digital Marketing
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Need help developing brand identity, voice and your target market audience? This package offers a collaborative brainstorming of marketing initiatives and strategic planning for your branding & identity with complete digital marketing solutions.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Web Development
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>Whether you are an entrepreneur looking for a simple, affordable web design for your Start-Up, or a business professional seeking a cutting-edge website for your Fortune 500 company, we will work hand-in-hand with you to create the website of your dreams, all within your budget.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Graphic Design
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>We provide graphic design & branding services. We have one-on-one attention to every customer's satisfaction. We bring your brand to life with unique premium graphics, and be confident that you're always making a remarkable first impression.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;