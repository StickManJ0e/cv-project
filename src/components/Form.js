import React from "react";

let Form = (props) => {
    const { addWork, workExperiences, educationExperiences, addEducation } = props;

    return (
        <form>
            <fieldset>
                <legend>Personal Information</legend>
                <input type="text" name="firstName" placeholder="First name"></input>
                <input type="text" name="lastName" placeholder="Last name"></input>
                <input type="email" name="email" placeholder="Email"></input>
                <input type="number" name="phoneNumber" placeholder="Phone Number"></input>
            </fieldset>

            <fieldset>
                <legend>Education</legend>
                {educationExperiences.map((education) => {
                    return (
                        <div>
                            <input type="text" name="schoolName" placeholder="School Name"></input>
                            <input type="text" name="degree" placeholder="Degree"></input>
                            <input type="text" name="studyFrom" placeholder="From"></input>
                            <input type="text" name="studyTo" placeholder="To"></input>
                        </div>
                    )
                })}
                <button onClick={(e) => { e.preventDefault(); addEducation() }} >Add Education</button>
            </fieldset>

            <fieldset>
                <legend>Experience</legend>
                {workExperiences.map((work) => {
                    return (
                        <div>
                            <input type="text" name="company" placeholder="Company"></input>
                            <input type="text" name="position" placeholder="Position Title"></input>
                            <input type="text" name="mainTasks" placeholder="Main Tasks of Job"></input>
                            <input type="text" name="studyFrom" placeholder="From"></input>
                            <input type="text" name="studyTo" placeholder="To"></input>
                        </div>
                    )
                })}
                <button onClick={(e) => { e.preventDefault(); addWork() }} >Add Experience</button>
            </fieldset>
            <button type="submit">Generate</button>
        </form>
    )
}

export default Form;