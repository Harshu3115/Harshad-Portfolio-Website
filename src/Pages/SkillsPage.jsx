import React from "react";
import Footer from "../components/Footer";
import {
    FaGitAlt,
    FaGithub,
    FaChrome,
    FaCloud,
    FaCode,
} from "react-icons/fa";

import { SiPostman, SiEclipseide } from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: "fas fa-display",
        skills: [
            { name: "HTML", percent: 95 },
            { name: "CSS", percent: 90 },
            { name: "JavaScript", percent: 85 },
            { name: "Bootstrap", percent: 90 },
            { name: "React.js", percent: 80 },
        ],
    },
    {
        title: "Backend Development",
        icon: "fas fa-server",
        skills: [
            { name: "Java", percent: 85 },
            { name: "Python", percent: 80 },
            { name: "Advanced Java", percent: 80 },
            { name: "Spring Boot", percent: 70 },
            { name: "REST API", percent: 85 },
        ],
    },
    {
        title: "Database",
        icon: "fas fa-database",
        skills: [
            { name: "MySQL", percent: 90 },
            { name: "JDBC", percent: 85 },
        ],
    },
    {
        title: "Tools & Others",
        icon: "fas fa-screwdriver-wrench",
        skills: [
            { name: "Git", percent: 90 },
            { name: "GitHub", percent: 90 },
            { name: "VS Code", percent: 95 },
            { name: "Postman", percent: 85 },
        ],
    },
];

const tools = [
    { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
    { name: "GitHub", icon: "fab fa-github", color: "#24292e" },
    { name: "VS Code", icon: "fas fa-code", color: "#007acc" },
    { name: "Postman", icon: "fas fa-paper-plane", color: "#ef5b25" },
    { name: "Eclipse", icon: "devicon-eclipse-plain colored" },
    { name: "Chrome DevTools", icon: "fab fa-chrome", color: "#4285f4" },
    { name: "Netlify", icon: "fas fa-cloud", color: "#00c7b7" },
];

const SkillsPage = () => {
    return (
        <>
            <main className="page">
                {/* Hero */}
                <div className="skills-hero">
                    <div className="hero-left">
                        <div className="skills-label">MY SKILLS</div>

                        <h1 className="hero-heading">
                            My Technical Skills
                        </h1>

                        <p className="hero-bio">
                            I love learning new technologies and building
                            modern web applications with clean and
                            efficient code.
                        </p>

                        <div className="hero-line"></div>
                    </div>

                    <div className="orbit-wrap">
                        <div className="orbit-circle oc2"></div>
                        <div className="orbit-circle oc1"></div>

                        <div className="orbit-center">
                            <i className="fas fa-code"></i>
                        </div>

                        <div
                            className="tech-badge tb-js tb-js-bg"
                            style={{ top: "4px", left: "30px" }}
                        >
                            JS
                        </div>

                        <div
                            className="tech-badge tb-tag"
                            style={{
                                top: "4px",
                                right: "24px",
                                fontSize: "1.3rem",
                            }}
                        >
                            <i className="fas fa-code"></i>
                        </div>

                        <div
                            className="tech-badge tb-react"
                            style={{
                                bottom: "14px",
                                left: "20px",
                            }}
                        >
                            <i className="fab fa-react"></i>
                        </div>

                        <div
                            className="tech-badge tb-node"
                            style={{
                                bottom: "14px",
                                right: "16px",
                            }}
                        >
                            <i className="fab fa-node-js"></i>
                        </div>
                    </div>
                </div>

                <div className="container">
                    {/* Skills Grid */}
                    <div className="skills-grid">
                        {skillCategories.map((category, index) => (
                            <div
                                className="skill-card"
                                key={index}
                            >
                                <div className="skill-card-header">
                                    <div className="skill-card-icon">
                                        <i className={category.icon}></i>
                                    </div>

                                    <div className="skill-card-title">
                                        {category.title}
                                    </div>
                                </div>

                                <div className="skill-bar-list">
                                    {category.skills.map((skill, i) => (
                                        <div
                                            className="skill-bar-item"
                                            key={i}
                                        >
                                            <div className="skill-bar-top">
                                                <span className="skill-name">
                                                    <span className="skill-dot"></span>
                                                    {skill.name}
                                                </span>

                                                <span className="skill-pct">
                                                    {skill.percent}%
                                                </span>
                                            </div>

                                            <div className="bar-track">
                                                <div
                                                    className="bar-fill"
                                                    style={{
                                                        width: `${skill.percent}%`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tools */}
                    <div className="tools-section">
                        <div className="tools-title">
                            Tools I Use
                        </div>

                        <div className="tools-underline"></div>

                        <div className="tools-grid">
                            {tools.map((tool, index) => (
                                <div
                                    className="tool-item"
                                    key={index}
                                >
                                    <div
                                        className="tool-icon"
                                        style={{ color: tool.color }}
                                    >
                                        <i className={tool.icon}></i>
                                    </div>

                                    <span className="tool-name">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            
    <Footer />
        </>
    );
};

export default SkillsPage;