import React from "react";
import {
    FaBriefcase,
    FaCode,
    FaCommentDots,
    FaUserCheck
} from "react-icons/fa";

const Stats = () => {
    return (
        <div className="container">
            <div className="row">

                <div
                    className="stats-bar"
                    style={{ transitionDelay: ".2s" }}
                >

                    <div className="stat-item">
                        <div className="stat-icon">
                            <FaBriefcase />
                        </div>

                        <div>
                            <div className="stat-num">
                                1+
                            </div>

                            <div className="stat-lbl">
                                Years of Experience
                            </div>
                        </div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-icon">
                            <FaCode />
                        </div>

                        <div>
                            <div className="stat-num">
                                10+
                            </div>

                            <div className="stat-lbl">
                                Technologies Used
                            </div>
                        </div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-icon">
                            <FaCommentDots />
                        </div>

                        <div>
                            <div className="stat-num">
                                10+
                            </div>

                            <div className="stat-lbl">
                                Projects Completed
                            </div>
                        </div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-icon">
                            <FaUserCheck />
                        </div>

                        <div>
                            <div className="stat-num">
                                100%
                            </div>

                            <div className="stat-lbl">
                                Dedication
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Stats;