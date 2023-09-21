import React from "react";
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Pricing from "../components/Common/Pricing";
import StartProjectWithUs from "../components/Common/StartProjectWithUs";
import Head from "next/head";

const GraphicDesign = () => {
  return (
    <>
      <Head>
        <title>Graphic Design | Bernum</title>
        <meta name="description" content="graphic design" />
        <meta name="keywords" content="graphic design" />
      </Head>
      <NavbarStyleTwo />

      <PageBanner pageTitle="Graphic Design" />

      <div className="overview-area ptb-100">
        <div className="container">
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">Digital Marketing</span>
                <h2>Design & Marketing For Forward-Thinking Businesses</h2>
                <p>
                  We will turn what makes you unique into what makes you
                  unforgettable. With thousands of clients and counting, Bernum
                  is the clear choice for true business visionaries!
                </p>
                <div className="features-text">
                  <p>
                    At Bernum, we believe that the visual experience speaks a
                    lot about the brand. It tells your story, stimulates
                    emotions and helps you connect with your potential
                    customers. Our creative graphic designers are experts at
                    building a fresh visual persona for your business. They can
                    also give your existing brand a complete makeover. Attention
                    to detail is reflected in providing a uniform outlook. We
                    offer this through professional design services covering all
                    design categories, from company logo and company website to
                    business cards, flyers, brochures, image ads, catalogs, book
                    covers, and much more. Your graphic is like your impression,
                    conveying what you’re about and creating an impression that
                    will last a lifetime. Every aspect of your marketing is then
                    built upon this, as it provides the foundation for your
                    ever-growing business. Our dream-team of marketing and
                    design professionals will custom craft your perfect brand
                    identity from the ground up.
                  </p>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <img
                  src="/images/services/graphic-designer-1.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <img src="/images/services/graphic-design-2.jpg" alt="image" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <span className="sub-title">Social Media Marketing</span>
                <h2>Solution for Creative Graphic Design</h2>
                <p>
                  Every successful business has a unique visual identity. Our
                  graphic designers can craft the right one for you by offering
                  clean, trendy, and aesthetically appealing design options for
                  marketing collateral that help deliver the right message to
                  your audience, boost customer retention, and encourage
                  brand-led growth while keeping the brand value intact.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Branding
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Logo Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Business Card
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Flyer Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Banner Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-check"></i> Poster Design
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
            <h2>Perfect Creative Solutions</h2>
            <p>
              We have delivered immaculate design solutions to hundreds of our
              clients worldwide and have received great feedback.
            </p>
          </div>

          <div className="row">
            {/* <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-content"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Informative Content</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div> */}

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-darts"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Brand Recognition</h3>
                <p>
                  The major benefit of graphic design for businesses is that it
                  helps in establishing a visual identity for the brand, which
                  is a reflection of the company’s values and goals.
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
                <h3>Communication</h3>
                <p>
                  Graphic designs help in effective communication with the
                  viewers, as visual aids are better at communicating ideas.
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
                <h3>Building Trust and Goodwill</h3>
                <p>
                  Graphic design helps to create a professional brand image.
                  This professional image helps in building trust and
                  credibility in the minds of the customers.
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
                <h3>Higher conversions</h3>
                <p>
                  The key benefit of graphic design for businesses is that it
                  can help gain high visibility, which in turn can result in
                  higher conversions.
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
                <h3>Good Impression</h3>
                <p>
                  Your graphic is like your impression, conveying what you’re
                  about and creating an impression that will last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pricing />

      <StartProjectWithUs />

      <Footer />
    </>
  );
};

export default GraphicDesign;
