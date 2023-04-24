import React from 'react'
import './Service.css';
function Service() {
    return (
        <>
            {/* ======= service Section ======= */}
            <section id="service" className="service sections-bg ">
                <div className="container" data-aos="fade-up">
                    {/* <div className="section-header">
                        <h2>service</h2>
                        <p>
                            Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
                            nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
                        </p>
                    </div> */}
                    <div
                        className="service-isotope"
                        data-service-filter="*"
                        data-service-layout="masonry"
                        data-service-sort="original-order"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <div>
                            <p className='our-service-title text-center my-3'>Our Service</p>
                            {/* End service Filters */}
                        </div>
                        <div className="row gy-4 service-container mt-3">
                            <div className="col-xl-4 col-md-6 service-item filter-app">
                                <div className="service-wrap">
                                    <a
                                        href="assets/img/service/app-1.jpg"
                                        data-gallery="service-gallery-app"
                                        className="glightbox"
                                    >
                                        <img
                                            src="./img/mob-1.jpg"
                                            className="img-fluid"
                                            alt="aa"
                                        />
                                    </a>
                                    <div className="service-info">
                                        <h4>
                                            <a href="service-details.html" title="More Details">
                                                Mobile Application Development
                                            </a>
                                        </h4>
                                        <p>Smart application for Smartphones.We design and Develop application for android  and IOS platform.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End service Item */}
                            <div className="col-xl-4 col-md-6 service-item filter-product">
                                <div className="service-wrap">
                                    <a
                                        href="assets/img/service/product-1.jpg"
                                        data-gallery="service-gallery-app"
                                        className="glightbox"
                                    >
                                        <img
                                            src="./img/web-6.jpg"
                                            className="img-fluid"
                                            alt="w"
                                        />
                                    </a>
                                    <div className="service-info">
                                        <h4>
                                            <a href="service-details.html" title="More Details">
                                                Website Development
                                            </a>
                                        </h4>
                                        <p>  Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End service Item */}
                            <div className="col-xl-4 col-md-6 service-item filter-branding">
                                <div className="service-wrap">
                                    <a
                                        href="assets/img/service/branding-1.jpg"
                                        data-gallery="service-gallery-app"
                                        className="glightbox"
                                    >
                                        <img
                                            src="./img/customize-2.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <div className="service-info">
                                        <h4>
                                            <a href="service-details.html" title="More Details">
                                                Customized Software
                                            </a>
                                        </h4>
                                        <p> Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End service Item */}
                            <div className="col-xl-4 col-md-6 service-item filter-books">
                                <div className="service-wrap">
                                    <a
                                        href="assets/img/service/books-1.jpg"
                                        data-gallery="service-gallery-app"
                                        className="glightbox"
                                    >
                                        <img
                                            src="./img/game-2.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <div className="service-info">
                                        <h4>
                                            <a href="service-details.html" title="More Details">
                                                Game Development
                                            </a>
                                        </h4>
                                        <p> Fun is part of life.We develop inovative games for you to enjoy your liesure time.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End service Item */}
                            <div className="col-xl-4 col-md-6 service-item filter-app">
                                <div className="service-wrap">
                                    <a
                                        href="assets/img/service/app-2.jpg"
                                        data-gallery="service-gallery-app"
                                        className="glightbox"
                                    >
                                        <img
                                            src="./img/avr.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <div className="service-info">
                                        <h4>
                                            <a href="service-details.html" title="More Details">
                                                AR/VR/XR
                                            </a>
                                        </h4>
                                        <p> Enter the future.latest technology atyour fingertips,we develope augmented,virtual and mixedreality application</p>
                                    </div>
                                </div>
                            </div>
                            {/* End service Item */}
                            <div className="col-xl-4 col-md-6 service-item filter-product">
                                <div className="service-wrap">
                                    <a
                                        href="assets/img/service/product-2.jpg"
                                        data-gallery="service-gallery-app"
                                        className="glightbox"
                                    >
                                        <img
                                            src="./img/two-three-D-1.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </a>
                                    <div className="service-info">
                                        <h4>
                                            <a href="service-details.html" title="More Details">
                                                Product 2
                                            </a>
                                        </h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End service Container */}
                    </div>
                </div>
            </section>
            {/* End service Section */}
        </>

    )
}

export default Service