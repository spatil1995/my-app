import React from 'react'
import './About.css';
function About() {
    return (
        <>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>About Us</p>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6">
                            <p>
                                Mushroom World FutureTech Pvt Ltd. offers mobile app development services , UI, web-services, AR/VR, games and a lot more. We tend to change the picture of the future, today by brainstorming, ideation and iteration.

                                We provide our clients the best cutting-edge, futuristic solutions with the help of our experienced talented team of developers. And our company goal is in creating a technologically sorted market for curators and customers.
                            </p>
                            {/* <ul>
                                <li>
                                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat
                                </li>
                                <li>
                                    <i className="ri-check-double-line" /> Duis aute irure dolor in
                                    reprehenderit in voluptate velit
                                </li>
                                <li>
                                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat
                                </li>
                            </ul> */}
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 ">
                            {/* <h1>Specialist</h1> */}

                            <ul>
                                <li>
                                    <i className="ri-check-double-line" />
                                    Moblie App Development
                                </li>
                                <li>
                                    <i className="ri-check-double-line" />
                                    Custom Software Development
                                </li>
                                <li>
                                    <i className="ri-check-double-line" />
                                    Website Development
                                </li>
                                <li>
                                    <i className="ri-check-double-line" />
                                    Mobile Game Development
                                </li>
                                <li>
                                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                                    AI/ML
                                </li>
                            </ul>

                            <a href="#" className="btn-learn-more">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section */}

            <section id="counts" className="counts">
                <div className="container" data-aos="fade-up">
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <i className="bi bi-emoji-smile" />
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={232}
                                    data-purecounter-duration={1}
                                    className="purecounter"
                                />
                                <p>
                                    <strong>Happy Clients</strong> consequuntur quae qui deca rode
                                </p>
                                <a href="#">Find out more »</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <i className="bi bi-journal-richtext" />
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={521}
                                    data-purecounter-duration={1}
                                    className="purecounter"
                                />
                                <p>
                                    <strong>Projects</strong> adipisci atque cum quia aut numquam
                                    delectus
                                </p>
                                <a href="#">Find out more »</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <i className="bi bi-headset" />
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={1463}
                                    data-purecounter-duration={1}
                                    className="purecounter"
                                />
                                <p>
                                    <strong>Hours Of Support</strong> aut commodi quaerat. Aliquam
                                    ratione
                                </p>
                                <a href="#">Find out more »</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <i className="bi bi-people" />
                                <span
                                    data-purecounter-start={0}
                                    data-purecounter-end={15}
                                    data-purecounter-duration={1}
                                    className="purecounter"
                                />
                                <p>
                                    <strong>Hard Workers</strong> rerum asperiores dolor molestiae
                                    doloribu
                                </p>
                                <a href="#">Find out more »</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Counts Section */} <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                        <div
                            className="col-lg-5 align-items-stretch video-box"
                            style={{ backgroundImage: 'url("./img/bg-5.jpg")' }}
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <a
                                href="https://www.youtube.com/watch?v=RGKi6LSPDLU"
                                className="venobox play-btn mb-4"
                                data-vbtype="video"
                                data-autoplay="true"
                            />
                        </div>
                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                            <div className="content">
                                <h3>
                                    Eum ipsam laborum deleniti{" "}
                                    <strong>velit pariatur architecto</strong>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                                    aute irure dolor in reprehenderit
                                </p>
                            </div>
                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a
                                            data-bs-toggle="collapse"
                                            className="collapse"
                                            data-bs-target="#accordion-list-1"
                                        >
                                            <span>01</span> Non consectetur a erat nam at lectus urna
                                            duis? <i className="bx bx-chevron-down icon-show" />
                                            <i className="bx bx-chevron-up icon-close" />
                                        </a>
                                        <div
                                            id="accordion-list-1"
                                            className="collapse show"
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>
                                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                                volutpat lacus laoreet non curabitur gravida. Venenatis
                                                lectus magna fringilla urna porttitor rhoncus dolor purus
                                                non.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-list-2"
                                            className="collapsed"
                                        >
                                            <span>02</span> Feugiat scelerisque varius morbi enim nunc?{" "}
                                            <i className="bx bx-chevron-down icon-show" />
                                            <i className="bx bx-chevron-up icon-close" />
                                        </a>
                                        <div
                                            id="accordion-list-2"
                                            className="collapse"
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>
                                                Dolor sit amet consectetur adipiscing elit pellentesque
                                                habitant morbi. Id interdum velit laoreet id donec ultrices.
                                                Fringilla phasellus faucibus scelerisque eleifend donec
                                                pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                                                ultrices eros in cursus turpis massa tincidunt dui.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-list-3"
                                            className="collapsed"
                                        >
                                            <span>03</span> Dolor sit amet consectetur adipiscing elit?{" "}
                                            <i className="bx bx-chevron-down icon-show" />
                                            <i className="bx bx-chevron-up icon-close" />
                                        </a>
                                        <div
                                            id="accordion-list-3"
                                            className="collapse"
                                            data-bs-parent=".accordion-list"
                                        >
                                            <p>
                                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                                                sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                                                nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                                                pellentesque eu tincidunt. Lectus urna duis convallis
                                                convallis tellus. Urna molestie at elementum eu facilisis
                                                sed odio morbi quis
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Why Us Section */}



        </>



    )
}

export default About