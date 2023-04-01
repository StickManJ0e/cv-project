import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Form from './components/Form'
import CV from './components/CV';
import uniqid from "uniqid";

const App2 = () => {
  const [personal, setPersonal] = useState({
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phoneNumber: '',
    about: '',
  });

  const [education, setEducation] = useState({
    schoolName: '',
    degree: '',
    start: '',
    end: '',
    id: uniqid(),
  });

  const [educationExperiences, setEducationExperiences] = useState([]);

  const [work, setWork] = useState({
    company: '',
    position: '',
    mainTasks: '',
    start: '',
    end: '',
    id: uniqid(),
  });

  const [workExperiences, setWorkExperiences] = useState([]);

  let addEducation = () => {
    setEducationExperiences(educationExperiences.concat(education));
    setEducation({
      schoolName: '',
      degree: '',
      start: '',
      end: '',
      id: uniqid(),
    })
  }

  let addWork = () => {
    setWorkExperiences(workExperiences.concat(work));
    setWork({
      company: '',
      position: '',
      mainTasks: '',
      start: '',
      end: '',
      id: uniqid(),
    })
  }

  let removeEducation = (id) => {
    setEducationExperiences(educationExperiences.filter((item) => item.id !== id))
  }

  let removeWork = (id) => {
    setWorkExperiences(workExperiences.filter((item) => item.id !== id))
  }

  let setEducationInfo = () => {
    //Setting each education object with form information
    let educationDivs = document.querySelectorAll('.education-input-div');
    educationDivs.forEach((educationDiv) => {
      //Get div key and corresponding index number
      let key = educationDiv.getAttribute('id');
      let index = educationExperiences.findIndex((education) => education.id === key);
      //Create new education object with from information and new array with the new object
      let newObject = {
        schoolName: document.querySelector(`div#${key} >input[name="schoolName"]`).value,
        degree: document.querySelector(`div#${key} >input[name="degree"]`).value,
        start: document.querySelector(`div#${key} >input[name="studyFrom"]`).value,
        end: document.querySelector(`div#${key} >input[name="studyTo"]`).value,
        id: educationExperiences[index].id,
      }
      let newArray = educationExperiences;
      newArray[index] = newObject;

      //Set education array with new array
      setEducationExperiences(newArray);
    })
  }

  let setWorkInfo = () => {
    let workDivs = document.querySelectorAll('.work-input-div');
    workDivs.forEach((workDiv) => {
      //Get div key and corresponding index number
      let key = workDiv.getAttribute('id');
      let index = workExperiences.findIndex((work) => work.id === key);

      //Create new education object with from information and new array with the new object
      let newObject = {
        company: document.querySelector(`div#${key} >input[name="company"]`).value,
        position: document.querySelector(`div#${key} >input[name="position"]`).value,
        mainTasks: document.querySelector(`div#${key} >input[name="mainTasks"]`).value,
        start: document.querySelector(`div#${key} >input[name="workFrom"]`).value,
        end: document.querySelector(`div#${key} >input[name="workTo"]`).value,
        id: workExperiences[index].id,
      }
      let newArray = workExperiences;
      newArray[index] = newObject;

      //Set work array with new array
      setWorkExperiences(newArray);
    })
  }

  let onFormChange = (e) => {
    e.preventDefault();
    setPersonal({
      firstName: document.querySelector('input[name="firstName"]').value,
      lastName: document.querySelector('input[name="lastName"]').value,
      title: document.querySelector('input[name="title"]').value,
      email: document.querySelector('input[name="email"]').value,
      phoneNumber: document.querySelector('input[name="phoneNumber"]').value,
      about: document.querySelector('input[name="about"]').value,
    })

    setEducationInfo();
    setWorkInfo();
  }

  return (
    <div>
      <Form
        onFormChange={onFormChange}
        personal={personal}
        addWork={addWork}
        removeWork={removeWork}
        workExperiences={workExperiences}
        addEducation={addEducation}
        removeEducation={removeEducation}
        educationExperiences={educationExperiences}
      />
      <CV
        personal={personal}
        educationExperiences={educationExperiences}
        workExperiences={workExperiences}
      />
    </div>
  )

}


//Class Component Ver
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       personal: {
//         firstName: '',
//         lastName: '',
//         title: '',
//         email: '',
//         phoneNumber: '',
//         about: '',
//       },
//       education: {
//         schoolName: '',
//         degree: '',
//         start: '',
//         end: '',
//         id: uniqid(),
//       },
//       educationExperiences: [],
//       work: {
//         company: '',
//         position: '',
//         mainTasks: '',
//         start: '',
//         end: '',
//         id: uniqid(),
//       },
//       workExperiences: [],
//     }
//   }

//   //Add Education and Work Tiles to template
//   addEducation = () => {
//     this.setState({
//       educationExperiences: this.state.educationExperiences.concat(this.state.education),
//       education: {
//         schoolName: '',
//         degree: '',
//         start: '',
//         end: '',
//         id: uniqid(),
//       },
//     })
//   }

//   addWork = () => {
//     this.setState({
//       workExperiences: this.state.workExperiences.concat(this.state.work),
//       work: {
//         company: '',
//         position: '',
//         mainTasks: '',
//         start: '',
//         end: '',
//         id: uniqid(),
//       },
//     })
//   }

//   //Remove Education and Work Tiles from template
//   removeEducation = (id) => {
//     this.setState({
//       educationExperiences: this.state.educationExperiences.filter(item => item.id !== id),
//     });
//   }

//   removeWork = (id) => {
//     this.setState({
//       workExperiences: this.state.workExperiences.filter(item => item.id !== id),
//     })
//   }

//   setEducationInfo = () => {
//     //Setting each education object with form information
//     let educationDivs = document.querySelectorAll('.education-input-div');
//     educationDivs.forEach((educationDiv) => {
//       //Get div key and corresponding index number
//       let key = educationDiv.getAttribute('id');
//       let index = this.state.educationExperiences.findIndex((education) => education.id === key);
//       //Create new education object with from information and new array with the new object
//       let newObject = {
//         schoolName: document.querySelector(`div#${key} >input[name="schoolName"]`).value,
//         degree: document.querySelector(`div#${key} >input[name="degree"]`).value,
//         start: document.querySelector(`div#${key} >input[name="studyFrom"]`).value,
//         end: document.querySelector(`div#${key} >input[name="studyTo"]`).value,
//         id: this.state.educationExperiences[index].id,
//       }
//       let newArray = this.state.educationExperiences;
//       newArray[index] = newObject;

//       //Set education array with new array
//       this.setState({
//         educationExperiences: newArray,
//       })
//     })
//   }

//   setWorkInfo = () => {
//     let workDivs = document.querySelectorAll('.work-input-div');
//     workDivs.forEach((workDiv) => {
//       //Get div key and corresponding index number
//       let key = workDiv.getAttribute('id');
//       let index = this.state.workExperiences.findIndex((work) => work.id === key);

//       //Create new education object with from information and new array with the new object
//       let newObject = {
//         company: document.querySelector(`div#${key} >input[name="company"]`).value,
//         position: document.querySelector(`div#${key} >input[name="position"]`).value,
//         mainTasks: document.querySelector(`div#${key} >input[name="mainTasks"]`).value,
//         start: document.querySelector(`div#${key} >input[name="workFrom"]`).value,
//         end: document.querySelector(`div#${key} >input[name="workTo"]`).value,
//         id: this.state.workExperiences[index].id,
//       }
//       let newArray = this.state.workExperiences;
//       newArray[index] = newObject;

//       //Set work array with new array
//       this.setState({
//         workExperiences: newArray,
//       })
//     })
//   }

//   //When form is submitted
//   onFormChange = (e) => {
//     e.preventDefault();
//     this.setState({
//       //Set state for personal information
//       personal: {
//         firstName: document.querySelector('input[name="firstName"]').value,
//         lastName: document.querySelector('input[name="lastName"]').value,
//         title: document.querySelector('input[name="title"]').value,
//         email: document.querySelector('input[name="email"]').value,
//         phoneNumber: document.querySelector('input[name="phoneNumber"]').value,
//         about: document.querySelector('input[name="about"]').value,
//       },
//     })

//     this.setEducationInfo();
//     this.setWorkInfo();
//   }

//   render() {
//     const { personal, educationExperiences, workExperiences } = this.state;

//     return (
//       <div>
//         <Form
//           onFormChange={this.onFormChange}
//           personal={personal}
//           addWork={this.addWork}
//           removeWork={this.removeWork}
//           workExperiences={workExperiences}
//           addEducation={this.addEducation}
//           removeEducation={this.removeEducation}
//           educationExperiences={educationExperiences}
//         />
//         <CV
//           personal={personal}
//           educationExperiences={educationExperiences}
//           workExperiences={workExperiences}
//         />
//       </div>
//     )
//   }
// }

export default App2;
