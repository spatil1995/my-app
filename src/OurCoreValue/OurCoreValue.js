import React from 'react'
import './OurCoreValue.css';
import Slider from "react-slick";

function OurCoreService() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <section id="OurCoreValue" className="ourcoreservice">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Check our Services</p>
                        <h5>We are team of passionate young minds building a stairway to the   Future.</h5>
                        <h6> "The positive spirit with which we support each other fosters open, honest, and meaningful relationships. We
                            celebrate and embrace our diversity. We invest in each other because we win or lose as a team."</h6>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-4 col-md-6 d-flex align-items-stretch"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="icon-box  w-100">
                                <div className="icon">W
                                </div>
                                <h4>
                                    <a href="">Wisdom</a>
                                </h4>
                                <p>
                                    The journey of a thousand miles begins with one step.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <div className="icon-box  w-100">
                                <div className="icon">
                                    E
                                </div>
                                <h4>
                                    <a href="">Efficiency</a>
                                </h4>
                                <p>
                                    Obviously, the highest type of efficiency is that which can
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                            data-aos="zoom-in"
                            data-aos-delay={300}
                        >
                            <div className="icon-box  w-100">
                                <div className="icon">
                                    C
                                </div>
                                <h4>
                                    <a href="">Creative</a>
                                </h4>
                                <p>
                                    Critical thinking and curiosity are the key to creativity.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <div className="icon-box  w-100">
                                <div className="icon">
                                    A
                                </div>
                                <h4>
                                    <a href="">Ambition</a>
                                </h4>
                                <p>
                                    Ambition is the path to success. Persistence is the vehicle you arrive in.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <div className="icon-box  w-100">
                                <div className="icon">
                                    R
                                </div>
                                <h4>
                                    <a href="">Reliable</a>
                                </h4>
                                <p>
                                    The most reliable way to forecast the future is to try to understand the present.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                            data-aos="zoom-in"
                            data-aos-delay={300}
                        >
                            <div className="icon-box  w-100">
                                <div className="icon">
                                    E
                                </div>
                                <h4>
                                    <a href="">Effective</a>
                                </h4>
                                <p>
                                    The most effective way to do it, is to do it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Services Section */}
            <Slider {...settings}>
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="main-slider ">
                        <div className="slider-item ">
                            <div>
                                <img
                                    src="./img/single.jpg"
                                    className="testimonial-img"
                                    alt=""
                                />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="testimonials-slider swiper" >
                    <div className="">
                        <div className="testimonial-item">
                            <img
                                src="./img/single.jpg"
                                className="testimonial-img"
                                alt=""
                            />

                        </div>
                    </div>

                </div>
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="testimonial-wrap">
                        <div className="testimonial-item">
                            <img
                                src="./img/single.jpg"
                                className="testimonial-img"
                                alt=""
                            />

                        </div>
                    </div>

                </div>
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="testimonial-wrap">
                        <div className="testimonial-item">
                            <img
                                src="./img/single.jpg"
                                className="testimonial-img"
                                alt=""
                            />

                        </div>
                    </div>

                </div>
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="testimonial-wrap">
                        <div className="testimonial-item">
                            <img
                                src="./img/single.jpg"
                                className="testimonial-img"
                                alt=""
                            />

                        </div>
                    </div>

                </div>
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="testimonial-wrap">
                        <div className="testimonial-item">
                            <img
                                src="./img/single.jpg"
                                className="testimonial-img"
                                alt=""
                            />


                        </div>
                    </div>

                </div>
            </Slider>

            <section id="cta" className="cta my-5">
                <div className="container" data-aos="zoom-in">
                    <div className="text-center">
                        <h3>Call To Action</h3>
                        <p>
                            {" "}
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                        <a className="cta-btn" href="#">
                            Call To Action
                        </a>
                    </div>
                </div>
            </section>
            {/* End Cta Section */}


        </>

    )
}

export default OurCoreService