"use strict";
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 5245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(717);




const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    const [footerMenus, setFooterMenus] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
        explore: [],
        resources: []
    });
    const [settings, setSettings] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        let getFooterMenus = _services_services__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getMenus */ .Z.getMenus("footer");
        setFooterMenus(getFooterMenus);
        let getSettings = _services_services__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getSettings */ .Z.getSettings();
        setSettings(getSettings);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "footer-area",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: "logo",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/images/main-logo.png",
                                                    alt: "logo"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "Bernum is a tech-enabled digital marketing solutions provider, and we create custom strategies for each of our clients based on their needs and goals. We aim to help clients integrate their business vision and goals with their digital presence, showcase their expertise."
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "social-link",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: settings && settings.facebook || "https://www.facebook.com",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "bx bxl-facebook"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: settings && settings.twitter || "https://www.twitter.com",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "bx bxl-twitter"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: settings && settings.instagram || "https://www.instagram.com",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "bx bxl-instagram"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: settings && settings.linkedin || "https://www.linkedin.com",
                                                        className: "d-block",
                                                        target: "_blank",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "bx bxl-linkedin"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-2 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "single-footer-widget pl-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Explore"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "footer-links-list",
                                            children: footerMenus.explore.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: item.to,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: item.title
                                                        })
                                                    })
                                                }, index))
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-2 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "single-footer-widget pl-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Resources"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "footer-links-list",
                                            children: footerMenus.resources.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: item.to,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            children: item.title
                                                        })
                                                    })
                                                }, index))
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            children: "Address"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "footer-contact-info",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "bx bx-map"
                                                        }),
                                                        settings && settings.address
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "bx bx-envelope"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "mailto:" + (settings && settings.email || "/#"),
                                                            children: settings && settings.email
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "footer-bottom-area",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row align-items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "bx bx-copyright"
                                            }),
                                            " ",
                                            currentYear,
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                children: "Bernum"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "designBy",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: "Design By"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "https://freepik.com",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: "Freepik"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "https://storyset.com",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        children: "Storyset"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-4 col-md-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/privacy-policy",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "Privacy Policy"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/terms-of-service",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: "Terms & Conditions"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "shape16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/images/shape/shape16.png",
                    alt: "image"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _App_NavbarStyleTwo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./utils/ActiveLink.js




const ActiveLink = ({ router , children , ...props })=>{
    const child = external_react_.Children.only(children);
    let className = child.props.className || "";
    if (router.pathname === props.href && props.activeClassName) {
        className = `${className} ${props.activeClassName}`.trim();
    }
    if (props.hasOwnProperty("sub") && props.sub.length > 0 && props.sub.filter((e)=>e.to === router.pathname).length > 0) {
        className = `${className} ${props.activeClassName}`.trim();
    }
    delete props.activeClassName;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        ...props,
        children: /*#__PURE__*/ external_react_default().cloneElement(child, {
            className
        })
    });
};
/* harmony default export */ const utils_ActiveLink = ((0,router_.withRouter)(ActiveLink));

// EXTERNAL MODULE: ./services/services.js + 7 modules
var services = __webpack_require__(717);
;// CONCATENATED MODULE: ./components/_App/NavbarStyleTwo.js




const NavbarStyleTwo = ()=>{
    const [menu, setMenu] = external_react_default().useState(true);
    const [headerMenus, setHeaderMenus] = external_react_default().useState([]);
    const toggleNavbar = ()=>{
        setMenu(!menu);
    };
    external_react_default().useEffect(()=>{
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", ()=>{
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
        // get navigation menus from db
        let getHeaderMenus = services/* default.getMenus */.Z.getMenus();
        setHeaderMenus(getHeaderMenus);
    }, []);
    // Search Modal
    const { 0: isActiveSearchModal , 1: setActiveSearchModal  } = (0,external_react_.useState)("false");
    const handleToggleSearchModal = ()=>{
        setActiveSearchModal(!isActiveSearchModal);
    };
    // Sidebar Modal
    const { 0: isActiveSidebarModal , 1: setActiveSidebarModal  } = (0,external_react_.useState)("false");
    const handleToggleSidebarModal = ()=>{
        setActiveSidebarModal(!isActiveSidebarModal);
    };
    const classOne = menu ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = menu ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "navbar",
                className: "navbar-area navbar-color-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "main-nav",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            className: "navbar navbar-expand-lg navbar-light",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(utils_ActiveLink, {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        onClick: toggleNavbar,
                                        className: "navbar-brand",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/images/main-logo.png",
                                            alt: "logo",
                                            width: 220
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    onClick: toggleNavbar,
                                    className: classTwo,
                                    type: "button",
                                    "data-toggle": "collapse",
                                    "data-target": "#navbarSupportedContent",
                                    "aria-controls": "navbarSupportedContent",
                                    "aria-expanded": "false",
                                    "aria-label": "Toggle navigation",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon-bar top-bar"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon-bar middle-bar"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "icon-bar bottom-bar"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: classOne,
                                    id: "navbarSupportedContent",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "navbar-nav",
                                        children: headerMenus.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(utils_ActiveLink, {
                                                        href: item.to,
                                                        activeClassName: "active",
                                                        sub: item.sub || [],
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            onClick: (e)=>{
                                                                toggleNavbar();
                                                                if (item.sub && item.sub.length > 0) {
                                                                    e.preventDefault();
                                                                }
                                                            },
                                                            className: "nav-link",
                                                            children: [
                                                                item.title,
                                                                " ",
                                                                item.sub && item.sub.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "bx bx-chevron-down"
                                                                }) : ""
                                                            ]
                                                        })
                                                    }),
                                                    item.sub && item.sub.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: "dropdown-menu",
                                                        children: item.sub.map((subItem, subIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                className: "nav-item",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(utils_ActiveLink, {
                                                                    href: subItem.to,
                                                                    activeClassName: "active",
                                                                    onClick: ()=>{
                                                                        console.log(undefined);
                                                                    },
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        onClick: (e)=>toggleNavbar(),
                                                                        className: "nav-link",
                                                                        children: subItem.title
                                                                    })
                                                                })
                                                            }, subIndex))
                                                    }) : ""
                                                ]
                                            }, index))
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "d-table",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-table-cell",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "search-overlay-layer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "search-overlay-layer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "search-overlay-layer"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "search-overlay-close",
                                onClick: handleToggleSearchModal,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "search-overlay-close-line"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "search-overlay-close-line"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "search-overlay-form",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            className: "input-search",
                                            placeholder: "Search here..."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "flaticon-search"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `sidebarModal modal right ${isActiveSidebarModal ? "" : "show"}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal-dialog",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                className: "close",
                                onClick: handleToggleSidebarModal,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "bx bx-x"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "modal-body",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(utils_ActiveLink, {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "d-inline-block",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/logo.png",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "instagram-list",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-4 col-md-4 col-sm-4 col-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/team/team-img1.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-instagram"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://www.instagram.com/",
                                                                target: "_blank",
                                                                className: "link-btn"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-4 col-md-4 col-sm-4 col-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/team/team-img2.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-instagram"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://www.instagram.com/",
                                                                target: "_blank",
                                                                className: "link-btn"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-4 col-md-4 col-sm-4 col-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/team/team-img3.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-instagram"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://www.instagram.com/",
                                                                target: "_blank",
                                                                className: "link-btn"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-4 col-md-4 col-sm-4 col-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/team/team-img4.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-instagram"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://www.instagram.com/",
                                                                target: "_blank",
                                                                className: "link-btn"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-4 col-md-4 col-sm-4 col-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/team/team-img5.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-instagram"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://www.instagram.com/",
                                                                target: "_blank",
                                                                className: "link-btn"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "col-lg-4 col-md-4 col-sm-4 col-6",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/images/team/team-img6.jpg",
                                                                alt: "image"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "bx bxl-instagram"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "https://www.instagram.com/",
                                                                target: "_blank",
                                                                className: "link-btn"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "sidebar-contact-info",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "tel:+11234567890",
                                                    children: "+1 (123) 456 7890"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "OR"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "mailto:hello@mibix.com",
                                                    children: "hello@mibix.com"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "social-list",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Follow Us On:"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.facebook.com/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "bx bxl-facebook"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://twitter.com/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "bx bxl-twitter"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.youtube.com/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "bx bxl-youtube"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://www.linkedin.com/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "bx bxl-linkedin"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const _App_NavbarStyleTwo = (NavbarStyleTwo);


/***/ }),

/***/ 5085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tr": () => (/* binding */ GOOGLE),
/* harmony export */   "_n": () => (/* binding */ BASE_URL),
/* harmony export */   "vh": () => (/* binding */ APIS)
/* harmony export */ });
/* unused harmony export DEFAULTS */
const BASE_URL = "https://bernum.herokuapp.com/api/";
const APIS = {
    contactUs: `SendEmail/sendEmail`
};
const DEFAULTS = {
    contact_to_email: "support@bernum.com"
};
const GOOGLE = {
    RECAPTCH_SITE_KEY: "6LcCGDYmAAAAACi3Iszel2Hp370XxGXC_ssVuttV"
};


/***/ }),

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ services)
});

;// CONCATENATED MODULE: ./fakedb/navigation-menu.js
const headerMenus = [
    {
        id: "1",
        title: "Home",
        to: "/"
    },
    {
        id: "2",
        title: "About",
        to: "/about-us"
    },
    {
        id: "3",
        title: "Services",
        to: "/#",
        sub: [
            {
                id: "1",
                title: "Web Development",
                to: "/web-development"
            },
            {
                id: "2",
                title: "Web Design",
                to: "/web-design"
            },
            {
                id: "3",
                title: "Graphic Design",
                to: "/graphic-design"
            },
            {
                id: "4",
                title: "Digital Marketing",
                to: "/digital-marketing"
            }, 
        ]
    },
    {
        id: "4",
        title: "Contact",
        to: "/contact"
    }, 
];
const footerMenus = {
    explore: [
        {
            id: "1",
            title: "Home",
            to: "/"
        },
        {
            id: "2",
            title: "About Us",
            to: "/about-us"
        },
        {
            id: "4",
            title: "Contact",
            to: "/contact"
        }, 
    ],
    resources: [
        {
            id: "1",
            title: "Team",
            to: "/team"
        },
        {
            id: "2",
            title: "Contact",
            to: "/contact"
        },
        {
            id: "4",
            title: "FAQ",
            to: "/faq"
        }, 
    ]
};

;// CONCATENATED MODULE: ./services/navigationServices.js

const navigationServices = {
    getMenus: (type = "header")=>{
        return type === "header" ? headerMenus : footerMenus;
    }
};

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./utils/axiosUtils.js

const api = external_axios_default().create({
    baseURL: "https://www.web-xperts.xyz/team/webservices/ReactApi/",
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
    }
});
/* harmony default export */ const axiosUtils = (api);

;// CONCATENATED MODULE: ./services/portfolioServices.js

const portfolioServices = {
    getProjects: async (page = 1)=>{
        return await axiosUtils.get(`Projects/projectByPage?page_no=${page}`);
    },
    getSingleProjects: async (id)=>{
        return await axiosUtils.get(`Projects/projectById?id=${id}`);
    }
};

;// CONCATENATED MODULE: ./fakedb/settings.js
const settings = {
    mobile: "+1 5195050065",
    telephone: "+1 5195050065",
    email: "support@bernum.ca",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com"
};

;// CONCATENATED MODULE: ./services/settingsServices.js

const settingsServices = {
    getSettings: ()=>{
        return settings;
    }
};

// EXTERNAL MODULE: ./configs/constant.config.js
var constant_config = __webpack_require__(5085);
;// CONCATENATED MODULE: ./services/contactUsServices.js


const contactUsServices = {
    contactUs: async (data)=>{
        return await axiosUtils.post(constant_config/* APIS.contactUs */.vh.contactUs, data);
    }
};

;// CONCATENATED MODULE: ./services/services.js




/* harmony default export */ const services = ({
    ...navigationServices,
    ...portfolioServices,
    ...settingsServices,
    ...contactUsServices
});


/***/ })

};
;