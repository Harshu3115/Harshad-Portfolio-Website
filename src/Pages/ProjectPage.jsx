import React, { useState } from "react";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Category from "../components/Category";

import projectImg from "../assets/project-img.png";
import "../css/ProjectPage.css";

const ProjectPage = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

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
                    name,
                    email,
                    title: subject,
                    message,
                },
                "SPPF4O1qZWFDVMMmi"
            )
            .then(() => {
                alert("Message Sent Successfully!");

                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to send message");
                setLoading(false);
            });
    };

    return (
        <>
            <main className="page">

                {/* Hero Section */}
                <section className="projects-hero">

                    <div className="hero-left">

                        <div className="hero-label">
                            MY PROJECTS
                        </div>

                        <h1 className="hero-heading">
                            Projects That
                            <br />
                            <span>I Built</span>
                        </h1>

                        <p className="hero-bio">
                            Here are some of my selected projects.
                            Each project taught me something new and
                            helped me grow as a developer.
                        </p>

                        <div className="hero-btns">

                            <a
                                href="https://github.com/Harshu3115"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-github"
                            >
                                GitHub Profile
                            </a>

                            <a
                                href="/contact"
                                className="btn-contact"
                            >
                                Contact Me
                            </a>

                        </div>

                    </div>

                    <div className="hero-illus">
                        <img
                            src={projectImg}
                            alt="Projects"
                        />
                    </div>

                </section>



            </main>
            {/* Category Component */}
            

            {/* Projects Component */}
            <Projects activeFilter={activeFilter} />

            <Footer />
        </>
    );
};

export default ProjectPage;