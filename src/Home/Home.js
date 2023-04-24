import React from 'react'
import './Home.css';
function Home() {
    return (
        <>
        <section
          id="home"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="container text-center text-md-left" data-aos="fade-up">
            <h1>Welcome to MWFT</h1>
            <h2>We are team of Mushroom World Future Tech</h2>
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </section>
        {/* End Hero */}
      </>
      


    )
}

export default Home