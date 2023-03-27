import './App.css';
import React, { Component } from 'react';
import Form from './components/Form'

class App extends Component {
  constructor() {
    super();

    this.state = {
      education: {
        schoolName: '',
        degree: '',
        start: '',
        end: '',
      },
      educationExperiences: [],
      work: {
        company: '',
        position: '',
        mainTasks: '',
        start: '',
        end: '',
      },
      workExperiences: [],
    }
  }

  addEducation = (id) => {
    this.setState({
      educationExperiences: this.state.educationExperiences.concat(this.state.education),
    })
  }

  addWork = (id) => {
    this.setState({
      workExperiences: this.state.workExperiences.concat(this.state.work),
    })
  }

  render() {
    const { educationExperiences, workExperiences } = this.state;

    return (
      <div>
        <Form
          addWork={this.addWork}
          workExperiences={workExperiences}
          addEducation={this.addEducation}
          educationExperiences={educationExperiences}
        />
      </div>
    )
  }
}

export default App;
