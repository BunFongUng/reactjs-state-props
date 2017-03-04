import React, { Component } from 'react';

export default class SubjectRow extends Component {
    render(){
        return(
            <li className="list-group-item">
                {this.props.subject.title}
            </li>
        );
    }
}