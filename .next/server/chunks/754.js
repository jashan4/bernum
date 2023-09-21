"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 9754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Portfoliomain)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__(4990);
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./services/portfolio.js
const portfolioItems = [
    {
        id: 1,
        category: "graphic",
        imageSrc: "/images/p1.jpg",
        alt: "portfolio 1",
        title: "Online Shopping Store",
        des: "Magento 2.X with English &amp; Dutch - Creative graphics, UI/UX - Developed with MVC framework and API - Digital Marketing, SEO &amp; PPC."
    },
    {
        id: 2,
        category: "photography",
        imageSrc: "/images/p2.jpg",
        alt: "portfolio 2",
        title: "Smart Password Management",
        des: "Magento 2.X with English &amp; Dutch - Creative graphics, UI/UX - Developed with MVC framework and API - Digital Marketing, SEO &amp; PPC."
    },
    {
        id: 3,
        category: "wordpress",
        imageSrc: "/images/p3.jpg",
        alt: "portfolio 3",
        title: "Online Shopping Store",
        des: "Magento 2.X with English &amp; Dutch - Creative graphics, UI/UX - Developed with MVC framework and API - Digital Marketing, SEO &amp; PPC."
    },
    {
        id: 4,
        category: "printing",
        imageSrc: "/images/p4.jpg",
        alt: "portfolio 4",
        title: "Online Shopping Store",
        des: "Magento 2.X with English &amp; Dutch - Creative graphics, UI/UX - Developed with MVC framework and API - Digital Marketing, SEO &amp; PPC."
    },
    {
        id: 5,
        category: "graphic",
        imageSrc: "/images/p6.jpg",
        alt: "portfolio 1",
        title: "Imperial Chaina",
        des: "Magento 2.X with English &amp; Dutch - Creative graphics, UI/UX - Developed with MVC framework and API - Digital Marketing, SEO &amp; PPC."
    },
    {
        id: 6,
        category: "graphic",
        imageSrc: "/images/p6.png",
        alt: "portfolio 1",
        title: "  Creative style",
        des: "Magento 2.X with English &amp; Dutch - Creative graphics, UI/UX - Developed with MVC framework and API - Digital Marketing, SEO &amp; PPC."
    }
];
/* harmony default export */ const portfolio = (portfolioItems);

;// CONCATENATED MODULE: ./components/Portfolio-main.js







function Portfoliomain() {
    const { 0: lightboxOpen , 1: setLightboxOpen  } = (0,external_react_.useState)(false);
    const { 0: lightboxImageIndex , 1: setLightboxImageIndex  } = (0,external_react_.useState)(0);
    const { 0: activeFilter , 1: setActiveFilter  } = (0,external_react_.useState)("all"); /// set by default all portfolio
    const handleFilterClick = (filter)=>{
        setActiveFilter(filter); /// set new  portfolio category
    };
    const openLightbox = (index)=>{
        setLightboxOpen(true);
        setLightboxImageIndex(index);
    };
    const closeLightbox = ()=>{
        setLightboxOpen(false);
    };
    // filter
    const filteredItems = activeFilter === "all" ? portfolio : portfolio.filter((item)=>item.category === activeFilter);
    // // Define your images here
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "portfolio mt-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container ms-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-center my-9 text-3xl",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "text-3xl font-normal leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-5xl",
                                        children: [
                                            "Our",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: {
                                                    color: "rgb(245, 153, 72)"
                                                },
                                                children: " Portfolio"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "elementor-widget-container flex justify-center mt-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "elementor-divider"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                id: "portfolio",
                                className: "portfolio my-12",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "container offset-top-bot",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "filter-buttons flex justify-center gap-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    className: activeFilter === "all" ? "!bg-rose-500 text-white " : "",
                                                    onClick: ()=>handleFilterClick("all"),
                                                    children: "All"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    className: activeFilter === "graphic" ? "!bg-rose-500 text-white" : "",
                                                    onClick: ()=>handleFilterClick("graphic"),
                                                    children: "Graphic"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    className: activeFilter === "photography" ? "!bg-rose-500 text-white" : "",
                                                    onClick: ()=>handleFilterClick("photography"),
                                                    children: "Photography"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    className: activeFilter === "wordpress" ? "!bg-rose-500 text-white" : "",
                                                    onClick: ()=>handleFilterClick("wordpress"),
                                                    children: "Wordpress"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                    className: activeFilter === "printing" ? "!bg-rose-500 text-white" : "",
                                                    onClick: ()=>handleFilterClick("printing"),
                                                    children: "Printing"
                                                })
                                            ]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row ",
                                children: filteredItems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: `col-lg-4 col-md-6 col-sm-6 outer transition duration-700 ease-in-out  ${item.category}`,
                                        onClick: ()=>openLightbox(index),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "portfolio-img mt-3.5 ",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: item.imageSrc,
                                                    width: "100%",
                                                    alt: `Image ${item.id}`
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "content",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-item-caption-wrap caption-style-hoverer eael-slide-up",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "gallery-item-hoverer-bg"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "gallery-item-caption-over ",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    className: "fg-item-title",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                        children: item.title
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "fg-item-content",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: item.des
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }, item.id))
                            })
                        ]
                    })
                })
            }),
            lightboxOpen && /*#__PURE__*/ jsx_runtime_.jsx((external_react_image_lightbox_default()), {
                mainSrc: filteredItems[lightboxImageIndex].imageSrc,
                nextSrc: filteredItems[(lightboxImageIndex + 1) % filteredItems.length].imageSrc,
                prevSrc: filteredItems[(lightboxImageIndex + filteredItems.length - 1) % filteredItems.length].imageSrc,
                onCloseRequest: closeLightbox,
                onMovePrevRequest: ()=>setLightboxImageIndex((lightboxImageIndex + filteredItems.length - 1) % filteredItems.length),
                onMoveNextRequest: ()=>setLightboxImageIndex((lightboxImageIndex + 1) % filteredItems.length)
            })
        ]
    });
}


/***/ })

};
;