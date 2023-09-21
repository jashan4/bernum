import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 5,
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

const MainBanner = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    // Carousel
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="home-wrapper-area">
                <div className="container-fluid">
                    {display ? <OwlCarousel 
                        className="home-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-banner-item">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-content">
                                        <span className="sub-title">Grow Online</span>
                                        <h1>We Provide Best Web Design and Development Services</h1>
                                        <p>Barnum has helped many business excel by creating their online presence with creative, fast, optimized and responsive web design and development solutions.</p>
                                        
                                        <div className="btn-box">
                                            <div className="d-flex align-items-center">
                                                <Link href="/contact">
                                                    <a className="default-btn">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                    <img src="/images/home/banner1.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-banner-item">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-content">
                                        <span className="sub-title">Sell More</span>
                                        <h1>Get A Complete Digital Marketing Solutions.</h1>
                                        <p>We have a big team of digital marketing professionals dedicated to creative and results-driven web-based solutions using the latest trends and technologies.</p>
                                        
                                        <div className="btn-box">
                                            <div className="d-flex align-items-center">
                                                <Link href="/contact">
                                                    <a className="default-btn">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <img src="/images/home/banner2.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>

                <div className="shape1"><img src="/images/shape/shape1.png" alt="image" /></div>
                <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
                <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
                <div className="shape4"><img src="/images/shape/shape4.png" alt="image" /></div>
                <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
                <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
                <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
                <div className="shape8"><img src="/images/shape/shape8.png" alt="image" /></div>
                <div className="shape13"><img src="/images/shape/shape13.png" alt="image" /></div>
                <div className="shape14"><img src="/images/shape/shape14.png" alt="image" /></div>
            </div>
        </>
    )
}

export default MainBanner;