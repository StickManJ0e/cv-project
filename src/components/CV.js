import React from "react";

let CV = (props) => {
    const { personal, workExperiences, educationExperiences } = props;
    return (
        <div>
            <div className="header">
                <div className="name-title-div">
                    <h1>{personal.firstName} {personal.lastName}</h1>
                    <h2>{personal.title}</h2>
                </div>
                <div className="contact-div">
                    <div className="email">{personal.email}</div>
                    <div className="phone-number">{personal.phoneNumber}</div>
                </div>
            </div>

            <div className="about-div">{personal.about}</div>

            <div className="work-experience-div">
                <h3>Work Experience</h3>
                {workExperiences.map((work) => {
                    return (
                        <div className="work-div">
                            <div className="work-details-div">
                                <div className="work-position">{work.position}</div>
                                <div className="work-company">{work.company}</div>
                                <div className="work-time">{work.start} - {work.end}</div>
                            </div>
                            <div className="work-details">{work.mainTasks}</div>
                        </div>
                    )
                })}
            </div>

            <div className="education-div">
                <h3>Education</h3>
                {educationExperiences.map((education) => {
                    return (
                        <div className="education-div">
                            <div className="education-time">
                                {education.start} - {education.end}
                            </div>
                            <div className="education-info">
                                <div className="education-school">{education.schoolName}</div>
                                <div className="education-degree">{education.degree}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CV;