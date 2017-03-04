import React, { Component } from 'react';

import StudentRow from './StudentRow';

export default class StudentsList extends Component {
    render(){
        return(
            <div>
                {this.props.students.map((student, i) => <StudentRow key = { i } student = { student }></StudentRow>)} 
            </div>
        );
    }
}