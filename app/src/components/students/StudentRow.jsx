import React, {Component} from 'react';

export default class StudentRow extends Component {
    render(){
        return(
          <div>
              <div className="row thumbnail">
                <div className="col-md-2 remove-padding-right">
                    <label htmlFor="name" className="label label-primary">Student Name</label>
                </div>
                <div className="col-md-9 remove-padding-left">
                    <p>{this.props.student.name}</p>
                </div>

                <div className="col-md-2 remove-padding-right">
                    <label htmlFor="age" className="label label-info">Student Age</label>
                </div>
                <div className="col-md-9 remove-padding-left">
                    <p>{this.props.student.age}</p>
                </div>
            </div>   
          </div>
        );
    }
}