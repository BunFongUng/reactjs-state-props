import React, { Component } from 'react';

import StudentsList from './students/StudentsList';

import SubjectsList from './subjects/SubjectsList';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studens: [
                {
                    name: 'LesterLy',
                    age: 24
                },
                {
                    name: 'Lester',
                    age: 25
                },
                {
                    name: 'BunFong',
                    age: 26
                }
            ],
            subjects: [
                {
                    title: 'NodeJs'
                },
                {
                    title: 'Angular 2'
                },
                {
                    title: 'ReactJs'
                },
                {
                    title: 'Laravel'
                }
            ]
        };
    }
    render(){
        return(
            <div>
                <StudentsList students={this.state.studens}></StudentsList>
                <SubjectsList subjects={this.state.subjects}></SubjectsList>
            </div> 
        );
    }   
}