import React, { useState } from "react";
import Link from "../../utils/ActiveLink";
import services from "../../services/services";

const NavbarStyleTwo = () => {
  const [menu, setMenu] = React.useState(true);
  const [headerMenus, setHeaderMenus] = React.useState([]);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
    // get navigation menus from db
    let getHeaderMenus = services.getMenus();
    setHeaderMenus(getHeaderMenus);
  }, []);

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-color-white">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img src="/images/main-logo.png" alt="logo" width={220} />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {/*{headerMenus.map(item=>{
                                        if(!item.hasOwnProperty('sub')){
                                            return (
                                                <li className="nav-item" key={item.id}>
                                                    <Link href={item.to} activeClassName="active" className="nav-link">
                                                        <a onClick={toggleNavbar} className="nav-link">{item.title}</a>
                                                    </Link>        
                                                </li>        
                                            )
                                        } else if (item.hasOwnProperty('sub')){
                                            return (
                                                <li className="nav-item">
                                                    <Link href={item.to} activeClassName="active" className="nav-link">
                                                        <a onClick={e => e.preventDefault()} className="nav-link">{item.title}</a>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        {item.sub.map(submenu=>{
                                                            return (
                                                                <li className="nav-item">
                                                                    <Link href={submenu.to} activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">{submenu.title}</a>
                                                                    </Link>
                                                                </li> 
                                                            )
                                                        })}
                                                    </ul>
                                                </li>
                                            )
                                        }
                                    })}*/}
                  {headerMenus.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <Link
                        href={item.to}
                        activeClassName="active"
                        sub={item.sub || []}
                      >
                        <a
                          onClick={(e) => {
                            toggleNavbar();
                            if (item.sub && item.sub.length > 0) {
                              e.preventDefault();
                            }
                          }}
                          className="nav-link"
                        >
                          {item.title}{" "}
                          {item.sub && item.sub.length > 0 ? (
                            <i className="bx bx-chevron-down"></i>
                          ) : (
                            ""
                          )}
                        </a>
                      </Link>
                      {item.sub && item.sub.length > 0 ? (
                        <ul className="dropdown-menu">
                          {item.sub.map((subItem, subIndex) => (
                            <li className="nav-item" key={subIndex}>
                              <Link
                                href={subItem.to}
                                activeClassName="active"
                                onClick={() => {
                                  console.log(this);
                                }}
                              >
                                <a
                                  onClick={(e) => toggleNavbar()}
                                  className="nav-link"
                                >
                                  {subItem.title}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="bx bx-x"></i>
            </button>

            <div className="modal-body">
              <div className="logo">
                <Link href="/">
                  <a className="d-inline-block">
                    <img src="/images/logo.png" alt="image" />
                  </a>
                </Link>
              </div>

              <div className="instagram-list">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img1.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img2.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img3.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img4.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img5.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                    <div className="box">
                      <img src="/images/team/team-img6.jpg" alt="image" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-contact-info">
                <h2>
                  <a href="tel:+11234567890">+1 (123) 456 7890</a>
                  <span>OR</span>
                  <a href="mailto:hello@mibix.com">hello@mibix.com</a>
                </h2>
              </div>

              <ul className="social-list">
                <li>
                  <span>Follow Us On:</span>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/" target="_blank">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default NavbarStyleTwo;
