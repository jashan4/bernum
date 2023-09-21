import React from "react";
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Head from "next/head";
const Faq = () => {
  return (
    <>
      <Head>
        <title>FAQ | Bernum</title>
        <meta name="description" content="faq" />
        <meta name="keywords" content="faq" />
      </Head>
      <NavbarStyleTwo />

      <PageBanner pageTitle="Frequently Asked Questions" />

      <div className="faq-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="faq-item">
                <h3>Q: What is digital marketing?</h3>
                <p>
                  <strong>A:</strong> Digital marketing involves marketing to
                  people using Internet-connected electronic devices, namely
                  computers, smartphones and tablets. Digital marketing focuses
                  on channels such as search engines, social media, email,
                  websites and apps to connect with prospects and customers.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="faq-item">
                <h3>Q: What does a digital marketer do?</h3>
                <p>
                  <strong>A:</strong> Digital marketing involves marketing to
                  people using Internet-connected electronic devices, namely
                  computers, smartphones and tablets. Digital marketing focuses
                  on channels such as search engines, social media, email,
                  websites and apps to connect with prospects and customers.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="faq-item">
                <h3>Q: Would my business benefit from digital marketing?</h3>
                <p>
                  <strong>A:</strong> Digital marketing involves marketing to
                  people using Internet-connected electronic devices, namely
                  computers, smartphones and tablets. Digital marketing focuses
                  on channels such as search engines, social media, email,
                  websites and apps to connect with prospects and customers.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="faq-item">
                <h3>Q: What’s the biggest mistake digital marketers make?</h3>
                <p>
                  <strong>A:</strong> Digital marketing involves marketing to
                  people using Internet-connected electronic devices, namely
                  computers, smartphones and tablets. Digital marketing focuses
                  on channels such as search engines, social media, email,
                  websites and apps to connect with prospects and customers.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="faq-item">
                <h3>Q: How often should I update my website?</h3>
                <p>
                  <strong>A:</strong> Digital marketing involves marketing to
                  people using Internet-connected electronic devices, namely
                  computers, smartphones and tablets. Digital marketing focuses
                  on channels such as search engines, social media, email,
                  websites and apps to connect with prospects and customers.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="faq-item">
                <h3>Q: What do I need to know about mobile?</h3>
                <p>
                  <strong>A:</strong> Digital marketing involves marketing to
                  people using Internet-connected electronic devices, namely
                  computers, smartphones and tablets. Digital marketing focuses
                  on channels such as search engines, social media, email,
                  websites and apps to connect with prospects and customers.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="faq-item">
                <h3>Q: What is content marketing?</h3>
                <p>
                  <strong>A:</strong> Digital marketing involves marketing to
                  people using Internet-connected electronic devices, namely
                  computers, smartphones and tablets. Digital marketing focuses
                  on channels such as search engines, social media, email,
                  websites and apps to connect with prospects and customers.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="faq-item">
                <h3>Q: Do I need a blog?</h3>
                <p>
                  <strong>A:</strong> Digital marketing involves marketing to
                  people using Internet-connected electronic devices, namely
                  computers, smartphones and tablets. Digital marketing focuses
                  on channels such as search engines, social media, email,
                  websites and apps to connect with prospects and customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faq;
