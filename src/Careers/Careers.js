import React from 'react'
import './Careers.css'
import { Link } from 'react-router-dom';
function Careers() {
    return (
        <>

            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo">
                        <Link to="/">MWFT</Link>
                    </h1>
                    {/* Uncomment below if you prefer to use an image logo */}
                    {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link className="nav-link scrollto active" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link scrollto" to="/">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link scrollto" to="/">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link scrollto " to="/">
                                    OurCoreValue
                                </Link>
                            </li>

                            <li>
                                <Link className="nav-link scrollto" href="/">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link scrollto" to="/careers">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link className="getstarted scrollto" to="/">
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    {/* .navbar */}
                </div>
            </header>

            <section id="careers">
                <div
                    id="careersCarousel"
                    data-bs-interval={5000}
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <ol className="carousel-indicators" id="careers-carousel-indicators" />
                    <div className="carousel-inner" role="listbox">
                        {/* Slide 1 */}
                        <div
                            className="carousel-item active"
                            style={{ backgroundImage: "url(./img/career-3.jpg)" }}
                        >
                            <div className="carousel-container">
                                <div className="container">
                                    <img src='./img/mwftlogo.png' alt='mwft w-100' className='mwft-logo'></img>
                                    <h2 className="animate__animated animate__fadeInDown my-2">
                                        Explore Opportunities With MWFT
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        We are not just a technology company full of people, we're a people company full of technology. It is people like you who make us what we are today. Welcome to our world: Our people, our culture, our voices, and our passions. Lets Grow Together with MWFT.
                                    </p>
                                    <a
                                        href="#about"
                                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                                    >
                                        <a href='#apply-form' className='apply-button'>Apply Now</a>
                                        
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Slide 2 */}
                        <div
                            className="carousel-item"
                            style={{ backgroundImage: "url(./img/career-img.jpg)" }}
                        >
                            <div className="carousel-container">
                                <div className="container">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Lorem Ipsum Dolor
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                                        est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                                        mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                                        repellendus deleniti vel. Minus et tempore modi architecto.
                                    </p>
                                    <a
                                        href="#about"
                                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Slide 3 */}
                        <div
                            className="carousel-item"
                            style={{ backgroundImage: "url(assets/img/slide/slide-3.jpg)" }}
                        >
                            <div className="carousel-container">
                                <div className="container">
                                    <h2 className="animate__animated animate__fadeInDown">
                                        Sequi ea ut et est quaerat
                                    </h2>
                                    <p className="animate__animated animate__fadeInUp">
                                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                                        est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                                        mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                                        repellendus deleniti vel. Minus et tempore modi architecto.
                                    </p>
                                    <a
                                        href="#about"
                                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#careersCarousel"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon bi bi-chevron-left"
                            aria-hidden="true"
                        />
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#careersCarousel"
                        role="button"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon bi bi-chevron-right"
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </section>
            {/* End careers */}
            <div class="container text-center mt-5">
                <div class="row">
                    <div class="col">
                        <h1 className='my-5'><span className='carr-title'>Career</span> Opportunities
                        </h1>
                    </div>
                    <div class="col">
                        <p className='text-start my-5'>Kick-start your career and develop the skills for a successful future.
                            Lets Grow Together with Mushroom World FutureTech.</p>
                    </div>

                </div>
            </div>
            <section id="service" className="service sections-bg ">
                <div className="container" data-aos="fade-up">

                    <div
                        className="service-isotope"
                        data-service-filter="*"
                        data-service-layout="masonry"
                        data-service-sort="original-order"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >

                        <div class="container text-center ">
                            <div class="row career-1   ">
                                <div class="col">
                                    <div class="card  ">
                                        <img src="./img/cm-1.jpg" className="card-img-top card-img" alt="..." />
                                        <div class="card-body">
                                            <h4>Mobile Application Developer</h4>
                                            <p className="card-text">(Cross Platform) Xamarin, Flutter, React Native,Android Studio.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="./img/cm-2.jpg" className="card-img-top card-img" alt="..." />
                                        <div class="card-body">
                                            <h4>Web Developer</h4>
                                            <p className="card-text">(Full Stack/Front End, Back End) HTML,CSS,JAVA Script,,Etc.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row career-1  ">
                                <div class="col">
                                    <div class="card ">
                                        <img src="./img/cm-3.jpg" className="card-img-top card-img" alt="..." />
                                        <div class="card-body">
                                            <h4>Game Developer (Unity 3D)</h4>
                                            <p className="card-text">(AR/VR/XR/Game Development).</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card">
                                        <img src="./img/cm-4.png" className="card-img-top card-img" alt="..." />
                                        <div class="card-body">
                                            <h4>Graphic Designer</h4>
                                            <p className="card-text">Photoshop,Corel Draw, 3Ds Max,Blender,Etc</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="container" >
                <div className="row mx-0 justify-content-center  "id='apply-form'>
                    <h1 className='text-center my-3'>Build Your Career With FutureTech</h1>
                    <h3 className='text-center'>Please fill this form</h3>
                    <div className="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0 px-xxl-3 job-form mt-5">
                        <form
                            method="POST"
                            className="w-100 rounded-3 p-4 border bg-white "
                            action="https://herotofu.com/start"
                            encType="multipart/form-data"
                        >
                            <label className="d-block mb-4">
                                <span className="form-label d-block">Enter Name</span>
                                <input
                                    required=""
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                />
                            </label>
                            <label className="d-block mb-4">
                                <span className="form-label d-block">Enter Email Address</span>
                                <input
                                    required=""
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="email@example.com"
                                />
                            </label>
                            <label className="d-block mb-4">
                                <span className="form-label d-block">Enter Mobile Number</span>
                                <input
                                    required=""
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Mobile Number"
                                />
                            </label>
                            <label className="d-block mb-4">
                                <span className="form-label d-block">Select Years Of Experience</span>
                                <select required="" name="experience" className="form-select">
                                    <option>Less than a year</option>
                                    <option>1 - 2 years</option>
                                    <option>2 - 4 years</option>
                                    <option>4 - 7 years</option>
                                    <option>7 - 10 years</option>
                                    <option>10+ years</option>
                                </select>
                            </label>
                            <label className="d-block mb-4">
                                <span className="form-label d-block">
                                    Enter Additional Information
                                </span>
                                <textarea
                                    name="message"
                                    className="form-control"
                                    rows={3}
                                    placeholder="What motivates you?"
                                    defaultValue={""}
                                />
                            </label>
                            <label className="d-block mb-4">
                                <span className="form-label d-block">Your CV</span>
                                <input required="" name="cv" type="file" className="form-control" />
                            </label>
                            <div className="mb-4">

                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary px-3 rounded-3">
                                    Apply
                                </button>
                            </div>
                            <div className="d-block text-end">
                                <div className="small">
                                    
                                    <a
                                        href="https://herotofu.com"
                                        className="text-dark text-decoration-none"
                                        target="_blank"
                                    >
                                      
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <footer id="footer" className='mt-5'>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-info">
                                    <h3>MWFT</h3>
                                    <p className="pb-3">
                                        <em>
                                            Qui repudiandae et eum dolores alias sed ea. Qui suscipit
                                            veniam excepturi quod.
                                        </em>
                                    </p>
                                    <p>
                                        226, JAIN NAGAR
                                        GUFA MANDIR ROAD,BHOPAL
                                        MADHYA PRADESH 462030
                                        <br />
                                        <br />
                                        <strong>Phone:</strong> +1 5589 55488 55
                                        <br />
                                        <strong>Email:</strong> mwft@example.com
                                        <br />
                                    </p>
                                    <div className="social-links mt-3">
                                        <a href="#" className="twitter">
                                            <i className="bx bxl-twitter" />
                                        </a>
                                        <a href="#" className="facebook">
                                            <i className="bx bxl-facebook" />
                                        </a>
                                        <a href="#" className="instagram">
                                            <i className="bx bxl-instagram" />
                                        </a>
                                        <a href="#" className="google-plus">
                                            <i className="bx bxl-skype" />
                                        </a>
                                        <a href="#" className="linkedin">
                                            <i className="bx bxl-linkedin" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>company</h4>
                                <p>
                                    226, JAIN NAGAR
                                    GUFA MANDIR ROAD,BHOPAL
                                    MADHYA PRADESH 462030
                                    <br />
                                    <br />
                                    <strong>Phone:</strong> +1 5589 55488 55
                                    <br />
                                    <strong>Email:</strong> mwtech@mushroomworldbpl.com

                                    <br />
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Subsidiaries</h4>
                                <p>
                                    Mushroom World Ayurved & Food Private Limited
                                    Kartavyam Foundation
                                    Mushroom World Films Private Limited
                                    <br />
                                    <br />
                                    <strong>Phone:</strong> +1 5589 55488 55
                                    <br />
                                    <strong>Email:<br /></strong>mwtech@mushroomworldbpl.com
                                    <br />
                                </p>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Operational Office</h4>
                                <p>
                                    B-07, Mandi Plaza
                                    Opp. Post office, K.C.Park
                                    Halliyal Road Dharwad, Karnataka
                                    mwtech@mushroomworldbpl.com
                                    <br />
                                    <br />
                                    <strong>Phone:</strong> +1 5589 55488 55
                                    <br />
                                    <strong>Email:</strong> mwtech@mushroomworldbpl.com
                                    <br />
                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>

    )
}

export default Careers