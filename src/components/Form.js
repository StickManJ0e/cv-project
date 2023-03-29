import React from "react";

let Form = (props) => {
    const { onFormChange, personal, addWork, removeWork, workExperiences, educationExperiences, addEducation, removeEducation } = props;

    return (
        <form onChange={onFormChange}>
            <fieldset>
                <legend>Personal Information</legend>
                <input type="text" name="firstName" placeholder="First name" defaultValue={personal.firstName}></input>
                <input type="text" name="lastName" placeholder="Last name" defaultValue={personal.lastName}></input>
                <input type="text" name="title" placeholder="Title" defaultValue={personal.title}></input>
                <input type="email" name="email" placeholder="Email" defaultValue={personal.email}></input>
                <input type="number" name="phoneNumber" placeholder="Phone Number" defaultValue={personal.phoneNumber}></input>
                <input type="text" name="about" placeholder="About you" defaultValue={personal.about}></input>
            </fieldset>

            <fieldset>
                <legend>Education</legend>
                {educationExperiences.map((education) => {
                    return (
                        <div className="education-input-div" key={education.id} id={education.id}>
                            <input type="text" name="schoolName" placeholder="School Name" defaultValue={education.schoolName}></input>
                            <input type="text" name="degree" placeholder="Degree" defaultValue={education.degree}></input>
                            <input type="text" name="studyFrom" placeholder="From" defaultValue={education.start}></input>
                            <input type="text" name="studyTo" placeholder="To" defaultValue={education.end}></input>
                            <button onClick={() => { removeEducation(education.id) }} id="removeWork">Delete</button>
                        </div>
                    )
                })}
                <button onClick={(e) => { e.preventDefault(); addEducation() }} >Add Education</button>
            </fieldset>

            <fieldset>
                <legend>Experience</legend>
                {workExperiences.map((work) => {
                    return (
                        <div className="work-input-div" key={work.id} id={work.id}>
                            <input type="text" name="company" placeholder="Company" defaultValue={work.company}></input>
                            <input type="text" name="position" placeholder="Position Title" defaultValue={work.position}></input>
                            <input type="text" name="mainTasks" placeholder="Main Tasks of Job" defaultValue={work.mainTasks}></input>
                            <input type="text" name="workFrom" placeholder="From" defaultValue={work.start}></input>
                            <input type="text" name="workTo" placeholder="To" defaultValue={work.end}></input>
                            <button onClick={() => { removeWork(work.id) }} id="removeWork">Delete</button>
                        </div>
                    )
                })}
                <button onClick={(e) => { e.preventDefault(); addWork() }} >Add Experience</button>
            </fieldset>
        </form>
    )
}

export default Form;