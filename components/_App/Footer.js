import React from "react";
import Link from "next/link";
import services from "../../services/services";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [footerMenus, setFooterMenus] = React.useState({
    explore: [],
    resources: [],
  });
  const [settings, setSettings] = React.useState();

  React.useEffect(() => {
    let getFooterMenus = services.getMenus("footer");
    setFooterMenus(getFooterMenus);

    let getSettings = services.getSettings();
    setSettings(getSettings);
  }, []);

  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <Link href="/">
                <a className="logo">
                  <img src="/images/main-logo.png" alt="logo" />
                </a>
              </Link>
              <p>
                Bernum is a tech-enabled digital marketing solutions provider,
                and we create custom strategies for each of our clients based on
                their needs and goals. We aim to help clients integrate their
                business vision and goals with their digital presence, showcase
                their expertise.
              </p>
              <ul className="social-link">
                <li>
                  <a
                    href={
                      (settings && settings.facebook) ||
                      "https://www.facebook.com"
                    }
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={
                      (settings && settings.twitter) ||
                      "https://www.twitter.com"
                    }
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={
                      (settings && settings.instagram) ||
                      "https://www.instagram.com"
                    }
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={
                      (settings && settings.linkedin) ||
                      "https://www.linkedin.com"
                    }
                    className="d-block"
                    target="_blank"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>
              <ul className="footer-links-list">
                {footerMenus.explore.map((item, index) => (
                  <li key={index}>
                    <Link href={item.to}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="single-footer-widget pl-2">
              <h3>Resources</h3>
              <ul className="footer-links-list">
                {footerMenus.resources.map((item, index) => (
                  <li key={index}>
                    <Link href={item.to}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-map"></i>
                  {settings && settings.address}
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href={"mailto:" + ((settings && settings.email) || "/#")}>
                    {settings && settings.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4">
              <p>
                <i className="bx bx-copyright"></i> {currentYear}{" "}
                <strong>Bernum</strong>
              </p>
            </div>

            <div className="col-lg-4 col-md-4">
              <ul className="designBy">
                <li>Design By</li>
                <li>
                  <Link href="https://freepik.com" passHref>
                    <a target="_blank" rel="noreferrer">
                      Freepik
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://storyset.com" passHref>
                    <a target="_blank" rel="noreferrer">
                      Storyset
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-4">
              <ul>
                <li>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="shape16">
        <img src="/images/shape/shape16.png" alt="image" />
      </div>
    </footer>
  );
};

export default Footer;
