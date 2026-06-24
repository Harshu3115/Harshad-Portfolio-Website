import React, { useState } from "react";

import ecommerce from "../assets/ecommerce.png";
import ai from "../assets/ai.png";
import portfolio from "../assets/portfolio.png";
import ftc from "../assets/p-6.png";
import bus from "../assets/bus.png";
import tic from "../assets/tic.png";
import volunteer from "../assets/volunteer.png";
import "../css/ProjectCom.css";
import Category from "./Category";

const projects = [
    {
        title: "Vogue Hub Fashion & Lifestyle",
        category: "fullstack",
        image: ecommerce,
        link: "https://github.com/Harshu3115/ecommerce-springboot.git",
        desc: "Developed a responsive eCommerce application using Spring Boot, MySQL, authentication, cart, and order management.",
        tags: ["Spring Boot", "MySQL", "Bootstrap"],
        demo: "https://vogue-hub-demo.com"
    },
    {
        title: "AI Resume Analyzer",
        category: "fullstack",
        image: ai,
        link: "https://github.com/Harshu3115/ai-resume-analyzer-",
        desc: "Built an AI Resume Analyzer using Flask, NLP, TF-IDF, and SQLite for ATS scoring and resume matching.",
        tags: ["Flask", "SQLite", "NLP"],
        demo: "https://ai-resume-analyzer-9rbl.onrender.com/"
    },
    {
        title: "Portfolio Website",
        category: "frontend",
        image: portfolio,
        link: "https://github.com/Harshu3115/Harshad-Portfolio",
        desc: "Developed a responsive portfolio website showcasing projects, skills, resume, and contact information.",
        tags: ["React", "CSS", "Bootstrap"],
        demo: "https://harshad-portfolio-9j3l.onrender.com/"
    },
    {
        title: "FTC-EVENTS",
        category: "frontend",
        image: ftc,
        link: "https://ftc-events.org",
        desc: "Designed and developed a responsive college conference website with event registration and schedules.",
        tags: ["HTML", "CSS", "JavaScript"],
        demo: "https://ftc-events.org"
    },
    {
        title: "Bus Tracking System",
        category: "java",
        image: bus,
        link: "https://github.com/Harshu3115/Bus-Tracking-System.git",
        desc: "Developed a Bus Tracking System using JDBC, Servlet, and MySQL for route management.",
        tags: ["Java", "Servlet", "MySQL"],
        demo: "#"
    },
    {
        title: "Tic Tac Toe",
        category: "frontend",
        image: tic,
        link: "https://github.com/Harshu3115/Tic-Tac-Toe-Game-",
        desc: "Interactive Tic Tac Toe game with win detection, score tracking, and responsive UI.",
        tags: ["HTML", "CSS", "JavaScript"],
        demo: "https://harshu3115.github.io/Tic-Tac-Toe-Game-/home.html"
    },
    {
        title: "Volunteer Management System",
        category: "database",
        image: volunteer,
        link: "https://github.com/Harshu3115/Fabtech-Collage-Clone.git",
        desc: "Volunteer registration, event management, task assignment, and communication system using Spring Boot.",
        tags: ["Spring Boot", "Java", "MySQL"],
        demo: "#"
    }
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <div className="projects-header">
                    <div>
                        <span className="section-label">MY PROJECTS</span>
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">
                            Each project reflects my passion for clean code and innovative solutions
                        </p>
                    </div>

                    <a
                        href="https://github.com/Harshu3115"
                        className="view-all-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All <i className="fas fa-arrow-right"></i>
                    </a>
                </div>

                {/* Category Filter */}
                <Category
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-card-inner">
                                {/* Front Side */}
                                <div className="project-card-front">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="project-overlay">
                                            <span className="project-number">
                                                #{String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.desc}</p>

                                        <div className="project-tags">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mobile-repo-btn"
                                        >
                                            <i className="fab fa-github"></i> View Code
                                        </a>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="project-card-back">
                                    <div className="back-content">
                                        <div className="back-icon">
                                            <i className="fab fa-github"></i>
                                        </div>
                                        <h3>Explore the Code</h3>
                                        <p>
                                            Dive into the source code, contribute, or use it as inspiration for your own projects.
                                        </p>

                                        <div className="back-actions">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary"
                                            >
                                                <i className="fab fa-github"></i> Repository
                                            </a>

                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-secondary"
                                            >
                                                <i className="fas fa-external-link-alt"></i> Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;