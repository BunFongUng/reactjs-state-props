import React, { Component } from 'react';

import SubjectRow from './SubjectRow';

export default class SubjectsList extends Component {
    render(){
        return(
            <ul className="list-group">
                {this.props.subjects.map((subject, i) => <SubjectRow key = {i} subject = {subject}></SubjectRow>)}
            </ul>
        );
    }
}
