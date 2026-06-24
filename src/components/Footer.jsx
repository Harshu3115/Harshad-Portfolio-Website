import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="row g-4 g-lg-5">

          {/* Brand */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="footer-brand mb-3">
              <a href="/">
                <span>&lt;/&gt;</span> Harshad Shinde
              </a>
            </div>

            <p className="footer-desc">
              Building modern web applications with clean code and great user
              experience.
            </p>

            <div className="footer-socials d-flex gap-2 flex-wrap">
              <a
                href="https://github.com/Harshu3115"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/harshad-shinde3115b2ab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a href="mailto:harshadshinde3131@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="mb-3">Quick Links</h6>

            <ul className="footer-links list-unstyled">
              <li>
                <a href="/about">
                  About <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="/skills">
                  Skills <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="/projects">
                  Projects <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="/experience">
                  Experience <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="/contact">
                  Contact <i className="fas fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="mb-3">Services</h6>

            <ul className="footer-links list-unstyled">
              <li>
                <a href="#">
                  Web Development <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Frontend Dev <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Backend Dev <i className="fas fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  API Development <i className="fas fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / CTA */}
          <div className="col-12 col-md-6 col-lg-4">
            <h6 className="mb-3">Let's Connect</h6>

            <p className="footer-connect-text">
              Have a project in mind or want to work together?
            </p>

            <a
              href="/contact"
              className="btn-touch d-inline-flex align-items-center"
            >
              Get In Touch
              <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom mt-4 mt-lg-5">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-12 col-md-6 mb-2 mb-md-0">
              <p className="mb-0">
                © {new Date().getFullYear()} Harshad Shinde. All rights
                reserved.
              </p>
            </div>

            <div className="col-12 col-md-6 text-md-end">
              <p className="mb-0">Made with ❤️ and lots of ☕</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;