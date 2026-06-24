import React from "react";
import "../css/Experience.css";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import {
    SiPostman,
    SiMongodb,
    SiNetlify,
    SiEclipseide,
    SiMysql
} from "react-icons/si";

import {
    FaBriefcase,
    FaUserTie,
    FaLaptopCode,
    FaJava,
    FaTrophy,
    FaCheck,
    FaGraduationCap,
    FaCode,
    FaDatabase,
    FaPaperPlane,
    FaUserCheck,
    FaGitAlt,
    FaGithub,
    FaChrome,
    FaLeaf,
    FaCog,
    FaCommentDots,
} from "react-icons/fa";
import Education from "../components/Education";

const ExperiencePage = () => {
    return (
        <>
            <div className="container">
                <div className="row">

                    {/* Section Label */}
                    <div className="section-label">
                        <span className="dot-lbl"></span>
                        MY EXPERIENCE
                    </div>

                    <div className="exp-content">

                        {/* Timeline */}
                        <div className="timeline-wrap">

                            {/* Experience 1 */}
                            <div className="tl-row">
                                <div className="tl-date">
                                    <span className="tl-year">Present</span>
                                    <span className="tl-dates-sub">
                                        Dec 2025 – Present
                                    </span>
                                </div>

                                <div className="tl-spine">
                                    <div className="tl-dot"></div>
                                    <div className="tl-line"></div>
                                </div>

                                <div className="tl-card">
                                    <div className="tl-card-header">
                                        <div className="tl-icon">
                                            <FaBriefcase />
                                        </div>

                                        <div className="tl-info">
                                            <div className="tl-title-row">
                                                <span className="tl-job">
                                                    Full Stack Developer (Freelance)
                                                </span>

                                                <span className="tl-current">
                                                    Current
                                                </span>
                                            </div>

                                            <div className="tl-company">
                                                Web Developer
                                            </div>
                                        </div>
                                    </div>

                                    <p className="tl-desc">
                                        Building responsive, user-friendly websites
                                        and web applications.
                                    </p>

                                    <div className="tl-tags">
                                        <span className="tl-tag">HTML</span>
                                        <span className="tl-tag">CSS</span>
                                        <span className="tl-tag">JavaScript</span>
                                        <span className="tl-tag">React</span>
                                        <span className="tl-tag">Java</span>
                                        <span className="tl-tag">MySQL</span>
                                    </div>
                                </div>
                            </div>

                            {/* Experience 2 */}
                            <div className="tl-row">
                                <div className="tl-date">
                                    <span className="tl-year">2025-2026</span>
                                    <span className="tl-dates-sub">
                                        Dec 2025 – Jan 2026
                                    </span>
                                </div>

                                <div className="tl-spine">
                                    <div className="tl-dot"></div>
                                    <div className="tl-line"></div>
                                </div>

                                <div className="tl-card">
                                    <div className="tl-card-header">
                                        <div className="tl-icon">
                                            <FaUserTie />
                                        </div>

                                        <div className="tl-info">
                                            <span className="tl-job">
                                                Full Stack Developer Intern
                                            </span>

                                            <div className="tl-company">
                                                Infosys Springboard
                                            </div>
                                        </div>
                                    </div>

                                    <p className="tl-desc">
                                        Completed training in Java and Spring Boot
                                        development.
                                    </p>

                                    <div className="tl-tags">
                                        <span className="tl-tag">React</span>
                                        <span className="tl-tag">Spring Boot</span>
                                        <span className="tl-tag">MySQL</span>
                                    </div>
                                </div>
                            </div>

                            {/* Experience 3 */}
                            <div className="tl-row">
                                <div className="tl-date">
                                    <span className="tl-year">2024-2025</span>
                                    <span className="tl-dates-sub">
                                        Jul 2024 – Dec 2025
                                    </span>
                                </div>

                                <div className="tl-spine">
                                    <div className="tl-dot"></div>
                                    <div className="tl-line"></div>
                                </div>

                                <div className="tl-card">
                                    <div className="tl-card-header">
                                        <div className="tl-icon">
                                            <FaLaptopCode />
                                        </div>

                                        <div className="tl-info">
                                            <span className="tl-job">
                                                Web Development Intern
                                            </span>

                                            <div className="tl-company">
                                                Datex Technology Pvt Ltd
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Experience 4 */}
                            <div className="tl-row">
                                <div className="tl-date">
                                    <span className="tl-year">2023-2024</span>
                                    <span className="tl-dates-sub">
                                        Jan 2023 – Jun 2024
                                    </span>
                                </div>

                                <div className="tl-spine">
                                    <div className="tl-dot"></div>
                                </div>

                                <div className="tl-card">
                                    <div className="tl-card-header">
                                        <div className="tl-icon">
                                            <FaJava />
                                        </div>

                                        <div className="tl-info">
                                            <span className="tl-job">
                                                Advance Java Developer Intern
                                            </span>

                                            <div className="tl-company">
                                                Tech Maven
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Sidebar */}
                        <div className="sidebar">

                            <div className="side-card">
                                <div className="side-title">
                                    <div className="side-title-icon">
                                        <FaTrophy />
                                    </div>
                                    What I've Gained
                                </div>

                                <ul className="gained-list">
                                    <li className="gained-item">
                                        <div className="gained-check">
                                            <FaCheck />
                                        </div>
                                        Hands-on experience in full stack development
                                    </li>

                                    <li className="gained-item">
                                        <div className="gained-check">
                                            <FaCheck />
                                        </div>
                                        Strong problem solving and debugging skills
                                    </li>

                                    <li className="gained-item">
                                        <div className="gained-check">
                                            <FaCheck />
                                        </div>
                                        Responsive website development
                                    </li>
                                </ul>
                            </div>

                            <div className="side-card">
                                <div className="side-title">
                                    <div className="side-title-icon">
                                        <FaCog />
                                    </div>
                                    Tools & Technologies
                                </div>

                                <div className="tools-grid">

                                    <div className="tool-item">
                                        <div className="tool-icon">
                                            <FaCode style={{ color: "#007ACC" }} />
                                        </div>
                                        <span className="tool-name">VS Code</span>
                                    </div>

                                    <div className="tool-item">
                                        <div className="tool-icon">
                                            <FaGitAlt style={{ color: "#F1502F" }} />
                                        </div>
                                        <span className="tool-name">Git</span>
                                    </div>

                                    <div className="tool-item">
                                        <div className="tool-icon">
                                            <FaGithub style={{ color: "#181717" }} />
                                        </div>
                                        <span className="tool-name">GitHub</span>
                                    </div>

                                    <div className="tool-item">
                                        <div className="tool-icon">
                                            <SiPostman style={{ color: "#FF6C37" }} />
                                        </div>
                                        <span className="tool-name">Postman</span>
                                    </div>

                                    <div className="tool-item">
                                        <div className="tool-icon">
                                            <SiEclipseide style={{ color: "#2C2255" }} />
                                        </div>
                                        <span className="tool-name">Eclipse</span>
                                    </div>

                                    <div className="tool-item">
                                        <div className="tool-icon">
                                            <FaChrome style={{ color: "#4285F4" }} />
                                        </div>
                                        <span className="tool-name">Chrome</span>
                                    </div>

                                    <div className="tool-item">
                                        <div className="tool-icon">
                                            <SiMysql style={{ color: "#00758F" }} />
                                        </div>
                                        <span className="tool-name">MySQL</span>
                                    </div>

                                    <div className="tool-item">
                                        <div className="tool-icon">
                                            <SiMongodb style={{ color: "#47A248" }} />
                                        </div>
                                        <span className="tool-name">MongoDB</span>
                                    </div>

                                    <div className="tool-item">
                                        <div className="tool-icon">
                                            <SiNetlify style={{ color: "#00C7B7" }} />
                                        </div>
                                        <span className="tool-name">Netlify</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Stats/>

                <Education />
            </div>
            <br />

            <Footer />
        </>
    );
};
export default ExperiencePage;