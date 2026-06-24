import React from "react";
import harshad from "../assets/harshad.png";
import "../css/Hero.css"

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT */}
                    <div className="col-lg-6 fade-up">
                        <div className="available-badge">
                            <span className="badge-dot"></span> Available for work
                        </div>

                        <p className="hero-hello">Hello, I'm</p>

                        <h1 className="hero-name">Harshad Shinde</h1>

                        <h2 className="hero-title">
                            Full Stack Developer
                            {/* <span className="cursor"></span> */}
                        </h2>

                        <p className="hero-desc">
                            I build modern, responsive and user-friendly web applications
                            that solve real-world problems and deliver great user experiences.
                        </p>

                        <div className="d-flex flex-wrap gap-3">
                            <a href="#contact" className="btn-hire">
                                Hire Me <i className="fas fa-arrow-right"></i>
                            </a>

                            <a href="#projects" className="btn-work">
                                View My Work <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>

                        <div className="hero-socials">
                            <a
                                href="https://github.com/Harshu3115"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                            >
                                <i className="fab fa-github"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/harshad-shinde3115b2ab/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>



                            <a
                                href="mailto:harshadshinde3131@gmail.com"
                                title="Email"
                            >
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-6 d-flex justify-content-center hero-img-wrap">

                        <div className="hero-img-bg"></div>

                        <div className="hero-circle-wrap">
                            <div className="hero-circle-ring"></div>
                            <div className="hero-circle-ring ring-2"></div>

                            <img
                                src={harshad}
                                className="hero-img"
                                alt="Harshad Shinde"
                            />
                        </div>

                        {/* Floating Cards */}
                        <div className="float-card card-code">
                            <span className="fc-icon">&lt;/&gt;</span> Clean Code
                        </div>

                        <div className="float-card card-fast">
                            <span className="fc-icon">🚀</span> Fast Learner
                        </div>

                        <div className="float-card card-resp">
                            <span className="fc-icon">📱</span>
                            <span>
                                Responsive
                                <br />
                                Design
                            </span>
                        </div>

                        {/* Accent Dots */}
                        <span className="hero-dot dot-a"></span>
                        <span className="hero-dot dot-b"></span>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;