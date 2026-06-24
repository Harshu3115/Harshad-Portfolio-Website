import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/ContactForm.css";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendMessage = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            alert("Please fill all fields");
            return;
        }

        setLoading(true);

        emailjs
            .send(
                "service_cl18ddp",
                "template_k76a7cq",
                {
                    name: name,
                    email: email,
                    title: subject,
                    message: message,
                },
                "SPPF4O1qZWFDVMMmi"
            )
            .then(() => {

                setShowToast(true);

                setTimeout(() => {
                    setShowToast(false);
                }, 3000);

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });

                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                alert("Failed to send message");
                setLoading(false);
            });
    };

    return (
        <main className="contact-page">
            

            {/* Hero */}
            <div className="contact-hero">
                <div className="contact-label">
                    <span className="dot"></span>
                    Contact Me
                    <span className="dot"></span>
                </div>

                <h1 className="contact-heading">
                    Let's Work Together
                </h1>

                <p className="contact-sub">
                    Have a project in mind or want to discuss an opportunity?
                    <br />
                    Feel free to reach out to me.
                </p>
            </div>

            <div className="contact-grid">

                {/* Left Side */}
                <div className="contact-info-card">

                    <h2 className="git-title">
                        Get In Touch
                    </h2>

                    <div className="git-underline"></div>

                    <p className="git-desc">
                        I'm currently available for freelance work
                        and full-time opportunities.
                    </p>

                    <ul className="info-list">

                        <li className="info-item">
                            <div className="info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>

                            <div className="info-text">
                                <strong>Email</strong>
                                <span>
                                    harshadshinde3131@gmail.com
                                </span>
                            </div>
                        </li>

                        <li className="info-item">
                            <div className="info-icon">
                                <i className="fas fa-phone"></i>
                            </div>

                            <div className="info-text">
                                <strong>Phone</strong>
                                <span>9322916716</span>
                            </div>
                        </li>

                        <li className="info-item">
                            <div className="info-icon">
                                <i className="fas fa-location-dot"></i>
                            </div>

                            <div className="info-text">
                                <strong>Location</strong>
                                <span>Maharashtra, India</span>
                            </div>
                        </li>

                    </ul>

                </div>

                {/* Right Form */}
                <form
                    className="contact-form-card"
                    onSubmit={sendMessage}
                >

                    <h2 className="form-title">
                        Send Me a Message
                    </h2>

                    <div className="form-underline"></div>

                    <div className="form-row">

                        <div className="field">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <span className="field-icon">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>

                        <div className="field">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <span className="field-icon">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>

                    </div>

                    <div className="field field-full">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />

                        <span className="field-icon">
                            <i className="fas fa-tag"></i>
                        </span>
                    </div>

                    <div className="field field-full textarea-wrap">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>

                        <span className="field-icon">
                            <i className="fas fa-pen-to-square"></i>
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="btn-send"
                        disabled={loading}
                    >
                        <i
                            className={
                                loading
                                    ? "fas fa-spinner fa-spin"
                                    : "fas fa-paper-plane"
                            }
                        ></i>

                        {loading
                            ? " Sending..."
                            : " Send Message"}
                    </button>

                </form>

            </div>

            {/* Toast Message */}
            {showToast && (
                <div className="toast show">
                    <i className="fas fa-circle-check"></i>
                    <span>
                        Message sent successfully! I'll get back to you soon.
                    </span>
                </div>
            )}

        </main>
    );
};

export default ContactForm;