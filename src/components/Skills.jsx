import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../css/Skills.css"

import "swiper/css";

const skills = [
    { name: "HTML", icon: "fab fa-html5", percent: 95 },
    { name: "CSS", icon: "fab fa-css3-alt", percent: 90 },
    { name: "Bootstrap", icon: "fab fa-bootstrap", percent: 90 },
    { name: "JavaScript", icon: "fab fa-js", percent: 90 },
    { name: "Java", icon: "fab fa-java", percent: 85 },
    { name: "Python", icon: "fab fa-python", percent: 85 },
    { name: "React", icon: "fab fa-react", percent: 85 },
    { name: "Spring Boot", icon: "devicon-spring-original colored", percent: 85 },
    { name: "MySQL", icon: "devicon-mysql-plain colored", percent: 90 },
    { name: "VS Code", icon: "devicon-vscode-plain colored", percent: 80 },
    { name: "Eclipse", icon: "devicon-eclipse-plain colored", percent: 90 },
    { name: "GitHub", icon: "fab fa-github", percent: 90 },
];

function Skills() {
    return (
        <section className="skills-section">
            <div className="container">

                <div className="section-header">
                    <div className="skill-section-label">MY SKILLS</div>

                    <h2 className="section-title">
                        Technologies I Work With
                    </h2>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {skills.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <div className="skill-card">

                                <span className="skill-icon">
                                    <i className={skill.icon}></i>
                                </span>

                                <h5 className="skill-name">
                                    {skill.name}
                                </h5>

                                <div className="skill-bar-wrap">
                                    <div
                                        className="skill-bar"
                                        style={{
                                            width: `${skill.percent}%`,
                                        }}
                                    ></div>
                                </div>

                                <span className="skill-pct">
                                    {skill.percent}%
                                </span>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}

export default Skills;