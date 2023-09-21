import React from "react";
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import StartProjectWithUs from "../components/Common/StartProjectWithUs";
import Head from "next/head";

const DigitalMarketing = () => {
  return (
    <>
      <Head>
        <title>Degital Marketing | Bernum</title>
        <meta name="description" content="digital marketing" />
        <meta name="keywords" content="digital marketing" />
      </Head>
      <NavbarStyleTwo />

      <PageBanner pageTitle="Digital Marketing" />

      <div className="overview-area ptb-100">
        <div className="container">
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Digital Marketing</span>
                <h2>
                  All - Inclusive Digital Marketing Packages For Business
                  Excellence All
                </h2>
                <p>
                  With long years of work, research, and analysis in direction
                  to help the small businesses to board on the path to
                  all-around success and development, Bernum has become the
                  prominent brand in the world of online branding
                </p>

                <ul class="marketingList">
                  <li>Dedicated project managers</li>
                  <li>Regular reporting and monitoring</li>
                  <li> Workforce of SEO experts</li>
                  <li>
                    {" "}
                    Competitive and comparative based digital marketing strategy
                  </li>
                  <li>On-Page and Off-Page SEO service through professional</li>
                  <li>
                    {" "}
                    Keyword research and analysis through value-added and data
                    driven approach
                  </li>
                </ul>
                <div className="features-text">
                  <h4>Digital marketing that actually works.</h4>
                  <p>
                    Our team is comprised of digital marketing experts with
                    decades of experience. We combine our knowledge in managing
                    cutting-edge ad-tech platforms with your company’s growth
                    objectives to increase revenue through cross-channel
                    campaigns and design.
                  </p>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <img
                  src="/images/services/degitial-marketing-1.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <img
                  src="/images/services/digital-marketing-2.jpg"
                  alt="image"
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">Social Media Marketing</span>
                <h2>Digital marketing that actually works.</h2>
                <p>
                  Our team is comprised of digital marketing experts with
                  decades of experience. We combine our knowledge in managing
                  cutting-edge ad-tech platforms with your company’s growth
                  objectives to increase revenue through cross-channel campaigns
                  and design.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Recommender Systems
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Demand Prediction
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Omnichannel Analytics
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Lead Generation
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Dedicated Developers
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Creativity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Digital Marketing</span>
            <h2>Get A Complete Digital Marketing Solution </h2>
            <p>
              focused on creative and results-driven solutions. Whether it's to
              provide support, sell products, or promote your brand.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-content"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Informative Content</h3>
                <p>
                  The purpose of informational content is to help answer the
                  questions those in your industry are asking and to provide
                  solutions to the problems they're experiencing. Informational
                  content educates your audience and showcases your expertise.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-darts"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Visitor Growth</h3>
                <p>
                  Website traffic growth is a marketing metric that measures the
                  increase or decrease in visitors to your site, typically
                  either month-over-month or year-over-year.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-bar-chart"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Google Analytics</h3>
                <p>
                  It includes features that can help users identify trends and
                  patterns in how visitors engage with their websites. Features
                  enable data collection, analysis, monitoring, visualization,
                  reporting and integration with other applications.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-megaphone"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Innovative Strategies</h3>
                <p>
                  The innovation mission is a detailed plan that aims to create
                  new value for which customers are willing to pay. It includes
                  a set of policies or behaviours geared toward achieving future
                  organisational growth.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-link"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Link Building</h3>
                <p>
                  For acquiring hyperlinks from other websites to your own A
                  hyperlink (usually just called a link) is a way for users to
                  navigate between pages on the Internet. Search engines use
                  links to crawl the web.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-reputation"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Reputation Management</h3>
                <p>
                  Influencing stakeholder perceptions and public conversations
                  about an organisation and its brands. It includes monitoring
                  perceptions and conversations, responding to reputation
                  threats, and proactively seizing opportunities to boost your
                  reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StartProjectWithUs />

      <Footer />
    </>
  );
};

export default DigitalMarketing;
