import React from "react";
import harshadImg from "../assets/harsh.jpg";
import "../css/AboutPage.css"
import Footer from "../components/Footer";

const AboutPage = () => {
    return (
        <>

            <main className="about-page-container">

                <div className="about-page-top">

                    <div className="about-content-left">

                        <div className="about-page-label">
                            About Me
                        </div>

                        <h1 className="about-page-heading">
                            Who I Am
                        </h1>

                        <p className="about-page-bio">
                            I'm Harshad Shinde, a passionate Web Developer focused on creating modern, responsive, and user-friendly websites. I have experience with HTML, CSS, JavaScript, Bootstrap, Java, MySQL, and full-stack web development. I enjoy building real-world projects, learning new technologies, and helping businesses establish a strong online presence through effective digital solutions.
                        </p>

                        <ul className="about-info-list">
                            <li className="about-info-item">
                                <div className="about-info-icon">
                                    <i className="fas fa-location-dot"></i>
                                </div>

                                <div className="about-info-content">
                                    <strong>Location</strong>
                                    <span>Pune, Maharashtra, India</span>
                                </div>
                            </li>

                            <li className="about-info-item">
                                <div className="about-info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>

                                <div className="about-info-content">
                                    <strong>Email</strong>
                                    <span>harshadshinde3131@gmail.com</span>
                                </div>
                            </li>

                            <li className="about-info-item">
                                <div className="about-info-icon">
                                    <i className="fas fa-calendar-check"></i>
                                </div>

                                <div className="about-info-content">
                                    <strong>Availability</strong>
                                    <span>Available for Freelance</span>
                                </div>
                            </li>
                        </ul>

                        <div className="about-signature">
                            Harshad Shinde
                        </div>

                        <div className="sig-line"></div>

                    </div>

                    <div className="about-image-card">

                        <div className="about-image-wrapper">
                            <img
                                src={harshadImg}
                                alt="Harshad"
                                className="about-profile-image"
                            />
                        </div>

                    </div>

                </div>

                <div className="about-stats-section">

                    <div className="about-stat-card">
                        <div className="about-stat-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="about-stat-number">10+</div>
                        <div className="about-stat-text">Projects Completed</div>
                    </div>

                    <div className="about-stat-card">
                        <div className="about-stat-icon">
                            <i className="fas fa-face-smile"></i>
                        </div>
                        <div className="about-stat-number">100%</div>
                        <div className="about-stat-text">Client Satisfaction</div>
                    </div>

                    <div className="about-stat-card">
                        <div className="about-stat-icon">
                            <i className="fas fa-trophy"></i>
                        </div>
                        <div className="about-stat-number">1+</div>
                        <div className="about-stat-text">Years Experience</div>
                    </div>

                    <div className="about-stat-card">
                        <div className="about-stat-icon">
                            <i className="fas fa-headset"></i>
                        </div>
                        <div className="about-stat-number">24/7</div>
                        <div className="about-stat-text">Support Available</div>
                    </div>

                </div>

            </main>

            <Footer />
        </>


    );
};

export default AboutPage;